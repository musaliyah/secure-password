//VARIABLES and character arrays 
//specialcharacters 
var special = ["~","'","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|", "/", ":", ";","<", ">",",",".","?"];
//uppercase characters
var upper = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//lowercase characters
var lower = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//numbers 
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var x;
var y;
var z;
var w;
var length;
var generate;



var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //prompt: choose the length of the password 8-128 characters 
  length = parseInt(prompt("How long would you like your password? Pick a length between 8 and 128 characters"))

  if(!length){
    alert("Please pick a character length between 8-128!");
  } else if (length < 8 || length > 128){
    length = parseInt(prompt("The character length you selected is either too short or too long! Please choose between 8 and 128 characters"));
    x = confirm("Do you want your password to contain numbers?");

    y = confirm("Do you want your password to contain special characters?");

    z = confirm("Do you want your password to contain uppercase characters?");

    w = confirm("Do you want your password to contain lowercase letters?");
  } else {
    x = confirm("Do you want your password to contain numbers?");

    y = confirm("Do you want your password to contain special characters?");

    z = confirm("Do you want your password to contain uppercase characters?");

    w = confirm("Do you want your password to contain lowercase letters?");
  }; 

  //concat used to merge two or more arrays https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  if (!x && !y && !z && !w){
    generate = alert("you must select at least one character type option!")
    x = confirm("Do you want your password to contain numbers?");

    y = confirm("Do you want your password to contain special characters?");

    z = confirm("Do you want your password to contain uppercase characters?");

    w = confirm("Do you want your password to contain lowercase letters?");
  } else if (x && y && z && w){
    generate = number.concat(special, upper, lower);
  } else if (x && y && z){
    generate = number.concat(special, upper);
  } else if (w && x && y){
    generate = number.concat(lower, special);
  } else if (w && x && z){
    generate = lower.concat(number, upper);
  } else if (w && y && z){
    genrate = lower.concat(special, upper);
  } else if (w && x){
    generate = lower.concat(number);
  } else if (w && z){
    generate = lower.concat(upper);
  } else if (w && y){
    generate = lower.concat(special);
  } else if (x && y){
    generate = number.concat(special);
  }  else if (x && z){
    generate = number.concat(upper);
  } else if (y && z){
    generate = special.concat(upper);
  } else if (x){
    generate = number;
  } else if (y){
    generate = special;
  } else if (z){
    generate = upper;
  } else if (w){
    generate = lower;
  }

  var password = [];

  for (var i = 0; i < length; i++){
    var combineChoices = generate[Math.floor(Math.random() * generate.length)];
    password.push(combineChoices);
  }

  var password = password.join("");
  chosenValues(password);
  return password;

  function chosenValues(password){
    document.getElementById("password").textContent = password;
  }

}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


var generate = document.querySelector("#generate");



