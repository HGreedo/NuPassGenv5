//DOM elements 
const resultEl = document.getElementById("generate");
//functions that generate random upper + lowercase, symbols, and numbers
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper);
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
} console.log(getRandomNumber);
function getRandomSymbol() {
  const symbols = '!@#$%^&*()<>,./?~[]{}';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
//Javascript Question Elements - variables need to equal the alerts  
const doYouWantLower = confirm("Would you like lowercase characters in your password?");
const doYouWantUpper = confirm("Would you like uppercase characters in your password?");
const doYouWantNumber = confirm("Would you like numbers in your password?");
const doYouWantSymbol = confirm("Would you like symbols in your password?");
const passwordLength = window.prompt("Please Enter The Number of Characters your Would like in your NEW Password (8-128)");
//generate event listen
const randomFunc =
{
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
resultEl.addEventListener('click', () => {
  const length = +passwordLength;
  var result = document.getElementById("password");
  const finalPass = generatePasswordFunc(
    doYouWantLower,
    doYouWantUpper,
    doYouWantSymbol,
    doYouWantNumber,
    length)
  result.textContent = finalPass;
});
//generate password function 
function generatePasswordFunc(lower, upper, number, symbol, length) {
  //1. Init pw var
  //2. Filter out unchecked types
  //3. Loop over length call generator function for each type
  //4. Add final pw to the pw var and return
  let generatePassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]
  );
  if (typesCount === 0) {
    return '';
  }
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      generatePassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatePassword.slice(0, length);
  return finalPassword;
};