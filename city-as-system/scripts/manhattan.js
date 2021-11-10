//load medianAskingRent.csv data;
let budgetData;

document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let medianAskingRentData = await d3.csv('./assets/data/medianAskingRent.csv', d3.autoType);
    console.log(medianAskingRentData);
    budgetData=medianAskingRentData;
  }  
  loadMyData();
  
});

//to get manhattan data;
let currentBorough = 'Manhattan';
let currentDate = '2021-01';
function getCurrentData(){
  let row = budgetData.filter(d=> {
    return d.Borough == currentBorough;
  })
  console.log(row);
  currentData=row[0][currentDate];
  console.log(currentData);
  return currentData;
}

//code for text of median asking rent = gold number;
const title = document.querySelector("#safe-box-cover");
const budget = document.querySelector('#budget');

title.addEventListener("mouseover", mouseOverBudget);
title.addEventListener("mouseout", mouseOutHide);

function mouseOverBudget(event) {
  let currentData = getCurrentData();
  budget.style.top = event.clientY + 1 + 'px' ;
  budget.style.left = event.clientX + 1 + 'px';
  budget.classList.add('show');
  const budgetText = budget.querySelector('p');
  budgetText.innerText = "Budget:"+currentData;
  //console.log(event.clientX, event.clientY);
}

function mouseOutHide() {
    budget.classList.remove('show');
}

//code for arrows of calendar;
//month;
let monthArrow = false;
document.getElementById("month").onclick = function(){
  if(monthArrow==false){
    document.getElementById("month-left").style.opacity = '1';
    document.getElementById("month-right").style.opacity = '1';
    monthArrow=true;
  }
  else if (monthArrow==true){
    document.getElementById("month-left").style.opacity = '0';
    document.getElementById("month-right").style.opacity = '0';
    monthArrow=false;
  }
}
//year;
let yearArrow = false;
document.getElementById("year").onclick = function(){
  if(yearArrow==false){
    document.getElementById("year-left").style.opacity = '1';
    document.getElementById("year-right").style.opacity = '1';
    yearArrow=true;
  }
  else if (yearArrow==true){
    document.getElementById("year-left").style.opacity = '0';
    document.getElementById("year-right").style.opacity = '0';
    yearArrow=false;
  }
}

//code for month of calendar
const month = document.querySelector('#month text');
console.log(month);
let currentMonth = 1;
function changeMonth(amount){
  currentMonth = currentMonth + amount;
  if (currentMonth>=1&&currentMonth<=9){
    month.innerHTML = '0' + currentMonth;
    console.log(currentMonth);
  }
  else if (currentMonth>=10&&currentMonth<=12){
    month.innerHTML = '1'+currentMonth%10;
    console.log(currentMonth);
    console.log("Oct-Dec");
  }
}

document.getElementById("month-right").onclick = function(){
  changeMonth(1);
}

function changeMonthLeft(amount){
  currentMonth = currentMonth - amount;
  if (currentMonth>=1&&currentMonth<=9){
    month.innerHTML = '0' + currentMonth;
    console.log(currentMonth);
  }
  else if (currentMonth>=10&&currentMonth<=12){
    month.innerHTML = '1'+currentMonth%10;
    console.log(currentMonth);
    console.log("Oct-Dec");
  }
}

document.getElementById("month-left").onclick = function(){
  changeMonthLeft(1);
}

//code for year of calendar
const year = document.querySelector('#year text');
console.log(year);
let currentYear = 2021;

function changeYearLeft(amount){
  console.log(currentYear);
  // currentYear = currentYear - amount;
  // if (currentYear>=1&&currentYear<=9){
    // year.innerHTML = currentYear;
    // console.log(currentYear);
  // }
  // else if (currentYear>=10&&currentYear<=12){
  //   year.innerHTML = currentYear;
  //   console.log(currentYear);
  //   console.log("Oct-Dec");
  // }
}

document.getElementById("year-left").onclick = function(){
  changeMonthLeft(1);
}

// function changeYearRight(amount){
//   currentYear = currentYear + amount;
//   if (currentYear>=1&&currentYear<=9){
//     year.innerHTML = '0' + currentYear;
//     console.log(currentYear);
//   }
//   else if (currentYear>=10&&currentYear<=12){
//     year.innerHTML = '1'+currentYear%10;
//     console.log(currentYear);
//     console.log("Oct-Dec");
//   }
// }

// document.getElementById("year-right").onclick = function(){
//   changeYearRight(1);
// }

