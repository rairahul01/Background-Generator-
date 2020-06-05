var css = document.querySelector("h3")
var input = document.querySelectorAll("input");
var body = document.querySelector("body");
function background(){
	 body.style.background = "linear-gradient(to right, "+ input[0].value + "," + input[1].value + ")"
	 css.innerHTML = "(" + input[0].value + "," + input[1].value +")";
} 
input[0].addEventListener("input", background) 
input[1].addEventListener("input", background)
