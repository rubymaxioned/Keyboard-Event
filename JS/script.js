var keySpan = document.querySelector(".e-key");
var codeSpan = document.querySelector(".e-code");
var keycodeSpan = document.querySelector(".e-keycode");
var input = document.querySelector(".input");

var a = document.querySelector(".press");
var b = document.querySelector(".key");

a.addEventListener("click", myFunction);
function myFunction() {
    a.classList.add('hide');
    b.classList.add('show');
}

input.addEventListener("keypress", function (e) {
    keySpan.innerText = e.key;
    codeSpan.innerText = e.keyCode;
    keycodeSpan.innerText = e.code;
})












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