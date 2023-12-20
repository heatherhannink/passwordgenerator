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
  let passwordCon=[];

      
let passwordLength;
  
    passwordLength = prompt("Please type a password length from 8-128 characters");
    if (passwordLength < 8 || passwordLength > 128) {
     alert ('Please make password between 8-128 characters');
     return 
    }
    
  

    let characterUpper =confirm ('Do you want to include uppercase characters?');
    let characterNumber =confirm ( 'Do you want to include numbers');  
    let specialCharacter =confirm ('Do you want to include special characters?');
    let characterLower =confirm ('Do you want to include lowercase characters?');

    if (characterNumber){
     passwordCon=passwordCon.concat(numbers);
    }

     if (characterUpper){
      passwordCon=passwordCon.concat(upper);
    }

      if (specialCharacter){
        passwordCon=passwordCon.concat(characters);
    }

    if (characterLower){
      passwordCon=passwordCon.concat(lower);
    }
     
    

    for (var i=0; i<passwordLength; i++){
      password += passwordCon[Math.floor(Math.random()*passwordCon.length)]
    }
    return password
  }
   



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



