//1. Generate random input from Computer
//2. Player clicks on image to select rock, paper, or scizzors
//3. Determine winner of Game
//4. Output outcome

// Below to enter computer choice to HTML
// const computer = document.querySelector('#computerOption');
// const text = document.createElement('p');
// text.textContent = `The computer selected: ${computerSelection}`;

// computer.appendChild(text);

const options = ["rock", "paper", "scizzors"];

// Set starting score for player to 0
const playerScore = document.createElement("p");
playerScore.textContent = 0;
const PlayerScoreContainer = document
  .getElementById("playerScore")
  .appendChild(playerScore);

// Set starting score for computer to 0
const computerScore = document.createElement("p");
computerScore.textContent = 0;
const computerScoreContainer = document
  .getElementById("computerScore")
  .appendChild(computerScore);

// playRound function parameters determine selection based on user's input and also a randomized for the computer
function playRound(playerSelection, computerSelection) {
  const button = document.querySelectorAll(".option");

  button.forEach((option) => {
    option.addEventListener("click", function getChoices() {
      function getPlayerSelection() {
        if (option.id === "rock") {
          return (playerSelection = "rock");
        } else if (option.id === "paper") {
          return (playerSelection = "paper");
        } else if (option.id === "scizzors") {
          return (playerSelection = "scizzors");
        }
      }

      getPlayerSelection();

      //getComputerChoice returns computerSelection (random selection)
      function getComputerChoice() {
        return (computerSelection =
          options[Math.floor(Math.random() * options.length)]);
      }

      getComputerChoice();

      //Result of game based on winner
      if (playerSelection === computerSelection) {
        outcomeToHTML = `Tie! You both selected ${playerSelection}`;
      } else if (
        (playerSelection === "rock" && computerSelection === "scizzors") ||
        (playerSelection === "scizzors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        outcomeToHTML = `You win! ${playerSelection} beats ${computerSelection}`;
        playerScore.textContent++;
      } else {
        outcomeToHTML = `Sorry, ${computerSelection} beats ${playerSelection}`;
        computerScore.textContent++;
      }

      //Once either the player or computer reaches a score of 5, determine the winner
      if (
        parseInt(computerScore.textContent) === 5 ||
        parseInt(playerScore.textContent) === 5
      ) {
        if (parseInt(playerScore.textContent) === 5) {
          outcomeToHTML = "Player Wins!";
          button.forEach((e) => {
            option.remove();
          });
        } else {
          outcomeToHTML = "Computer Wins.";
        }
      }

      //Enter each individual match result to HTML
      const outcome = document.querySelector("#outcome");
      outcome.textContent = "Play Again?";

      const instructions = document.querySelector("#computerOption");
      instructions.textContent = outcomeToHTML;
    });
  });
}

playRound();
