//code for index explanation;
const explain = document.querySelector('#explain');

const title = document.querySelector('#title');
title.addEventListener("mouseover", mouseOverHint);
title.addEventListener("mouseout", mouseOutHint);

function mouseOverHint(event) {
    explain.style.top = event.clientY + 1 + 'px' ;
    explain.style.left = event.clientX + 1 + 'px';
    explain.classList.add('show');
    const explainText = explain.querySelector('p');
    explainText.innerText = "Due to data restriction and difficulty of data collection during the pandemic,\nI only made data visualization of Brooklyn's, Manhattan's and Queens's data\nfrom Jan. 2012 to Aug. 2021.";
}

function mouseOutHint() {
    explain.classList.remove('show');
}