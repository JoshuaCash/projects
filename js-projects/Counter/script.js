// const subtract = document.querySelector(".btn-subtract");
// const reset = document.querySelector(".btn-reset");
// const add = document.querySelector(".btn-add");
const counter = document.querySelector(".counter-number");
const buttons = document.querySelector(".buttons");


buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
        counter.innerHTML++;
    }
    if (e.target.classList.contains("subtract")) {
        counter.innerHTML--;
    }
    if (e.target.classList.contains("reset")) {
        counter.innerHTML = 0;
    }
});


















// add.addEventListener("click", () => {
//     counter.innerHTML++;
// })
// reset.addEventListener("click", () => {
//     counter.innerHTML = 0;
// })
// subtract.addEventListener("click", () => {
//     counter.innerHTML--;
// })