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
  console.log ( `inside playRound, with player:${pChoice} and computer: ${cChoice}`);

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

function game(){
  let playerWins = 0;
  let playerTies = 0;
  console.log("lets play a game to 5:");

  for (let i=0; i<5; i++){
    let result = playRound(getComputerChoice(), getPlayerChoice());
    if (result == 'Player Wins'){
      playerWins++;
    } else if (result == 'tie') {
      playerTies++;
    }
  }
  console.log(`You won: ${playerWins} times! and tied ${playerTies} times.`)
}
//console.log(`Computer chose ${getComputerChoice()}`);
//console.log(`Player chose ${getPlayerChoice()}`);
//let result = playRound(getPlayerChoice(), getComputerChoice());
//console.log(result)

game();