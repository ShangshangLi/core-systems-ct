//load medianAskingRent.csv data;
let budgetData;

document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let medianAskingRentData = await d3.csv('../assets/data/medianAskingRent.csv', d3.autoType);
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
  let minMonth = 0; 
  let maxMonth = 12;
  currentMonth = currentMonth + amount;
  if (1<=currentMonth<10){
    //const monthText = month.querySelector('p');
    month.innerHTML = '0' + currentMonth;
    console.log(currentMonth);
  }
  else if (10<=currentMonth<=12){
    const monthText = month.querySelector('p');
    monthText.innerText = '1'+currentMonth%10;
    console.log(currentMonth);
  }
}

document.getElementById("month-right").onclick = function(){
  changeMonth(1);
}

//click on button > changeDate(1)

//changeDate(1)
