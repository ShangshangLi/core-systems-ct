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
  coin(currentData);
}

function mouseOutHide() {
    budget.classList.remove('show');
}

function coin(currentData){
  console.log("coin"+currentData);
  if(currentData/1000==1){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '0';
    document.getElementById("three-thousand").style.opacity = '0';
    console.log("one-thousand");
  }
  else if(currentData/1000==2){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '1';
    document.getElementById("three-thousand").style.opacity = '0';
    console.log("two-thousand");
  }
  else if(currentData/1000==3){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '1';
    document.getElementById("three-thousand").style.opacity = '1';
    console.log("three-thousand");
  }

  if(currentData%1000>=100&&currentData%1000<200){
    document.getElementById("one-hundred").style.opacity = '1';
    console.log("one-hundred");
  }
  else if(currentData%1000>=200&&currentData%1000<300){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    console.log("two-hundred");
  }
  else if(currentData%1000>=300&&currentData%1000<400){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    console.log("three-hundred");
  }
  else if(currentData%1000>=400&&currentData%1000<500){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    console.log("four-hundred");
  }
  else if(currentData%1000>=500&&currentData%1000<600){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    console.log("five-hundred");
  }
  else if(currentData%1000>=600&&currentData%1000<700){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '1';
    console.log("six-hundred");
  }
  else if(currentData%1000>=700&&currentData%1000<800){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '1';
    document.getElementById("seven-hundred").style.opacity = '1';
    console.log("seven-hundred");
  }
  else if(currentData%1000>=800&&currentData%1000<900){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '1';
    document.getElementById("seven-hundred").style.opacity = '1';
    document.getElementById("eight-hundred").style.opacity = '1';
    console.log("eight-hundred");
  }
  else if(currentData%1000>=900){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '1';
    document.getElementById("seven-hundred").style.opacity = '1';
    document.getElementById("eight-hundred").style.opacity = '1';
    document.getElementById("nine-hundred").style.opacity = '1';
    console.log("nine-hundred");
  }
  else{
    console.log("hundred=0");
  }
}