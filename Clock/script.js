   
let hour = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(()=>{
    let d = new Date();
    hour.innerHTML = (d.getHours()<10?"0":"") + d.getHours();
    min.innerHTML = (d.getMinutes()<10?"0":"") + d.getMinutes();
    sec.innerHTML = (d.getSeconds()<10?"0":"") + d.getSeconds();}, 1000);
