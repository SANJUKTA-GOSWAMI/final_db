var token ="90939080|-31949287683848313|90941222"
function checkLogin() {
    var isLogin = isJpdbSessionTokenExists(token, "Student", "user");
    if (isLogin === 200) {
        window.location.replace("dashboard.html");
    } else {
        return;
    }
}
function validateAndGetFormData() {
    var uNameVar = $("#uname").val();
    if (uNameVar === "") {
        $("#pstatus").text("Name is Required Value");
        $("#dstatus").css('visibility', 'visible');
        $("#uname").focus();
        return "";
    }

    var uMobileVar = $("#umobile").val();
    if (uMobileVar === "") {
        $("#pstatus").text("Mobile is Required Value");
        $("#dstatus").css('visibility', 'visible');
        $("#mobile").focus();
        return "";
    }
    var uPassVar = $("#upass").val();
    if (uPassVar === "") {
        $("#pstatus").text("Password is Required Value");
        $("#dstatus").css('visibility', 'visible');
        $("#upass").focus();
        return "";
    }
    var uRePassVar = $("#urepass").val();
    if (uRePassVar !== uPassVar) {
        $("#pstatus").text("Password not matched!!");
        $("#dstatus").css('visibility', 'visible');
        $("#urepass").focus();
        return "";
    }
    var jsonStrObj = {
        uName: uNameVar,
        uMobile: uMobileVar,
        uPass: uPassVar
    };
    return JSON.stringify(jsonStrObj);
}

function saveUser() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(token, jsonStr, "Student", "user");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
   $("#pstatus").text("Register Successfully!!");
        $("#dstatus").css('visibility', 'visible');
    window.location.replace("index.html");
    return;
}
