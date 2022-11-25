function getComputerChoice() {
  let rand = Math.random()
  let choice = Math.round(rand*3);

  if (choice == 0) {
    return 'rock'
  } else if (choice == 1) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

//getPlayerChoice deprecated, using the buttons now.
function getPlayerChoice() {
  let choice = prompt("what do you choose? (r, p, s, rock, Rock, are all acceptable)").toLowerCase();
  switch (choice){
    case 'r':
    case 'rock':
      return 'rock';
      break;

    case 'p':
    case 'paper':
      return 'paper'
      break;

    case 's':
    case 'scissors':
      return 'scissors'
      break;
  }
}

function playRound(pChoice, cChoice){
  const cWins = 'Computer Wins'
  const pWins = 'Player Wins'
  const tie = 'tie'

  switch (pChoice) {
    case 'rock':
      if (cChoice == 'rock' ) {
        return tie;
      } else if (cChoice == 'paper') {
        return cWins;
      } else if (cChoice == 'scissors') {
        return pWins;
      }
      break;

    case 'paper':
      if (cChoice == 'rock' ) {
        return pWins;
      } else if (cChoice == 'paper') {
        return tie;
      } else if (cChoice == 'scissors') {
        return cWins;
      }
      break;

    case 'scissors':
      if (cChoice == 'rock' ) {
        return cWins;
      } else if (cChoice == 'paper') {
        return pWins;
      } else if (cChoice == 'scissors') {
        return tie;
      }
      break;
  }
}

function choice(e) { //this function should be called when a button clicked
  const cChoice = this.id 

  //add "play round function here"
  playRound(cChoice, getComputerChoice())
}

function updateBoard(pWins, cWins, ties) {
  // your JavaScript file
  const results = document.querySelector('#p-wins');
  results.textContent = `Player Wins: ${pWins}`;


}

//start of non function stuff
let pWins=0;
let cWins=0;
let ties=0;

//Add an event listener to ALL buttons
const btns = document.querySelectorAll('.action');
btns.forEach(btn => btn.addEventListener('click', choice) );

