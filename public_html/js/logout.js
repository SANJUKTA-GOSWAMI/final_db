function deleteSession() {
    var se = getJpdbSessionToken();
    jQuery.ajaxSetup({async: false});
    var x = removeSessionTokenFromJPDB("90939080|-31949290535706575|90940937", se, "Student", "user");
    jQuery.ajaxSetup({async: true});
    if (x === 200) {
        localStorage.removeItem("rec_no");
        window.location.replace("login.html");
    } else {
        alert("error");
        return;
    }
}
function checkLogin() {
    jQuery.ajaxSetup({async: false});
    var isLogin = isJpdbSessionTokenExists("90939080|-31949290535706575|90940937", "Student", "user");
    jQuery.ajaxSetup({async: true});

    if (isLogin === 200) {
        return;
    } else {
        window.location.replace("login.html");
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
    var putReqStr = createUPDATERecordRequest("90939080|-31949290535706575|90940937",
            jsonStr, "Student", "user", rec_no);
            //    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
            "http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    
}