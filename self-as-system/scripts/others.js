let uT= document.querySelector("#uT");
uT.addEventListener("mouseover",changeTextMouseOverUT);
uT.addEventListener("mouseout",changeTextMouseOutUT);

function changeTextMouseOverUT() {
    uT.innerHTML="21%";
}

function changeTextMouseOutUT() {
    uT.innerHTML="Utilities";
}



let cT= document.querySelector("#cT");
cT.addEventListener("mouseover",changeTextMouseOverCT);
cT.addEventListener("mouseout",changeTextMouseOutCT);

function changeTextMouseOverCT() {
    cT.innerHTML="12%";
}

function changeTextMouseOutCT() {
    cT.innerHTML="Creativity";
}



let pfT= document.querySelector("#pfT");
pfT.addEventListener("mouseover",changeTextMouseOverPFT);
pfT.addEventListener("mouseout",changeTextMouseOutPFT);

function changeTextMouseOverPFT() {
    pfT.innerHTML="8%";
    pfT.style.top = "30%";
}

function changeTextMouseOutPFT() {
    pfT.innerHTML="Productivitty & Finance";
    pfT.style.top = "22%";
}



let tT= document.querySelector("#tT");
tT.addEventListener("mouseover",changeTextMouseOverTT);
tT.addEventListener("mouseout",changeTextMouseOutTT);

function changeTextMouseOverTT() {
    tT.innerHTML="1.88%";
}

function changeTextMouseOutTT() {
    tT.innerHTML="Travel";
}



let hT= document.querySelector("#hT");
hT.addEventListener("mouseover",changeTextMouseOverHT);
hT.addEventListener("mouseout",changeTextMouseOutHT);

function changeTextMouseOverHT() {
    hT.innerHTML="0.94%";
}

function changeTextMouseOutHT() {
    hT.innerHTML="Health";
}



let sfT= document.querySelector("#sfT");
sfT.addEventListener("mouseover",changeTextMouseOverSFT);
sfT.addEventListener("mouseout",changeTextMouseOutSFT);

function changeTextMouseOverSFT() {
    sfT.innerHTML="0.89%";
    sfT.style.top = "20%";
}

function changeTextMouseOutSFT() {
    sfT.innerHTML="Shopping & Food";
    sfT.style.top = "10%";
}