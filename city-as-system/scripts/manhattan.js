let budgetData;
let incomeData;
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
  changeMonthRight(1);
  let currentIncomeData = getCurrentRentalIndexData();
  furniture(currentIncomeData);
  let currentWeightData = getCurrentRentalInventoryData();
  avatar(currentWeightData);
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
  let currentIncomeData = getCurrentRentalIndexData();
  furniture(currentIncomeData);
  let currentWeightData = getCurrentRentalInventoryData();
  avatar(currentWeightData);
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
  let currentIncomeData = getCurrentRentalIndexData();
  furniture(currentIncomeData);
  let currentWeightData = getCurrentRentalInventoryData();
  avatar(currentWeightData);
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
  let currentIncomeData = getCurrentRentalIndexData();
  furniture(currentIncomeData);
  let currentWeightData = getCurrentRentalInventoryData();
  avatar(currentWeightData);
}

//losad budgetData;
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
const safebox = document.querySelector("#safe-box-cover");
const budget = document.querySelector('#budget');

safebox.addEventListener("mouseover", mouseOverBudget);
safebox.addEventListener("mouseout", mouseOutHide);

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

//code to control the number of gold in the safe box;
function coin(currentData){
  console.log("coin"+currentData);
  if(currentData%10000>=1000&&currentData%10000<2000){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '0';
    document.getElementById("three-thousand").style.opacity = '0';
    console.log("one-thousand");
  }
  else if(currentData%10000>=2000&&currentData%10000<3000){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '1';
    document.getElementById("three-thousand").style.opacity = '0';
    console.log("two-thousand");
  }
  else if(currentData%10000>=3000&&currentData%10000<4000){
    document.getElementById("one-thousand").style.opacity = '1';
    document.getElementById("two-thousand").style.opacity = '1';
    document.getElementById("three-thousand").style.opacity = '1';
    console.log("three-thousand");
  }

  if(currentData%1000>=100&&currentData%1000<200){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '0';
    document.getElementById("three-hundred").style.opacity = '0';
    document.getElementById("four-hundred").style.opacity = '0';
    document.getElementById("five-hundred").style.opacity = '0';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("one-hundred");
  }
  else if(currentData%1000>=200&&currentData%1000<300){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '0';
    document.getElementById("four-hundred").style.opacity = '0';
    document.getElementById("five-hundred").style.opacity = '0';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("two-hundred");
  }
  else if(currentData%1000>=300&&currentData%1000<400){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '0';
    document.getElementById("five-hundred").style.opacity = '0';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("three-hundred");
  }
  else if(currentData%1000>=400&&currentData%1000<500){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '0';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("four-hundred");
  }
  else if(currentData%1000>=500&&currentData%1000<600){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("five-hundred");
  }
  else if(currentData%1000>=600&&currentData%1000<700){
    document.getElementById("one-hundred").style.opacity = '1';
    document.getElementById("two-hundred").style.opacity = '1';
    document.getElementById("three-hundred").style.opacity = '1';
    document.getElementById("four-hundred").style.opacity = '1';
    document.getElementById("five-hundred").style.opacity = '1';
    document.getElementById("six-hundred").style.opacity = '1';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
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
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
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
    document.getElementById("nine-hundred").style.opacity = '0';
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
    document.getElementById("one-hundred").style.opacity = '0';
    document.getElementById("two-hundred").style.opacity = '0';
    document.getElementById("three-hundred").style.opacity = '0';
    document.getElementById("four-hundred").style.opacity = '0';
    document.getElementById("five-hundred").style.opacity = '0';
    document.getElementById("six-hundred").style.opacity = '0';
    document.getElementById("seven-hundred").style.opacity = '0';
    document.getElementById("eight-hundred").style.opacity = '0';
    document.getElementById("nine-hundred").style.opacity = '0';
    console.log("hundred=0");
  }
}



//load incomeData;
document.addEventListener('DOMContentLoaded', async function () {
  async function loadMyData() {
    let rentalIndexData = await d3.csv('./assets/data/rentalIndex.csv', d3.autoType);
    console.log(rentalIndexData);
    incomeData=rentalIndexData;
  }  
  loadMyData();
  
})

//to get manhattan rentalIndex data;
function getCurrentRentalIndexData(){
  let row = incomeData.filter(d=> {
    return d.Borough == currentBorough;
  })
  console.log(row);
  currentIncomeData=row[0][currentDate];
  console.log(currentIncomeData);
  return currentIncomeData;
}

//code for text of rentalIndex = income = furniture number and flower number;
const income = document.querySelector('#income');

const bed = document.querySelector("#bed");
const drawer = document.querySelector("#drawer");
const rug = document.querySelector("#rug");
const vase = document.querySelector("#vase")
const f1 = document.querySelector("#flower-one")
const f2 = document.querySelector("#flower-two")
const f3 = document.querySelector("#flower-three")
const f4 = document.querySelector("#flower-four")
const f5 = document.querySelector("#flower-five")
const f6 = document.querySelector("#flower-six")
const f7 = document.querySelector("#flower-seven")
const f8 = document.querySelector("#flower-eight")
const f9 = document.querySelector("#flower-nine")

bed.addEventListener("mouseover", mouseOverFurniture);
bed.addEventListener("mouseout", mouseOutFurniture);
drawer.addEventListener("mouseover", mouseOverFurniture);
drawer.addEventListener("mouseout", mouseOutFurniture);
rug.addEventListener("mouseover", mouseOverFurniture);
rug.addEventListener("mouseout", mouseOutFurniture);
vase.addEventListener("mouseover", mouseOverFurniture);
vase.addEventListener("mouseout", mouseOutFurniture);
f1.addEventListener("mouseover", mouseOverFurniture);
f1.addEventListener("mouseout", mouseOutFurniture);
f2.addEventListener("mouseover", mouseOverFurniture);
f2.addEventListener("mouseout", mouseOutFurniture);
f3.addEventListener("mouseover", mouseOverFurniture);
f3.addEventListener("mouseout", mouseOutFurniture);
f4.addEventListener("mouseover", mouseOverFurniture);
f4.addEventListener("mouseout", mouseOutFurniture);
f5.addEventListener("mouseover", mouseOverFurniture);
f5.addEventListener("mouseout", mouseOutFurniture);
f6.addEventListener("mouseover", mouseOverFurniture);
f6.addEventListener("mouseout", mouseOutFurniture);
f7.addEventListener("mouseover", mouseOverFurniture);
f7.addEventListener("mouseout", mouseOutFurniture);
f8.addEventListener("mouseover", mouseOverFurniture);
f8.addEventListener("mouseout", mouseOutFurniture);
f9.addEventListener("mouseover", mouseOverFurniture);
f9.addEventListener("mouseout", mouseOutFurniture);

function mouseOverFurniture(event) {
  let currentIncomeData = getCurrentRentalIndexData();
  income.style.top = event.clientY + 1 + 'px' ;
  income.style.left = event.clientX + 1 + 'px';
  income.classList.add('show');
  const incomeText = income.querySelector('p');
  incomeText.innerText = "Income:"+currentIncomeData;
  //furniture(currentIncomeData);
}

function mouseOutFurniture() {
  income.classList.remove('show');
}

//code to control the furniture;
function furniture(currentIncomeData){
  console.log("furniture:"+currentIncomeData);
  if(currentIncomeData%10000>=1000&&currentIncomeData%10000<2000){
    document.getElementById("bed").style.opacity = '1';
    document.getElementById("drawer").style.opacity = '0';
    document.getElementById("rug").style.opacity = '0';
    console.log("one-thousand");
  }
  else if(currentIncomeData%10000>=2000&&currentIncomeData%10000<3000){
    document.getElementById("bed").style.opacity = '1';
    document.getElementById("drawer").style.opacity = '1';
    document.getElementById("rug").style.opacity = '0';
    console.log("two-thousand");
  }
  else if(currentIncomeData%10000>=3000&&currentIncomeData%10000<4000){
    document.getElementById("bed").style.opacity = '1';
    document.getElementById("drawer").style.opacity = '1';
    document.getElementById("rug").style.opacity = '1';
    console.log("three-thousand");
  }

  if(currentIncomeData%1000>=100&&currentIncomeData%1000<200){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '0';
    document.getElementById("flower-three").style.opacity = '0';
    document.getElementById("flower-four").style.opacity = '0';
    document.getElementById("flower-five").style.opacity = '0';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("one-hundred");
  }
  else if (currentIncomeData%1000>=200&&currentIncomeData%1000<300){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '0';
    document.getElementById("flower-four").style.opacity = '0';
    document.getElementById("flower-five").style.opacity = '0';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("two-hundred");
  }
  else if(currentIncomeData%1000>=300&&currentIncomeData%1000<400){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '0';
    document.getElementById("flower-five").style.opacity = '0';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("three-hundred");
  }
  else if(currentIncomeData%1000>=400&&currentIncomeData%1000<500){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '0';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("four-hundred");
  }
  else if(currentIncomeData%1000>=500&&currentIncomeData%1000<600){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '1';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("five-hundred");
  }
  else if(currentIncomeData%1000>=600&&currentIncomeData%1000<700){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '1';
    document.getElementById("flower-six").style.opacity = '1';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("six-hundred");
  }
  else if(currentIncomeData%1000>=700&&currentIncomeData%1000<800){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '1';
    document.getElementById("flower-six").style.opacity = '1';
    document.getElementById("flower-seven").style.opacity = '1';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("seven-hundred");
  }
  else if(currentIncomeData%1000>=800&&currentIncomeData%1000<900){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '1';
    document.getElementById("flower-six").style.opacity = '1';
    document.getElementById("flower-seven").style.opacity = '1';
    document.getElementById("flower-eight").style.opacity = '1';
    document.getElementById("flower-nine").style.opacity = '0';
  }
  else if(currentIncomeData%1000>=900){
    document.getElementById("flower-one").style.opacity = '1';
    document.getElementById("flower-two").style.opacity = '1';
    document.getElementById("flower-three").style.opacity = '1';
    document.getElementById("flower-four").style.opacity = '1';
    document.getElementById("flower-five").style.opacity = '1';
    document.getElementById("flower-six").style.opacity = '1';
    document.getElementById("flower-seven").style.opacity = '1';
    document.getElementById("flower-eight").style.opacity = '1';
    document.getElementById("flower-nine").style.opacity = '1';
    console.log("nine-hundred");
  }
  else{
    document.getElementById("flower-one").style.opacity = '0';
    document.getElementById("flower-two").style.opacity = '0';
    document.getElementById("flower-three").style.opacity = '0';
    document.getElementById("flower-four").style.opacity = '0';
    document.getElementById("flower-five").style.opacity = '0';
    document.getElementById("flower-six").style.opacity = '0';
    document.getElementById("flower-seven").style.opacity = '0';
    document.getElementById("flower-eight").style.opacity = '0';
    document.getElementById("flower-nine").style.opacity = '0';
    console.log("hundred=0");
  }
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

//to get manhattan rentalIndex data;
function getCurrentRentalInventoryData(){
  let row = weightData.filter(d=> {
    return d.Borough == currentBorough;
  })
  console.log(row);
  currentWeightData=row[0][currentDate];
  console.log("Rental Inventory: "+currentWeightData);
  return currentWeightData;
}

//code for text of rental inventory = weight;
const weight = document.querySelector('#weight');
const body = document.querySelector("#manhattan-body");
const leg = document.querySelector("#manhattan-legs");
const eye = document.querySelector("#manhattan-eyes");


body.addEventListener("mouseover", mouseOverAvatar);
body.addEventListener("mouseout", mouseOutAvatar);
leg.addEventListener("mouseover", mouseOverAvatar);
leg.addEventListener("mouseout", mouseOutAvatar);
eye.addEventListener("mouseover", mouseOverAvatar);
eye.addEventListener("mouseout", mouseOutAvatar);

function mouseOverAvatar(event) {
  let currentRentalInventoryData = getCurrentRentalInventoryData();
  weight.style.top = event.clientY + 1 + 'px' ;
  weight.style.left = event.clientX + 1 + 'px';
  weight.classList.add('show');
  const weightText = weight.querySelector('p');
  weightText.innerText = "Weight:"+currentRentalInventoryData;
  //coin(currentData);
}

function mouseOutAvatar() {
    weight.classList.remove('show');
}

//code to control the avatar size;
function avatar(currentWeightData){
  console.log("Weight:"+currentWeightData);
  let avatarBody =document.querySelector('#manhattan-body .st18');
  //avatarBody.style.width=currentWeightData+'px';
  avatarBody.style.transform='scaleX('+currentWeightData/10000+')';
}