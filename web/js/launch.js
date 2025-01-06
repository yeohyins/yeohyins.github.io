function zoomIn()
{
    var element = document.getElementById("overlay");
    element.style.visibility = "visible";

    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate

    element.style.top = y - 80;
    element.style.left = x - 80;
}

function zoomOut()
{
    var element = document.getElementById("overlay");
    element.style.visibility = "hidden";
}