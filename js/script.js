// script.js
class Calculator {
    constructor(inputId) {
        this.input = document.getElementById(inputId);
        this.string = "";
        this.buttons = document.querySelectorAll("button");
        this.initialize();
    }

    initialize() {
        this.buttons.forEach((button) => {
            button.addEventListener('click', (e) => this.handleButtonClick(e));
        });
    }

    handleButtonClick(e) {
        const value = e.target.innerHTML;

        if (value === "=") {
            this.calculate();
        } else if (value === "AC") {
            this.clear();
        } else if (value === "DEL") {
            this.deleteLast();
        } else if (value === "÷") {
            this.appendOperator("/");
        } else if (value === "x") {
            this.appendOperator("*");
        } else {
            this.appendValue(value);
        }
    }

    calculate() {
        try {
            this.string = Function('"use strict";return (' + this.string + ')')();
            this.input.value = this.string;
        } catch (error) {
            this.input.value = "Error";
            this.string = "";
        }
    }

    clear() {
        this.string = "";
        this.input.value = this.string;
    }

    deleteLast() {
        this.string = this.string.substring(0, this.string.length - 1);
        this.input.value = this.string;
    }

    appendOperator(operator) {
        this.string += operator;
        this.input.value = this.string;
    }

    appendValue(value) {
        this.string += value;
        this.input.value = this.string;
    }
}

// Inisialisasi kalkulator
const calculator = new Calculator("inputBox");