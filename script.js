var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("linearGradient");
var css = document.querySelector(".css")

function setGradient(){
	body.style.background = "linear-gradient(to right,"
	+color1.value
	+","
	+color2.value
	+")";

	css.textContent = "background: "+body.style.background +";"
}
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
