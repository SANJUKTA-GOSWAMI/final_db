
//This Function is created to validate form data
$("#ques1").focus();
function validateAndGetFormData() {
    var ans1Var = $("#ques1").val();
    if (ans1Var === "") {
        alert("Answer is required.");
        $("#ques1").focus();
        return "";
    }
    
    var ans2Var = $("#ques2").val();
    if (ans2Var === "") {
        alert("Required Field");
        $("#ques2").focus();
        return "";
    }
    var ans3Var = $("#ques3").val();
    if (ans3Var === "") {
        alert("Required Field");
        $("#ques3").focus();
        return "";
    }
    var ans4Var = $("#ques4").val();
    if (ans4Var === "") {
        alert("Required Field");
        $("#ques4").focus();
        return "";
    }
    var ans5Var = $("#ques5").val();
    if (ans5Var === "") {
        alert("required");
        $("#ques5").focus();
        return "";
    }
    var ans6Var = $("#ques6").val();
    if (ans6Var === "") {
        alert("required");
        $("#ques6").focus();
        return "";
    }
    var ans7Var = $("#ques7").val();
    if (ans7Var === "") {
        alert("required");
        $("#ques7").focus();
        return "";
    }
    var ans8Var = $("#ques8").val();
    if (ans8Var === "") {
        alert("required");
        $("#ques8").focus();
        return "";
    }
    var ans9Var = $("#ques9").val();
    if (ans9Var === "") {
        alert("required");
        $("#ques9").focus();
        return "";
    }
    var ans10Var = $("#ques10").val();
    if (ans7Var === "") {
        alert("required");
        $("#ques10").focus();
        return "";
    }
    var jsonStrObj = {
        ques1: ans1Var,
        ques2: ans2Var,
        ques3: ans3Var,
        ques4: ans4Var,
        ques5: ans5Var,
        ques6: ans6Var,
        ques7: ans7Var,
        ques8: ans8Var,
        ques9: ans9Var,
        ques10: ans10Var
    };
    return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
        + "\"token\" : \""
        + connToken
        + "\","
        + "\"dbName\": \""
        + dbName
        + "\",\n" + "\"cmd\" : \"PUT\",\n"
        + "\"rel\" : \""
        + relName + "\","
        + "\"jsonStr\": \n"
        + jsonObj
        + "\n"
        + "}";
    return putRequest;
}
function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}
function resetForm() {
    $("#ques1").val("")
    $("#ques2").val("");
    $("#ques3").val("");
    $("#ques4").val("");
    $("#ques5").val("");
    $("#ques6").val("");
    $("#ques7").val("");
    $("#ques8").val("");
    $("#ques9").val("");
    $("#ques10").val("");
    $("#ques1").focus();
}
       //  Main Function
function saveEmployee() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t1");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    var url= "t2.html"; 
    window.location = url; 
}
function saveEmployee2() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t2");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    var url= "t3.html"; 
    window.location = url; 
}
function saveEmployee3() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t3");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    var url= "t4.html"; 
    window.location = url; 
}
function saveEmployee4() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t4");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    var url= "t5.html"; 
    window.location = url; 
}
function saveEmployee5() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t5");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    updateUser();
    var url= "t6.html"; 
    window.location = url;
}
function saveEmployee6() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90939081|-31949265854480930|90953441",jsonStr, "feedbackdb2k22", "t6");
    // alert(putReqStr);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommand(putReqStr,"http://api.login2explore.com:5577", "/api/iml");
    // alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
    updateUser();
    var url= "final.html"; 
    window.location = url;
}