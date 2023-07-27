const prompt = require("prompt-sync")()

let generateRandomPassword = length => {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%';
  
    const numUppercase = 1;
    const numLowercase = 1;
    const numNumbers = 1;
    const numSpecialChars = 1;
  
    const allCharacters =
      uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
  
    for (let i = 0; i < numUppercase; i++) {
      password += getRandomCharacter(uppercaseLetters);
    }
    for (let i = 0; i < numLowercase; i++) {
      password += getRandomCharacter(lowercaseLetters);
    }
    for (let i = 0; i < numNumbers; i++) {
      password += getRandomCharacter(numbers);
    }
    for (let i = 0; i < numSpecialChars; i++) {
      password += getRandomCharacter(specialCharacters);
    }
  
    const remainingLength = length - (numUppercase + numLowercase + numNumbers + numSpecialChars);
    for (let i = 0; i < remainingLength; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
  
    return password;
  }
  
  let getRandomCharacter = str => {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str.charAt(randomIndex);
  }
  
 
  let length = prompt('Length of the Password : ')
  const password = generateRandomPassword(length);
  console.log(password);
  