﻿var highlighted = false;
var selected = {};

SelectPiece = function (element) {

    $(element).css("border", "1px solid red");

    selected = element;
    highlighted = true;
}

MovePiece = function (targetElement) {

    targetElement.className = selected.className;

    $(selected).css("border", "1px solid black");
    selected.className = "cell";

    highlighted = false;
    selected = {};
}

DeselectPiece = function (targetElement) {
    $(selected).css("border", "1px solid black");

    highlighted = false;
    selected = {};
}
$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {

        if (!highlighted) {
            if ($(this).hasClass("piece")) {
                SelectPiece(this)
            }

        

        }

        else {
            if (selected == this) {
                DeselectPiece(this)
            }
            else {
                MovePiece(this)
            }
        }
        

    });

});