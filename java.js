let getForm = document.getElementById("form")
let getRange = document.getElementById("get-length-range")
let showLength = document.getElementById("show-length-value")
let showPassword = document.getElementById("show-password")
let copyPassword = document.getElementById("copy-password")
let getUppercaseConfirmation = document.getElementById("uppercase")
let getLowercaseConfirmation = document.getElementById("lowercase")
let getNumbersConfirmation = document.getElementById("numbers")
let getSymbolsConfirmation = document.getElementById("symbols")

let uppercaseLetters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
]; 

let lowercaseLetters = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

let numbers = ["0","1","2","3","4","5","6","7","8","9"];

let symbols = [
    "!","@","#","$","%","^","&","*","(",")",
    "_","+","[","]","{","}","|",";",":",",",".",
    "<",">","?","/"
];

function createPassword(length) {

    if(!getUppercaseConfirmation.checked && !getLowercaseConfirmation.checked 
       && !getNumbersConfirmation.checked && !getSymbolsConfirmation.checked) {
        
        alert("please select atleast one option")
        return
    }

    let password = []
    let addAll = []
    
    if(getUppercaseConfirmation.checked) {
        addAll = addAll.concat(uppercaseLetters)            
    } 
    
    if(getLowercaseConfirmation.checked) {
        addAll = addAll.concat(lowercaseLetters)            
    }

    if(getNumbersConfirmation.checked) {
        addAll = addAll.concat(numbers)            
    }

    if(getSymbolsConfirmation.checked) {
        addAll = addAll.concat(symbols)            
    }

    for(let i = 0; i < length; i++) { 
        // By chatgpt suggested
        let randomValue = crypto.getRandomValues(new Uint32Array(1))[0] % addAll.length;
        // let randomValue = Math.floor(Math.random() * addAll.length)
        password.push(addAll[randomValue])
    }

    showPassword.textContent = password.join("")

}

getForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let convertvalue = getRange.value

    createPassword(convertvalue)
})

copyPassword.addEventListener("click", (e) => {
    e.preventDefault()

    if(showPassword.textContent === "") {

        // alert("Please generate password first")
        copyPassword.textContent = "Please generate Password first"
        copyPassword.style.fontSize = "0.75rem"

    } else {
        copyPassword.textContent = "Copied Password"
        copyPassword.style.fontSize = "1rem"
        
        navigator.clipboard.writeText(showPassword.textContent)
    }

    setTimeout(() => {
        copyPassword.textContent = "Copy Password"
    }, 2200)

})

getRange.addEventListener("input", (e) => {
    e.preventDefault()
        
    let convertvalue = getRange.value

    showLength.textContent = convertvalue
        

})

// let uppercaseLetters = [
//     "A","B","C","D","E","F","G","H","I","J","K","L","M",
//     "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
// ]; 

// let lowercaseLetters = [
//     "a","b","c","d","e","f","g","h","i","j","k","l","m",
//     "n","o","p","q","r","s","t","u","v","w","x","y","z"
// ];

// let numbers = ["0","1","2","3","4","5","6","7","8","9"];

// let symbols = [
//     "!","@","#","$","%","^","&","*","(",")",
//     "_","+","[","]","{","}","|",";",":",",",".",
//     "<",">","?","/"
// ];
