const turnOn = document.getElementById("onBtn");
turnOn.addEventListener('click', ()=>{
    const img = document.getElementById("img");
    img.src = "on.jpg";
})
const turnOff = document.getElementById("offBtn");
turnOff.addEventListener('click', ()=>{
    const img = document.getElementById("img");
    img.src = "off.jpg";
})