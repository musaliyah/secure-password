//Emoticons used copied from: https://japaneseemoticons.me/

//VARIABLES and character arrays 
//special characters array
var special = ["~","'","!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","|", "/", ":", ";","<", ">",",",".","?"];
//uppercase characters array
var upper = ["A", "B", "C", "D", "E", "F", "G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//lowercase characters array
var lower = ["a", "b", "c", "d", "e", "f", "g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//numbers 
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
var x; //selection of numbers when prompted
var y; //selection of special characters when prompted
var z; //selection of uppercase letters when prompted
var w; //selection of lowercase letters when prompted 
var length; //password length selected by user
var generate; //produces password after selecting and merging arrays (developed later in the document)


//selects the generate id from html to make the "generate password" button responsive
var generateBtn = document.querySelector("#generate");

function generatePassword () {
  //prompt: "when prompted for password criteria, then I choose a length of at least 8 characters and no more than 128 characters"

  //parseInt() is a function that obtains a string statement and returns an integer
  length = parseInt(prompt(" ( ◔ ౪◔)⊃━☆ﾟ.*・How long would you like your password? Pick a length between 8 and 128 characters."));

  //prompt: "when asked for character types to include in the password, then I confirm whether or not to include lowercase, uppercase, numbeers, and/or special characters"
  if(!length){ //if user does not select a length and proceeds
    alert("(⑉･̆⌓･̆⑉) Please pick a character length between 8-128!");
  } else if (length < 8 || length > 128){ //if the user selects a length that is shorter than 8 characters or longer than 128 characters they will get an alert that notifies them to select within the range and allows them to input a value. 
    length = parseInt(prompt("(๑‾᷆д‾᷇๑) The character length you selected is either too short or too long! Please choose between 8 and 128 characters"));
    x = confirm("(•̀o•́)ง Do you want your password to contain numbers?");

    y = confirm("(•̀o•́)ง Do you want your password to contain special characters?");

    z = confirm("(•̀o•́)ง Do you want your password to contain uppercase characters?");

    w = confirm("(•̀o•́)ง Do you want your password to contain lowercase letters?");
  //if user does select a value within the range, they continue to face prompts regarding whether they want to include numbers, special characters, uppercaser letters and lowercase letters. 
  } else {
    x = confirm("(•̀o•́)ง Do you want your password to contain numbers?");

    y = confirm("(•̀o•́)ง Do you want your password to contain special characters?");

    z = confirm("(•̀o•́)ง Do you want your password to contain uppercase characters?");

    w = confirm("(•̀o•́)ง Do you want your password to contain lowercase letters?");
  }; 

  //concat used to merge two or more arrays referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

  //if and else if statements that follow the users selections for character type (the specified conditions) referenced: https://www.w3schools.com/js/js_if_else.asp

  //if the user does not select any character type then they are alerted to select at least one character type and told to refresh the page.
  if (!x && !y && !z && !w){
    generate = alert("(◞‸◟；) You must select at least one character type option! Please refresh and start again.")
  //if the user selects all of the character types then a password is generated with all of the character types. 
  } else if (x && y && z && w){
    generate = number.concat(special, upper, lower);
  //if user selects one character type 
  } else if (x){ 
    generate = number; //ex: generates just numbers if user selects only numbers when prompted.
  } else if (y){
    generate = special;
  } else if (z){
    generate = upper;
  } else if (w){
    generate = lower;
  //if user selects two character types 
  }  else if (w && x){ //merges arrays and produces password based upon specified conditions. 
    generate = lower.concat(number); //ex: generates a password that is composed of both lowercase letters and numbers
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
    //if user selects three character types 
  } else if (x && y && z){ 
    generate = number.concat(special, upper);  //ex: generates a password that is composed of both numbers, special characters and uppercase letters. 
  } else if (w && x && y){
    generate = number.concat(lower, special);
  } else if (w && x && z){
    generate = lower.concat(number, upper);
  } else if (w && y && z){
    genrate = lower.concat(special, upper);
  } 

  //creates empty array that can be filled with the content of the specified condiitons.
  var password = [];
  //for loop that generates password through a random combination of elements in the arrays of the user's selected characters 
  for (var i = 0; i < length; i++){
    var combineChoices = generate[Math.floor(Math.random() * generate.length)];
    password.push(combineChoices); //adds the elements to the empty password array
  }

  //join method creates a new string of elements from an array, combining what elements are in the array. 
  var password = password.join(''); 
  //referenced: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  
  //creates a function that stores password array 
  function chosenValues(password){
    document.getElementById("password").textContent = password; //using the DOM, textContent property applied to the password, and returns the text contained within the password element. 
    //referenced: https://www.w3schools.com/jsref/prop_node_textcontent.asp and 
    // https://stackoverflow.com/questions/22569678/how-to-change-textcontent-via-javascript and 
    //https://linuxhint.com/textcontent-javascript/
  }
  chosenValues(password); //calls function
  return password; //
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


var generate = document.querySelector("#generate");



