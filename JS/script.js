var keySpan = document.querySelector(".e-key");
var codeSpan = document.querySelector(".e-code");
var keycodeSpan = document.querySelector(".e-keycode");
var input = document.querySelector(".input");

var a = document.querySelector(".press span");
var b = document.querySelector(".key");

window.addEventListener("keypress", myFunction);
function myFunction(e) {
    console.log(e);
    keySpan.innerText = e.key;
    codeSpan.innerText = e.keyCode;
    keycodeSpan.innerText = e.code;
    a.classList.add('hide');
    b.classList.add('show');
}

window.addEventListener("keydown", myFunction);
// function myFunction(e) {
//     console.log(e);
//     keySpan.innerText = e.key;
//     codeSpan.innerText = e.keyCode;
//     keycodeSpan.innerText = e.code;
//     console.log("inside");
//     a.classList.add('hide');
//     b.classList.add('show');
// }

// input.addEventListener("keypress", function (e) {
//     console.log(e);
//     keySpan.innerText = e.key;
//     codeSpan.innerText = e.keyCode;
//     keycodeSpan.innerText = e.code;
// })












// var a = document.querySelector(".press");
// var b = document.querySelector(".key");
// // console.log(b);
// a.addEventListener("click",myFunction);
// function myFunction(){
//     a.classList.add('hide');
//     b.classList.add('show');
// }
// var c = document.querySelectorAll('.key-name');
// // c.addEventListener('onkeypress',pressKey);
// // console.log(c);
// c.forEach(function(list){
//     list.addEventListener("keypress",function(event) {
//         console.log(e);
//     })
// })