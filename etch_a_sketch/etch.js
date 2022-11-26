function createDivBox(){
  const container = document.querySelector('.game-area');
  resetGameArea();
  size = slider.value;


  for (let i=1; i<=size; i++) { //create a column
    let divColumn = document.createElement('div');
    divColumn.classList = 'divColumn';
    container.appendChild(divColumn);

    for (let j=1; j<=size; j++) { //create a row
      let divRow = document.createElement('div');
      divRow.classList = 'game-box-element';
      divColumn.appendChild(divRow);
    }
  }

  // add mouseover (hover) for the div elements
  const gameBox = document.getElementsByClassName('game-box-element')
  for (const element of gameBox) {
    element.addEventListener("mouseover", onHover);
  }
}

function resetGameArea() {
  const container = document.querySelector('.game-area');
  container.replaceChildren();
}

function onHover() {
  this.classList.add("hover-style");
  console.log(this);
}

//implements a slider
let slider = document.getElementById("slider-container");
let output = document.getElementById("slider-value");
output.innerText = slider.value; // Display the default slider value
// The Slider Function: Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerText = this.value;
}

// add "reset board" button
const btn = document.getElementById('reset-board');
btn.addEventListener('click', createDivBox);

createDivBox(16)  //temporary, create the gameboard


