const prompt = require("prompt-sync")()

let str = prompt('Enter String : ')

let reverse = msg => {

    let reverseString = [];
    let result = '';

    for (let i = msg.length - 1; i >= 0; i--) {
        reverseString.push(str[i])
    }

    for (const iterator of reverseString) {
        result = result + iterator;

    }
    console.log(result);


}

reverse(str)