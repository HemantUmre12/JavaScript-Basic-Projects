const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.querySelector("#btn");
const backgroundColor = document.querySelector(".color");
const numberOfColors = hex.length;

button.addEventListener('click', () => {
    const changeTo = getRandomHEX();
    document.body.style.backgroundColor = changeTo;
    backgroundColor.innerHTML = changeTo;
})

// console.log(`#${getRandomHEX()}`);

function getRandomHEX() {
    let hexValue = "#"
    for(let i = 1; i <= 6; i++) {
        hexValue += hex[getRandomNumber()];
    }
    return hexValue;
}

function getRandomNumber() {
    return Math.floor(Math.random() * numberOfColors);
}