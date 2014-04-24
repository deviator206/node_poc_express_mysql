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
        sendRequest('get', {
            "a" : "1"
        }, "register")
    });

}

function sendRequest(method, data, api) {
    var xmlhttp;
    var baseURL = "http://localhost:1234/"
    var apiLookUp = ['register'];
    var urlLookUp = ['getphonenumber/'];
    var actualURL = urlLookUp[(apiLookUp.indexOf(api))];
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", baseURL + "" + actualURL + "data=" + Math.random(), true);
    
    xmlhttp.send();
};

function showProcessing(bcheck) {
    if (bcheck)
        $("#processing_screen").show();
    else
        $("#processing_screen").hide();
}

window.addEventListener("load", windowLoaded, false);
