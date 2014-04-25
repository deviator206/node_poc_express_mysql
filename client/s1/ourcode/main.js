var scr = ['login', 'page1', 'grp_in_detail', 'processing_screen'];
var currentScreenId = 0;
function showScreen(id) {"use strict";
    var i;
    for ( i = 0; i < scr.length; i++) {
        document.getElementById(scr[i]).style.display = "none";
    }

    currentScreenId = id;
    document.getElementById(scr[id]).style.display = "block";
};

function windowLoaded() {"use strict";
    showScreen(currentScreenId);
    addEventListeners();

};

function addEventListeners() {
    $(".grp_row").on("click", function() {
        currentScreenId++;
        if (currentScreenId > scr.length)
            currentScreenId = scr.length - 1;
        showScreen(currentScreenId);
    });

    $(".back-button").on("click", function() {
        currentScreenId--;
        if (currentScreenId < 0)
            currentScreenId = 0;
        showScreen(currentScreenId);
    })

    $(".add-frnds-to-grp").on("click", function() {
        $("#myModalForCreateGrp").modal('hide');
        $("#myModalForFriendList").modal('show');
    });

    $(".frnd-details").on("click", function() {
        $("#myModalForFriendList").modal('hide');
        $("#myModalForCreateGrp").modal('show');

    });

    $(".create-grp-btn").on("click", function() {
        $("#myModalForCreateGrp").modal('hide');
    });

    $(".register-button").on("click", function() {
        currentScreenId = scr.indexOf("page1");
        showScreen(currentScreenId);
        //showProcessing(true);
        /*
         POST REQUEST!!
         sendRequest_1('post', {
         "title" : "My Awesome T-shirt",
         "description" : "All about the details. Of course it's black."
         }, "http://localhost:1234/api/getphonenumber?")

         GET REQUEST!!
         sendRequest_1('get', '1213', "http://localhost:1234/api/products/")
         * */

        sendRequest_1('post', {
            "title" : "My Awesome T-shirt",
            "description" : "All about the details. Of course it's black."
        }, "http://localhost:1234/api/getphonenumber?")

    });

}

function sendRequest_1(method, data, url) {

    var xmlHttpReq = false;

    if (method === "get")
        url += data;
    // Mozilla/Safari
    if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    }
    // IE
    else if (window.ActiveXObject) {
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlHttpReq.open(method.toUpperCase(), url, true);
    if (method !== "get")
        xmlHttpReq.setRequestHeader('Content-Type', 'application/json');

    xmlHttpReq.onreadystatechange = function() {
        if (xmlHttpReq.readyState == 4) {
            console.log(xmlHttpReq.responseText);
        }
    };

    xmlHttpReq.send((method === "get") ? null : JSON.stringify(data));

}

function showProcessing(bcheck) {
    if (bcheck)
        $("#processing_screen").show();
    else
        $("#processing_screen").hide();
}

window.addEventListener("load", windowLoaded, false);
