let button0 = document.getElementById("Touch_0");
let button1 = document.getElementById("Touch_1");
let button2 = document.getElementById("Touch_2");
let button3 = document.getElementById("Touch_3");
let button4 = document.getElementById("Touch_4");
let button5 = document.getElementById("Touch_5");
let button6 = document.getElementById("Touch_6");
let button7 = document.getElementById("Touch_7");
let button8 = document.getElementById("Touch_8");
let button9 = document.getElementById("Touch_9");
let buttonComma = document.getElementById("Touch_Comma");
let buttonReturn = document.getElementById("Touch_Return");
let buttonEqual = document.getElementById("Touch_Equal");
let buttonPlus = document.getElementById("Touch_Plus");
let buttonMinor = document.getElementById("Touch_Minor");
let buttonMultiply = document.getElementById("Touch_Multiply");
let buttonDivide = document.getElementById("Touch_Divide");

let input = document.querySelector(".Calculator_Screen");


function displayScreen(screen) {
    let Calculator_Screen = document.querySelector(".Calculator_Screen");
    Calculator_Screen.innerText = screen;
  }

function add(a, b) {
return parseFloat(a) + parseFloat(b);
}
  
button0.addEventListener("click", () => {
    console.log(button0.value);
    displayScreen(button0.value);})
button1.addEventListener("click", () => {
    console.log(button1.value);
    displayScreen(button1.value);})
button2.addEventListener("click", () => {
    console.log(button2.value)
    displayScreen(button2.value);})
button3.addEventListener("click", () => {
    console.log(button3.value)
    displayScreen(button3.value);})
button4.addEventListener("click", () => {
    console.log("4");})
button5.addEventListener("click", () => {
    console.log("5");})
button6.addEventListener("click", () => {
    console.log("6");})
button7.addEventListener("click", () => {
    console.log("7");})
button8.addEventListener("click", () => {
    console.log("8");})
button9.addEventListener("click", () => {
    console.log("9");})
buttonComma.addEventListener("click", () => {
    console.log(",");})
*buttonReturn.addEventListener("click", () => {
    console.log("<--");})
buttonEqual.addEventListener("click", () => {
    console.log("=");})
buttonPlus.addEventListener("click", () => {
    console.log(buttonPlus.value);
    displayScreen(buttonPlus.value)
    add();})
buttonMinor.addEventListener("click", () => {
    console.log("-");})
buttonMultiply.addEventListener("click", () => {
    console.log("*");})
buttonDivide.addEventListener("click", () => {
    console.log("/");})

