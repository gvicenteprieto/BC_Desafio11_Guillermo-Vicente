//calculator version 1.0

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

const result = document.getElementById("result");
const resetBtn = document.getElementById("reset");
const clear_display = document.querySelector(".clear-display");

const regex = /^-?\d{0,13}(\.\d{0,13})?$/;

num1.addEventListener("keyup", validateInput);
num2.addEventListener("keyup", validateInput);

function validateInput() {
    if (num1.value !== "" || num2.value !== "") {
        if ((!regex.test(num1.value)) || (!regex.test(num2.value))) {
            result.classList.remove("success");
            result.classList.add("error");
            error("Ingrese sólo números");
        } else if (num1.value.length > 13 || num2.value.length > 13) {
            result.classList.remove("success");
            result.classList.add("error");
            error("No ingrese más de 13 dígitos");
        }
    }

    if (regex.test(num1.value) && regex.test(num2.value)) {
        result.classList.remove("error");
        result.classList.remove("success");
        result.value = "";
    }
};

clear_display.addEventListener("click", clearResult);

function clearResult() {
    result.classList.remove("error");
    result.classList.remove("success");
    result.value = "";
}

function error(msg) {
    if (msg === undefined) {
        msg = "Error: invalid input";
    } else {
        msg = msg;
    }
    result.value = msg;
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
resetBtn.addEventListener("click", reset);

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
        result.classList.add("error");
        error("Por favor ingrese dos números");
    } else if (regex.test(num1) && regex.test(num2)) {
        result.classList.remove("error");
        result.classList.add("success");
        result.value = Number(num1) + Number(num2);
    } else {
        error();
    }
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    result.classList.remove("error");
    result.classList.remove("success");
    result.value = "";
}

function subtract() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
        result.classList.add("error");
        error("Por favor ingrese dos números");
    } else if (regex.test(num1) && regex.test(num2)) {
        result.classList.remove("error");
        result.classList.add("success");
        result.value = Number(num1) - Number(num2);
    } else {
        error();
    }
}

function multiply() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
        result.classList.add("error");
        error("Por favor ingrese dos números");
    } else if (regex.test(num1) && regex.test(num2)) {
        result.classList.remove("error");
        result.classList.add("success");
        result.value = Number(num1) * Number(num2);
    } else {
        error();
    }
}

function divide() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num1 === "" || num2 === "") {
        result.classList.add("error");
        error("Por favor ingrese dos números");
    } else if (num2 === "0") {
        result.classList.add("error");
        error("No se puede dividir por cero");
    } else if (regex.test(num1) && regex.test(num2)) {
        result.classList.remove("error");
        result.classList.add("success");
        result.value = (Number(num1) / Number(num2)).toFixed(12);
    } else {
        error();
    }
}


//calculator version 2.0

const display = document.querySelector('#display');
const res = document.querySelector('#res');
const clearAll = document.querySelector('#clear');
const clearDisplay = document.querySelector('.clearDisplay');
const equal = document.querySelector('#equal');
const decimal = document.querySelector('#decimal');

const addV2 = document.querySelector('#add-v2');
const subtractV2 = document.querySelector('#subtract-v2');
const multiplyV2 = document.querySelector('#multiply-v2');
const divideV2 = document.querySelector('#divide-v2');

function clear() {
    display.classList.remove('error');
    display.classList.remove('success');
    res.classList.remove('error');
    res.classList.remove('success');
    display.innerHTML = '';
    res.innerHTML = '';
}

clearAll.addEventListener('click', clear);
clearDisplay.addEventListener('click', clear);

equal.addEventListener('click', function (e) {
    if (display.innerHTML.includes('+') ||
        display.innerHTML.includes('-') ||
        display.innerHTML.includes('*') ||
        display.innerHTML.includes('/')) {
        res.innerHTML = eval(display.innerHTML);
        if (regex.test(display.innerHTML)) {
            display.classList.add('error');
            display.innerHTML = 'ERROR';
        } else if (display.innerHTML.includes('/0')) {
            display.classList.add('error');
            display.innerHTML = 'No se puede dividir por cero';
        } else {
            display.classList.remove('error');
            display.classList.add('success');
            display.innerHTML = eval(display.innerHTML);
        }
    } else {
        display.classList.add('error');
        display.innerHTML = 'ERROR';
    }
});

decimal.addEventListener('click', function (e) {
    if (display.innerHTML.includes('.') ||
        display.innerHTML.includes.length >= 13) {
        display.classList.add('error');
        display.innerHTML = 'ERROR';
    } else {
        display.innerHTML += '.';
    }
});

//recorriendo todos los números con un for y agregando el evento click
let numbers = document.querySelectorAll('.number');

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function (e) {
        if (display.innerHTML.length > 13) {
            display.classList.add('error');
            display.innerHTML = 'No ingrese más de 13 dígitos';
        } else {
            display.classList.remove('error');
            display.innerHTML += numbers[i].innerHTML;
        }
    });
}

addV2.addEventListener('click', function (e) {
    display.innerHTML += '+';
});

subtractV2.addEventListener('click', function (e) {
    display.innerHTML += '-';
});

multiplyV2.addEventListener('click', function (e) {
    display.innerHTML += '*';
});

divideV2.addEventListener('click', function (e) {
    display.innerHTML += '/';
});