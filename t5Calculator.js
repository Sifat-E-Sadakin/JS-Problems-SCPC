const prompt = require("prompt-sync")()

let calculate = (num1, num2, operation) => {
    let result = 0;
    // console.log(operation);
    if (operation == "+") {

        result = addison(num1, num2)
    }
    if (operation == "*") {
        result = multiplication(num1, num2)
    }
    if (operation == "-") {
        result = subtraction(num1, num2)
    }
    if (operation == "/") {
        result = division(num1, num2)

    }
    return result;

}

let addison = (num1, num2) => {
    return num1 + num2;
}
let subtraction = (num1, num2) => {
    return num1 - num2;
}
let multiplication = (num1, num2) => {
    return num1 * num2;
}
let division = (num1, num2) => {
    return num1 / num2;
}

let input1 = prompt('Enter First Number : ')
let input2 = prompt('Enter Second Number : ')
let input3 = prompt('Enter Operator (+,-,*,/) : ')
let result = calculate( parseFloat(input1), parseFloat(input2), input3);
console.log(result);
