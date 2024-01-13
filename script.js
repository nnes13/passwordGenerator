const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let num;

let characterNum = document.querySelector("#charNum");

let input = document.querySelector(".generate");

input.addEventListener("click", () => generate());

function generate() {
    let password = "";
    for (let i = 0; i < characterNum.value; i++) {
        num = Math.floor(Math.random() * 91);
       password = characters[num] + password;
    }
    document.getElementById("passBox").textContent = password;
    
}

