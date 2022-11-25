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
  const pChoice = this.id 
  let cChoice = getComputerChoice()
  //add "play round function here"
  console.log("playing a game:");
  result = playRound(pChoice, cChoice);
  updateLastGame(pChoice, cChoice, result);


  console.log(`The result was: ${result}`)
  if (result == 'Computer Wins') {
    global_cWins+=1;
  } else if (result == 'Player Wins') {
    global_pWins+=1;
  } else if (result == 'tie') {
    global_ties+=1;
  } else {
    alert("something screwed up");
  }

  updateBoard(global_pWins, global_cWins, global_ties);
  
  if (global_pWins >= 5) {
    alert('Player wins 5 games first!');
  } else if (global_cWins >= 5) {
    alert('Computer wins 5 games first!')
  }
}

function updateLastGame(pChoice, cChoice, result) {
  // update player wins
  const pWinsDiv = document.querySelector('#p-choice');
  pWinsDiv.textContent = `Player Choice: ${pChoice}`;

  // update computer wins
  const cWinsDiv = document.querySelector('#c-choice');
  cWinsDiv.textContent = `Computer Choice: ${cChoice}`;

  // update ties
  const tiesDiv = document.querySelector('#result');
  tiesDiv.textContent = `Result: ${result}`;
}
function updateBoard(player_wins, computer_wins, ties) {
  // update player wins
  const pWinsDiv = document.querySelector('#p-wins');
  pWinsDiv.textContent = `Player Wins: ${player_wins}`;

  // update computer wins
  const cWinsDiv = document.querySelector('#c-wins');
  cWinsDiv.textContent = `Computer Wins: ${computer_wins}`;

  // update ties
  const tiesDiv = document.querySelector('#ties');
  tiesDiv.textContent = `ties: ${ties}`;
}

//start of non function stuff
let global_pWins=0;
let global_cWins=0;
let global_ties=0;

//Add an event listener to ALL buttons
const btns = document.querySelectorAll('.action');
btns.forEach(btn => btn.addEventListener('click', choice) );

