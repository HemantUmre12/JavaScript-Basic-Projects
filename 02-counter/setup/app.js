const decreaseButton = document.querySelector(".decrease");
const increaseButton = document.querySelector(".increase");
const resetButton = document.querySelector(".reset");
const valueOnScreen = document.getElementById("value");

class myValue{
    constructor(valueOnScreen) {
        this.value = 0;
        this.originalColor = getComputedStyle(valueOnScreen).getPropertyValue("color");
        this.valueOnScreen = valueOnScreen;
    }
    increaseVal() {
        this.value++;
    }
    decreaseVal() {
        this.value--;
    }
    resetVal() {
        this.value = 0;
    }
    displayVal() {
        valueOnScreen.innerText = this.value;
    }
    decideColor() {
        let colorOfValue;
        if(this.value === 0) {
            colorOfValue = this.originalColor;
        }
        else if(this.value < 0) {
            colorOfValue = "red";
        }
        else {
            colorOfValue = "green";
        }
        this.valueOnScreen.style.color = colorOfValue;
    }
};

let value = new myValue(valueOnScreen);

increaseButton.addEventListener('click', () => {
    value.increaseVal();
    value.displayVal();
    value.decideColor();
})
decreaseButton.addEventListener('click', () => {
    value.decreaseVal();
    value.displayVal();
    value.decideColor();
})
resetButton.addEventListener('click', () => {
    value.resetVal();
    value.displayVal();
    value.decideColor();
})



