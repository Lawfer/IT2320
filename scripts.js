var tracker = "Arlinn";

function Transform() {
    'use strict';
    
    var image = document.getElementById('Arlinn');
    
    if (tracker === "Arlinn") {
        image.src = "ArlinnT.jpg";
        tracker = "ArlinnT";
    }
    
        else {
            image.src = "Arlinn.jpg";
            tracker = "Arlinn";
        }
}

function MouseOver()
{
    x.className = "li.highlight";
}