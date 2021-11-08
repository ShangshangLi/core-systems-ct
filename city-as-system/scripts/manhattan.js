//load medianAskingRent.csv data;
let budgetData;

document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let medainAskingRentData = await d3.csv('../assets/data/medianAskingRent.csv', d3.autoType);
    console.log(medainAskingRentData);
    bugetData=medainAskingRentData;
  }  
  loadMyData();
  
});

// function mousePressedCal()


// let date=202108;

// if (budgetDate[]=){}

//code for text of median asking rent = gold number;
const title = document.querySelector("#safe-box-cover");
const budget = document.querySelector('#budget');

title.addEventListener("mouseover", mouseOverBudget);
title.addEventListener("mouseout", mouseOutHide);

function mouseOverBudget(event) {
    budget.style.top = event.clientY + 1 + 'px' ;
    budget.style.left = event.clientX + 1 + 'px';
    budget.classList.add('show');
    const budgetText = budget.querySelector('p');
    budgetText.innerText = "Budget:";
    console.log(event.clientX, event.clientY);
}

function mouseOutHide() {
    budget.classList.remove('show');
}



// //code for arrows of calendar;
// const monthArrow = document.querySelector("#month");
// //const budget = document.querySelector('#budget');

// function mouseDown() {
//   if(document.getElementById("monthArrow")){
//     document.getElementById("myP").style.color = "red";
//   }
// }

// // monthArrow.addEventListener("mousepress", mouseOverBudget);
// // monthArrow.addEventListener("mouseout", mouseOutHide);

// // function mouseOverBudget(event) {
// //     budget.style.top = event.clientY + 1 + 'px' ;
// //     budget.style.left = event.clientX + 1 + 'px';
// //     budget.classList.add('show');
// //     const budgetText = budget.querySelector('p');
// //     budgetText.innerText = "Budget:";
// //     console.log(event.clientX, event.clientY);
// // }

// // function mouseOutHide() {
// //     budget.classList.remove('show');
// // }
