var Home = {}

Button1Click = function () {
    alert("Moo");
}

Button2Click = function () {
    alert("Cow");
}

$(document).ready(function () {
    $("#login").click(Button1Click);
    $("#register").click(Button2Click);
});