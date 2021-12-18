const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.querySelector("#btn");
const backgroundColor = document.querySelector(".color");
const numberOfColors = colors.length;

button.addEventListener('click', () => {
    const changeTo = colors[getRandomNumber()];
    document.body.style.backgroundColor = changeTo;
    backgroundColor.innerHTML = changeTo;
})

function getRandomNumber() {
    return Math.floor(Math.random() * numberOfColors);
}