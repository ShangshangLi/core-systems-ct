let hpT= document.querySelector("#hpT");
hpT.addEventListener("mouseover",changeTextMouseOverHPT);
hpT.addEventListener("mouseout",changeTextMouseOutHPT);

function changeTextMouseOverHPT() {
    hpT.innerHTML="100%";
    hpT.style.top = "33%";
}

function changeTextMouseOutHPT() {
    hpT.innerHTML="Harry Potter Magic Awakened";
    hpT.style.top = "20%";
}
