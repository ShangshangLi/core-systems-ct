// let door =document.querySelector('#manhattan-body .cls-15');
// door.style.fill="blue";
// door.style.width='500px';
// let doorX=window.getComputedStyle(door).x;
// console.log(doorX);
// door.style.opacity = '0'; 

const esc = document.querySelector("#esc");
const escCircle = document.querySelector("#esc-circle");

// esc.addEventListener("mouseover", mouseOverESC);
// esc.addEventListener("mouseout", mouseOutESC);
// escCircle.addEventListener("mouseover", mouseOverESC);
// escCircle.addEventListener("mouseout", mouseOutESC);

// function mouseOverESC() {
//     esc.style.fill = "white";
//     escCircle.style.fill="#58c1cc";
//     console.log("get");
// }

// function mouseOutESC() {
//     esc.style.fill = "#58c1cc";
//     escCircle.style.fill = "white";
// }

document.getElementById("esc-button").addEventListener('click', function(){
    let esc =document.querySelector('#esc .button2');
    esc.style.fill='white';
    let escCircle =document.querySelector('#esc-circle .button1');
    escCircle.style.fill='#58c1cc';
    console.log("get")
})