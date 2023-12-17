//Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let characters = ['!','@','#','$','%','^','&', "*", '(', ')'];

//console.log(generateBtn)
function generatePassword(){
  
  let password= "";
  let passwordCon="";

      let correctLength = false;
let passwordLength;
  while (correctLength === false) {
    passwordLength = prompt("Please type a password length from 8-128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      correctLength = true;
    } else {
      correctLength = false;
    };
  };

    let characterTypes =confirm ('Do you want to include uppercase, lower case and special characters?');
    
    if (characterTypes){
      passwordCon += upper, lower, numbers, characters;
    }

    for (var i=0; i<length; i++){
      password=passwordCon[math.floor(math.random()*passwordCon.length)]
    }
    return password
  }
   



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



