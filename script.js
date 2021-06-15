// computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function computerPlay() {
  const setInput = ["rock", "paper", "scissor"];
  const getRandomInput = setInput[Math.floor(Math.random() * setInput.length)];
  return getRandomInput;
}

// Write a function that plays a single round of Rock Paper Scissors
const computerSelection = computerPlay();
// console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  let human = 0;
  let computer = 0;

  if (playerSelection !== computerSelection) {
    // player chooses rock
    if (
      (playerSelection === "rock" || playerSelection === "ROCK") &&
      computerSelection === "scissor"
    ) {
      console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
      human += 1;
    } else if (
      (playerSelection === "rock" || playerSelection === "ROCK") &&
      computerSelection === "paper"
    ) {
      console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
      computer += 1;
    }
    // player chooses paper
    else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
      human += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
      console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
      computer += 1;
    }
    // player chooses scissor
    else if (playerSelection === "scissor" && computerSelection === "paper") {
      console.log(`You Win ! ${playerSelection} beats ${computerSelection}`);
      human += 1;
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
      console.log(`You Lose ! ${computerSelection} beats ${playerSelection}`);
      computer += 1;
    } else {
      console.log("You made a wrong choice");
    }
  } else {
    console.log("It's a Tie!");
  }
  console.log(
    `Total number of winings  ${human} human and ${computer} computer `
  );
}

function game() {
  playRound("paper", computerSelection);
  playRound("paper", computerSelection);
  playRound("paper", computerSelection);
  playRound("paper", computerSelection);
  playRound("paper", computerSelection);
}

game();
