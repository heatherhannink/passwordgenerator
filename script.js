

var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input

let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let characters = ['!','@','#','$','%','^','&', "*", '(', ')'];

function writePassword() {
  let length =prompt('How Many Digits?');
    if (length < 8) {
      alert('Minimum of 8 digits');
      return null;
      
    if (length > 128) 
      alert('maximum of 128 digits');
      return null;
  

  

    
      
    }

}



