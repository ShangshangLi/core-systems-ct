let wcT= document.querySelector("#wcT");
wcT.addEventListener("mouseover",changeTextMouseOverWCT);
wcT.addEventListener("mouseout",changeTextMouseOutWCT);

function changeTextMouseOverWCT() {
    wcT.innerHTML="92%";
}

function changeTextMouseOutWCT() {
    wcT.innerHTML="Wechat";
}



let rT= document.querySelector("#rT");
rT.addEventListener("mouseover",changeTextMouseOverRT);
rT.addEventListener("mouseout",changeTextMouseOutRT);

function changeTextMouseOverRT() {
    rT.innerHTML="4%";
}

function changeTextMouseOutRT() {
    rT.innerHTML="RED";
}



let dcT= document.querySelector("#dcT");
dcT.addEventListener("mouseover",changeTextMouseOverDCT);
dcT.addEventListener("mouseout",changeTextMouseOutDCT);

function changeTextMouseOverDCT() {
    dcT.innerHTML="0.85%";
}

function changeTextMouseOutDCT() {
    dcT.innerHTML="Discord";
}



let wbT= document.querySelector("#wbT");
wbT.addEventListener("mouseover",changeTextMouseOverWBT);
wbT.addEventListener("mouseout",changeTextMouseOutWBT);

function changeTextMouseOverWBT() {
    wbT.innerHTML="0.68%";
}

function changeTextMouseOutWBT() {
    wbT.innerHTML="Discord";
}



let mT= document.querySelector("#mT");
mT.addEventListener("mouseover",changeTextMouseOverMT);
mT.addEventListener("mouseout",changeTextMouseOutMT);

function changeTextMouseOverMT() {
    mT.innerHTML="0.49%";
}

function changeTextMouseOutMT() {
    mT.innerHTML="Message";
}