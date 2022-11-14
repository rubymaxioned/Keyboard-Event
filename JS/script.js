var keySpan = document.querySelector(".e-key");
var codeSpan = document.querySelector(".e-code");
var keycodeSpan = document.querySelector(".e-keycode");
var input = document.querySelector(".input");

var a = document.querySelector(".press span");
var b = document.querySelector(".key");

window.addEventListener("keypress", myFunction);
function myFunction(e) {
    keySpan.innerText = e.key;
    codeSpan.innerText = e.keyCode;
    keycodeSpan.innerText = e.code;
    a.classList.add('hide');
    b.classList.add('show');
}

window.addEventListener("keydown", myFunction);











