const container = document.getElementById("container");
const colorFont = document.querySelector(".color-font");
const button = document.querySelector(".btn");

button.addEventListener("click", ()=>{
    const chars =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let colorCode = "#";

    for (let i =0; i<=5; i++){
        const randomNumber = Math.floor(Math.random()*chars.length);

        colorCode += chars[randomNumber];
    }

    colorFont.textContent = colorCode;
    document.body.style.backgroundColor = colorCode;
});
