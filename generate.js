var intLength

var specialCharChoices
var numberChoices
var lowerCaseChoices
var UpperCaseChoices

var allCharUsed

var usedSpNum 
var usedNumLow 
var usedLowUpp 
var usedSpLow 
var usedNumUpp 
var usedSpUpp 

var usedSpNumLow
var usedNumLowUpp
var usedSpLowUpp
var usedSpNumUpp

var x 

function init() {
    collectData();  

}

function collectData(){

   var desiredLength = prompt("How long do you want your password to be? (8-128 characters)");
   intLength = Number(desiredLength);
   
   var wantSpecialCharacters = confirm("Do you want special characters");
   var wantNumbers = confirm("Do you want numbers");
   var wantLowerCase = confirm("Do you want lower case");
   var wantUpperCase = confirm("Do you want upper case");

   specialCharChoices = specialCharChoices = [`!#$%&@`];
   numberChoices = [`0123456789`];
   lowerCaseChoices = [`abcdefghijklmnopqrstuvwxyz`];
   UpperCaseChoices = [`ABCDEFGHIJKLMNOPQRSTUVWXYZ`];

   allCharUsed = specialCharChoices.concat(numberChoices, lowerCaseChoices, UpperCaseChoices);

   usedSpNum = specialCharChoices.concat(numberChoices);
   usedNumLow = numberChoices.concat(lowerCaseChoices);
   usedLowUpp = lowerCaseChoices.concat(UpperCaseChoices);
   usedSpLow = specialCharChoices.concat(lowerCaseChoices);
   usedNumUpp = numberChoices.concat(UpperCaseChoices);
   usedSpUpp = specialCharChoices.concat(UpperCaseChoices);

   usedSpNumLow = specialCharChoices.concat(numberChoices,lowerCaseChoices);
   usedNumLowUpp = numberChoices.concat(lowerCaseChoices,UpperCaseChoices);
   usedSpLowUpp = specialCharChoices.concat(lowerCaseChoices,UpperCaseChoices);
   usedSpNumUpp = specialCharChoices.concat(numberChoices,UpperCaseChoices);

   x = [];

if(wantSpecialCharacters === false && wantNumbers === false && wantLowerCase === false && wantUpperCase === false){
   alert("You must select at least one character type.")
   collectData()
} else {
   console.log("Thanks")
   } 


// first four where only one choice is true 
if (wantSpecialCharacters === true && wantNumbers === false && wantLowerCase === false && wantUpperCase === false ) {
    x += specialCharChoices;
} else if (wantSpecialCharacters === false && wantNumbers === true && wantLowerCase === false && wantUpperCase === false){
   x += numberChoices;
} else if (wantSpecialCharacters === false && wantNumbers === false && wantLowerCase === true && wantUpperCase === false){
   x += lowerCaseChoices;
} else if (wantSpecialCharacters === false && wantNumbers === false && wantLowerCase === false && wantUpperCase === true){
   x += UpperCaseChoices;

// when all are true 
} else if (wantSpecialCharacters === true && wantNumbers === true && wantLowerCase === true && wantUpperCase === true){
   x += allCharUsed;

// where a combination of two is true
} else if (wantSpecialCharacters === true && wantNumbers === true && wantLowerCase === false && wantUpperCase === false){
   x += usedSpNum;
} else if (wantSpecialCharacters === false && wantNumbers === true && wantLowerCase === true && wantUpperCase === false){
   x += usedNumLow;
} else if (wantSpecialCharacters === false && wantNumbers === false && wantLowerCase === true && wantUpperCase === true){
   x += usedLowUpp;
} else if (wantSpecialCharacters === true && wantNumbers === false && wantLowerCase === true && wantUpperCase === false){
   x += usedSpLow;
} else if (wantSpecialCharacters === false && wantNumbers === true && wantLowerCase === false && wantUpperCase === true){
   x += usedNumUpp;
} else if (wantSpecialCharacters === true && wantNumbers === false && wantLowerCase === false && wantUpperCase === true){
   x += usedSpUpp;

// when a combination of 3 is true 
} else if (wantSpecialCharacters === true && wantNumbers === true && wantLowerCase === true && wantUpperCase === false){
   x += usedSpNumLow;
} else if (wantSpecialCharacters === false && wantNumbers === true && wantLowerCase === true && wantUpperCase === true){
   x += usedNumLowUpp;
} else if (wantSpecialCharacters === true && wantNumbers === false && wantLowerCase === true && wantUpperCase === true){
   x += usedSpLowUpp;
} else if (wantSpecialCharacters === true && wantNumbers === true && wantLowerCase === false && wantUpperCase === true){
   x += usedSpNumUpp;}
   

   var  finalPass = generatePassword();
    rendor(finalPass);
}

// -------------------------------------------        

function generatePassword (){

   var randPassword = "";

   function randomPassword() {
console.log("inside random pass")
   for (var i = 0; i < intLength; i++) {

   var randomCharc = x[Math.floor(Math.random() * x.length)];
   randPassword += randomCharc;
   console.log(randPassword);

   }
}
randomPassword();
return randPassword;

}


function rendor(finalpassword){

    var input = document.getElementById("displaypass");
    input.value = finalpassword;
    console.log(input);
   return finalpassword;
}

var genbutton = document.getElementById("generatorbutton");

console.log(genbutton);
genbutton.onclick = function () {init()}

var copyNewPasswordBtn = document.querySelector(".copybutton");

copyNewPasswordBtn.addEventListener("click", function(event){
   var passwordArea = document.querySelector(".passwordtocopy");
   passwordArea.focus();
   passwordArea.select();

   var works = document.execCommand('copy');
});

