const hex = document.querySelector(".counter-hex");
const btn = document.querySelector(".generate")
const title = document.querySelector(".counter-title");
const container = document.querySelector(".counter-container")

const generateColor = () => {
    const randomColor = Math.random().toString(16).substring(2, 8).toUpperCase();
    document.body.style.backgroundColor = "#" + randomColor;
    container.style.color = "#" + randomColor;
    btn.style.backgroundColor = "#" + randomColor;
    hex.textContent = "#" + randomColor;
}

// const generateColorText = () => {
//     const randomColor = Math.random().toString(16).substring(2, 8).toUpperCase();
//     console.log("help")
// }


btn.addEventListener("click", generateColor);


generateColor();