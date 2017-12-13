var Home = {}

Home.Button1Click = function () {
    $.get("Home/Login", function (rawResponseData, status) {
        

        var deserializedData = JSON.parse(rawResponseData);
        data: {
            Username: $("#loginruser").val(),
            Password: $("#loginpass").val(),
              }

    });
}

Home.Button2Click = function () {
    $.ajax
        ({
            url: "Home/CreateAccount",
            data: {
                Username: $("#registeruser").val(),
                Password: $("#registerpass").val(),
                EmailAdd: $("#registeremail").val(),
                EmailCon: $("#registerconfirmemail").val()},
            success: function (result) { alert(result); }
        });
}

$(document).ready(function () {
    $(".button1").click(Home.Button1Click);
    $("#register").click(Home.Button2Click);
});