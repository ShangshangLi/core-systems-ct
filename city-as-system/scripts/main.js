// let door =document.querySelector('#manhattan-body .cls-15');
// door.style.fill="blue";
// door.style.width='500px';
// let doorX=window.getComputedStyle(door).x;
// console.log(doorX);
// door.style.opacity = '0'; 

// const esc = document.querySelector("#esc");
// const escCircle = document.querySelector("#esc-circle");
// const budget = document.querySelector('#budget');

// esc.addEventListener("mouseover", mouseOverESC);
// esc.addEventListener("mouseout", mouseOutESC);
// escCircle.addEventListener("mouseover", mouseOverESC);
// escCircle.addEventListener("mouseout", mouseOutESC);

// function mouseOverESC() {
//     esc.style.fill = "#ff0000";
//     escCircle.fill="black";
//     // esc.style.width="500px";
//     console.log("get");
// //   budget.style.top = event.clientY + 1 + 'px' ;
// //   budget.style.left = event.clientX + 1 + 'px';
// //   budget.classList.add('show');
// //   const budgetText = budget.querySelector('p');
// //   budgetText.innerText = "Budget:"+currentData;
// }

// function mouseOutESC() {
//     // budget.classList.remove('show');
    
// }

document.getElementById("esc-button").onclick = function(){
    esc.style.fill='yellow';
    console.log("get")
  }