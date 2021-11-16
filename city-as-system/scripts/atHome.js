let weightData;
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
  if(currentMonth==8 && currentYear==2021){
    console.log("the end");
  }else{
    changeMonthRight(1);
    let currentWeightDataBrooklyn = getCurrentRentalInventoryData("Brooklyn");
    avatarBrooklyn(currentWeightDataBrooklyn);
    let currentWeightDataManhattan = getCurrentRentalInventoryData("Manhattan");
    avatarManhattan(currentWeightDataManhattan);
    let currentWeightDataQueens = getCurrentRentalInventoryData("Queens");
    avatarQueens(currentWeightDataQueens);
  }
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
  let currentWeightDataBrooklyn = getCurrentRentalInventoryData("Brooklyn");
  avatarBrooklyn(currentWeightDataBrooklyn);
  let currentWeightDataManhattan = getCurrentRentalInventoryData("Manhattan");
  avatarManhattan(currentWeightDataManhattan);
  let currentWeightDataQueens = getCurrentRentalInventoryData("Queens");
  avatarQueens(currentWeightDataQueens);
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
  let currentWeightDataBrooklyn = getCurrentRentalInventoryData("Brooklyn");
  avatarBrooklyn(currentWeightDataBrooklyn);
  let currentWeightDataManhattan = getCurrentRentalInventoryData("Manhattan");
  avatarManhattan(currentWeightDataManhattan);
  let currentWeightDataQueens = getCurrentRentalInventoryData("Queens");
  avatarQueens(currentWeightDataQueens);
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
  let currentWeightDataBrooklyn = getCurrentRentalInventoryData("Brooklyn");
  avatarBrooklyn(currentWeightDataBrooklyn);
  let currentWeightDataManhattan = getCurrentRentalInventoryData("Manhattan");
  avatarManhattan(currentWeightDataManhattan);
  let currentWeightDataQueens = getCurrentRentalInventoryData("Queens");
  avatarQueens(currentWeightDataQueens);
}

//load weightData;
document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let rentalInventoryData = await d3.csv('./assets/data/rentalInventory.csv', d3.autoType);
    console.log(rentalInventoryData);
    weightData=rentalInventoryData;
  }  
  loadMyData();
  
})

//to get manhattan rentalInventory data;
function getCurrentRentalInventoryData(currentBorough){
  let row = weightData.filter(d=> {
    return d.Borough == currentBorough;
  })
  console.log(row);
  currentWeightData=row[0][currentDate];
  console.log("Rental Inventory: "+currentWeightData);
  return currentWeightData;
}

//code for text of rental inventory = weight;
const weightBrooklyn = document.querySelector('#weightBrooklyn');
const bodyBrooklyn = document.querySelector("#brooklyn");
const weightManhattan = document.querySelector('#weightManhattan');
const bodyManhattan = document.querySelector("#manhattan");
const weightQueens = document.querySelector('#weightQueens ');
const bodyQueens = document.querySelector("#queens ");

bodyBrooklyn.addEventListener("mouseover", mouseOverBrooklyn);
bodyBrooklyn.addEventListener("mouseout", mouseOutBrooklyn);
bodyManhattan.addEventListener("mouseover", mouseOverManhattan);
bodyManhattan.addEventListener("mouseout", mouseOutManhattan);
bodyQueens.addEventListener("mouseover", mouseOverQueens);
bodyQueens.addEventListener("mouseout", mouseOutQueens);

function mouseOverBrooklyn(event) {
  let currentRentalInventoryData = getCurrentRentalInventoryData("Brooklyn");
  weightBrooklyn.style.top = event.clientY + 1 + 'px' ;
  weightBrooklyn.style.left = event.clientX + 1 + 'px';
  weightBrooklyn.classList.add('show');
  const weightBrooklynText = weightBrooklyn.querySelector('p');
  weightBrooklynText.innerText = "Weight of Brooklyn:"+currentRentalInventoryData;
}

function mouseOutBrooklyn() {
    weightBrooklyn.classList.remove('show');
}

function mouseOverManhattan(event) {
  let currentRentalInventoryData = getCurrentRentalInventoryData("Manhattan");
  weightManhattan.style.top = event.clientY + 1 + 'px' ;
  weightManhattan.style.left = event.clientX + 1 + 'px';
  weightManhattan.classList.add('show');
  const weightManhattanText = weightManhattan.querySelector('p');
  weightManhattanText.innerText = "Weight of Manhattan:"+currentRentalInventoryData;
}

function mouseOutManhattan() {
    weightManhattan.classList.remove('show');
}

function mouseOverQueens(event) {
  let currentRentalInventoryData = getCurrentRentalInventoryData("Queens");
  weightQueens.style.top = event.clientY + 1 + 'px' ;
  weightQueens.style.left = event.clientX + 1 + 'px';
  weightQueens.classList.add('show');
  const weightQueensText = weightQueens.querySelector('p');
  weightQueensText.innerText = "Weight of Queens:"+currentRentalInventoryData;
}

function mouseOutQueens() {
    weightQueens.classList.remove('show');
}

//code to control the avatar size;
function avatarBrooklyn(currentWeightDataBrooklyn){
  console.log("Weight of Brooklyn:"+currentWeightDataBrooklyn);
  let avatarBrooklyn =document.querySelector('#brooklyn');
  let scale = d3.scaleLinear().domain([0, 26000]).range([0.6, 1.5]);
  let ratio=scale(currentWeightDataBrooklyn);
  console.log(ratio);
  avatarBrooklyn.style.transform='scale('+ratio+')';
}

function avatarManhattan(currentWeightDataManhattan){
  console.log("Weight of Manhattan:"+currentWeightDataManhattan);
  let avatarManhattan =document.querySelector('#manhattan');
  let scale = d3.scaleLinear().domain([0, 42000]).range([0.6, 1.5]);
  let ratio=scale(currentWeightDataManhattan);
  console.log(ratio);
  avatarManhattan.style.transform='scale('+ratio+')';
}

function avatarQueens(currentWeightDataQueens){
  console.log("Weight:"+currentWeightDataQueens);
  let avatarQueens =document.querySelector('#queens');
  let scale = d3.scaleLinear().domain([0, 8000]).range([0.5, 1.2]);
  let ratio=scale(currentWeightDataQueens);
  console.log(ratio);
  avatarQueens.style.transform='scale('+ratio+')';
}