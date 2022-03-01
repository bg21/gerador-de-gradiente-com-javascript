var css = document.querySelector(".codess")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var bodys = document.getElementById("gradient")
var linearDirection = document.getElementsByName("toDirection")[0]

function currentSettings() {
  var CSSprop = window.getComputedStyle(bodys, null).getPropertyValue("background-image")

  css.textContent = CSSprop
}

currentSettings()


function returnColor() {

  bodys.style.background =
    "linear-gradient(" +
    linearDirection.value +
    ", " +
    color1.value +
    "," +
    color2.value +
    ")";

  currentSettings()

}


document.querySelector('select[name="toDirection"]').onchange = returnColor;
color1.addEventListener("input", returnColor)
color2.addEventListener("input", returnColor)