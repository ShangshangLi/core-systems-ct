//load medianAskingRent.csv data;
let budgetData;
let currentYear = 2021;
let currentMonth = 8;
let currentDate=currentYear+'-'+currentMonth;

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
function changeMonthRight(amount){
  currentMonth = currentMonth + amount;
  if (currentMonth>=1&&currentMonth<=9){
    month.innerHTML = '0' + currentMonth;
    console.log(currentMonth);
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
  else if (currentMonth>=10&&currentMonth<=12){
    month.innerHTML = '1'+currentMonth%10;
    console.log(currentMonth);
    console.log("Oct-Dec");
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
}

document.getElementById("month-right").onclick = function(){
  changeMonthRight(1);
}

function changeMonthLeft(amount){
  currentMonth = currentMonth - amount;
  if (currentMonth>=1&&currentMonth<=9){
    month.innerHTML = '0' + currentMonth;
    console.log(currentMonth);
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
  else if (currentMonth>=10&&currentMonth<=12){
    month.innerHTML = '1'+currentMonth%10;
    console.log(currentMonth);
    console.log("Oct-Dec");
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
}

document.getElementById("month-left").onclick = function(){
  changeMonthLeft(1);
}

//code for year of calendar
const year = document.querySelector('#year text');
console.log(year);

function changeYearLeft(amount){
  currentYear = currentYear - amount;
  if (currentYear<=2021&&currentYear>=2012){
    year.innerHTML = currentYear;
    console.log(currentYear);
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
}

document.getElementById("year-left").onclick = function(){
  changeYearLeft(1);
}

function changeYearRight(amount){
  currentYear = currentYear + amount;
  if (currentYear<=2021&&currentYear>=2012){
    year.innerHTML = currentYear;
    console.log(currentYear);
    currentDate = currentYear+'-'+currentMonth;
    console.log(currentDate);
  }
}

document.getElementById("year-right").onclick = function(){
  changeYearRight(1);
}

document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let medianAskingRentData = await d3.csv('./assets/data/medianAskingRent.csv', d3.autoType);
    console.log(medianAskingRentData);
    budgetData=medianAskingRentData;
  }  
  loadMyData();
  
});

//to get manhattan medianAskingRent data;
let currentBorough = 'Manhattan';

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

