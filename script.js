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

	css.value = "background: "+body.style.background +";"
}
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)

setGradient(); //calling it to set value on page load

function clickToCopy() {
	var copyText = document.getElementById("snippet");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Copied to clipboard!");
  }