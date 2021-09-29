let nT= document.querySelector("#nT");
nT.addEventListener("mouseover",changeTextMouseOverNT);
nT.addEventListener("mouseout",changeTextMouseOutNT);

function changeTextMouseOverNT() {
    nT.innerHTML="99%";
}

function changeTextMouseOutNT() {
    nT.innerHTML="Novel";
}



let dT= document.querySelector("#dT");
dT.addEventListener("mouseover",changeTextMouseOverDT);
dT.addEventListener("mouseout",changeTextMouseOutDT);

function changeTextMouseOverDT() {
    dT.innerHTML="0.20%";
}

function changeTextMouseOutDT() {
    dT.innerHTML="Dictionary";
}



let wT= document.querySelector("#wT");
wT.addEventListener("mouseover",changeTextMouseOverWT);
wT.addEventListener("mouseout",changeTextMouseOutWT);

function changeTextMouseOverWT() {
    wT.innerHTML="0.01%";
}

function changeTextMouseOutWT() {
    wT.innerHTML="Weather";
}