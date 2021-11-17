// let door =document.querySelector('#manhattan-body .cls-15');
// door.style.fill="blue";
// door.style.width='500px';
// let doorX=window.getComputedStyle(door).x;
// console.log(doorX);
// door.style.opacity = '0'; 

document.getElementById("esc-button").addEventListener('click', function(){
    let esc =document.querySelector('#esc .button2');
    esc.style.fill='white';
    let escCircle =document.querySelector('#esc-circle .button1');
    escCircle.style.fill='#58c1cc';
    console.log("get")
})

//code for hint;
const hintInfo = document.querySelector('#hint-info');

const hintButton = document.querySelector('#hint-button');
hintButton.addEventListener("mouseover", mouseOverHint);
hintButton.addEventListener("mouseout", mouseOutHint);

function mouseOverHint(event) {
    hintInfo.style.top = event.clientY + 1 + 'px' ;
    hintInfo.style.left = event.clientX + 1 + 'px';
    hintInfo.classList.add('show');
    const hintText = hintInfo.querySelector('p');
    hintText.innerText = "Weight = Rental Inventory\nIncome = Rental Index\nBudget = Median Asking Rent\nPress on month or year to change data.\nAll the data comes from StreetEasy.";
}

function mouseOutHint() {
    hintInfo.classList.remove('show');
}