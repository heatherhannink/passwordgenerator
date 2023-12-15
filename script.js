//Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let characters = ['!','@','#','$','%','^','&', "*", '(', ')'];

//console.log(generateBtn)
function generatePassword(){
    let length =prompt('How Many Digits?');
    return "password"

  if (length <8){
    alert ("Password must be more than 8 digits");
  }

  if (length >128){
    alert ('Password must be less than 128 digits');
  }
   
}
function generatePassword(){
  let characterTypes =prompt ('Do you want to include uppercase, lower case and special characters?');
  return 'password'
}
// Write password to the #password input
function writePassword() {
  //console.log('Hello')
  var password = generatePassword();

  var passwordText = document.querySelector("#password");
//console.log(passwordText)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// // Assignment Code
// var generateBtn = document.querySelector("#generate");
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// // Write password to the #password input


// function writePassword() {

//     if (length < 8) {
//       alert('Minimum of 8 digits');
//       return null;
      
//     if (length > 128) 
//       alert('maximum of 128 digits');
//       return null;
  

  

    
      
//     }

// }



