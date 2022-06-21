var token ="90939080|-31949287683848313|90941222"
function deleteSession() {
    var se = getJpdbSessionToken();
    jQuery.ajaxSetup({async: false});
    var x = removeSessionTokenFromJPDB(token, se, "Student", "user");
    jQuery.ajaxSetup({async: true});
    if (x === 200) {
        localStorage.removeItem("rec_no");
        window.location.replace("index.html");
    } else {
        alert("error");
        return;
    }
}
function checkLogin() {
    jQuery.ajaxSetup({async: false});
    var isLogin = isJpdbSessionTokenExists(token, "Student", "user");
    jQuery.ajaxSetup({async: true});

    if (isLogin === 200) {
        return;
    } else {
        window.location.replace("index.html");
    }
}
function proceed(){
    var url = "t1.html"
    window.location = url;
}
// Function for genarating random values.
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
function updateUser() {
    var jsonStr={
        uMobile: makeid(5),
        uPass: makeid(5)
    };
   jsonStr=JSON.stringify(jsonStr);
    var rec_no = localStorage.getItem("rec_no");
    var putReqStr = createUPDATERecordRequest(token,
            jsonStr, "Student", "user", rec_no);
            //    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
            "http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    
}