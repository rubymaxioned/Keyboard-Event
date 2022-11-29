var keySpan = document.querySelector(".e-key");
var codeSpan = document.querySelector(".e-code");
var keycodeSpan = document.querySelector(".e-keycode");
var input = document.querySelector(".input");
var press = document.querySelector(".press span");
var key = document.querySelector(".key");

window.addEventListener("keydown", myFunction);
function myFunction(e) {
    keySpan.innerText = e.key;
    codeSpan.innerText = e.keyCode;
    keycodeSpan.innerText = e.code;
    press.classList.add('hide');
    key.classList.add('show');
}












