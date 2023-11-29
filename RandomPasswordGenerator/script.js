const btn1 = document.querySelector(".btn");
const input = document.getElementById("input")
const copy = document.querySelector(".fa-copy");
const alert  = document.querySelector(".alert-container")

btn1.addEventListener("click",()=>{
    createPassword();
});

function createPassword(){
    const chars = "1234567890-=!@#$%^&*()_+qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM[]\;',./{}|:\"<>?"
    const passwordLength = 15;
    let password = "";
    for (let i = 0; i<=passwordLength; i++){
        const randomNumber = Math.floor(Math.random()*chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    input.value = password;
    alert.innerText = password + " copied!";
}

copy.addEventListener("click",()=>{
    if(input.value){
        copyPassword();
        alert.classList.remove("active");
        setTimeout(()=>{
            alert.classList.add("active");},1500);
    }
})

function copyPassword(){
    input.select();
    input.setSelectionRange(0,9999);
    navigator.clipboard.writeText(input.value);
}

