




const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let buttonEl = document.getElementById("btn");
let inputEl = document.getElementById("pass-text1");
let inputEl2 = document.getElementById("pass-text2");
let passContainerEl = document.getElementById("pass-text-container");
 let passLength = 20;
 
 buttonEl.addEventListener("click", function() {
    inputEl.textContent = generatePassword();
    inputEl2.textContent = generatePassword();
 });


function generatePassword() {
    let randomPass = "";
    for(let i =0 ; i <= passLength; i++){
          randomPass += characters[Math.floor(Math.random() * characters.length)];
    }
    console.log(randomPass);
    return randomPass;
}

passContainerEl.addEventListener("click", function() {
    copyPassword();
});

function copyPassword() {
    var range = document.createRange();
    range.selectNode(passContainerEl);
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    console.log("Copied the text: " + passContainerEl.textContent);
}


 

 