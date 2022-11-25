function createDivBox(){
  const container = document.querySelector('.game-area');
  resetGameArea(container);
  size = slider.value;

  for (let i=1; i<=size; i++) { //create a column
    let divColumn = document.createElement('div');
    //divColumn.textContent = 'x';
    divColumn.classList = 'divColumn';
    container.appendChild(divColumn);

    for (let j=1; j<=size; j++) { //create a row
      let divRow = document.createElement('div');
      divRow.classList = 'game-box-element';
      // divRow.textContent = 'y'; //not required anymore
      divColumn.appendChild(divRow);
    }
  }
}

function resetGameArea(container){
  // let divColumn = document.getElementsByClassName("divColumn");
  // container.removeChild(divColumn);
  // haven't figured this out yet
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


