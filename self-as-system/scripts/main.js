let irT= document.querySelector("#irT");
irT.addEventListener("mouseover",changeTextMouseOverIRT);
irT.addEventListener("mouseout",changeTextMouseOutIRT);

function changeTextMouseOverIRT() {
    irT.innerHTML="46%";
    irT.style.top = "30%";
}

function changeTextMouseOutIRT() {
    irT.innerHTML="Information & Reading";
    irT.style.top = "25%";
}



let gT= document.querySelector("#gT");
gT.addEventListener("mouseover",changeTextMouseOverGT);
gT.addEventListener("mouseout",changeTextMouseOutGT);

function changeTextMouseOverGT() {
    gT.innerHTML="27%";
}

function changeTextMouseOutGT() {
    gT.innerHTML="Game";
}



let sT= document.querySelector("#sT");
sT.addEventListener("mouseover",changeTextMouseOverST);
sT.addEventListener("mouseout",changeTextMouseOutST);

function changeTextMouseOverST() {
    sT.innerHTML="15%";
}

function changeTextMouseOutST() {
    sT.innerHTML="Social";
}



let oT= document.querySelector("#oT");
oT.addEventListener("mouseover",changeTextMouseOverOT);
oT.addEventListener("mouseout",changeTextMouseOutOT);

function changeTextMouseOverOT() {
    oT.innerHTML="12%";
}

function changeTextMouseOutOT() {
    oT.innerHTML="Others";
}



const title = document.querySelector("#title");
const date = document.querySelector('#date');

title.addEventListener("mouseover", mouseOverDate);
title.addEventListener("mouseout", mouseOutHide);

function mouseOverDate(event) {
  date.style.top = event.clientY + 10 + 'px' ;
  date.style.left = event.clientX + 10 + 'px';
  date.classList.add('show');
  const dateInfo = date.querySelector('p');
  dateInfo.innerText = "for Sep.22th, 2021";
  console.log(event.clientX, event.clientY);
}

function mouseOutHide() {
  date.classList.remove('show');
}