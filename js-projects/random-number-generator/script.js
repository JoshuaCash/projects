// const subtract = document.querySelector(".btn-subtract");
// const reset = document.querySelector(".btn-reset");
// const add = document.querySelector(".btn-add");
const counter = document.querySelector(".counter-number");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("generate")) {
        counter.innerHTML = Math.floor(Math.random() * 10 + 1)
    }
});