const prompt = require("prompt-sync")()

let romanToInt = (romanNumeral) => {
    const romanValues = {
      I: 1,
      V: 5,
      X: 10,
      
    };
  
    let result = 0;
  
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentChar = romanNumeral[i];
      const currentValue = romanValues[currentChar];
      const nextChar = romanNumeral[i + 1];
      const nextValue = romanValues[nextChar];
  
      if (nextValue > currentValue) {
        result += nextValue - currentValue;
        i++; 
      } else {
        result += currentValue;
      }
    }
  
    return result;
  };
  
 let romanStr = prompt('Enter Roman number: ');
 let result = romanToInt(romanStr);
 console.log(result);
  