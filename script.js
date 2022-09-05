//1. Generate random input from Computer
//2. Player clicks on image to select rock, paper, or scizzors
//3. Determine winner of Game
//4. Output outcome


// function game(){
  

//     function playRound(playerSelection, computerSelection){ 
//         function getYourChoice(){
//             return playerSelection = prompt("Your choice:").toLowerCase();}
//                 getYourChoice();








// const options = ['rock', 'paper', 'scizzors'];

const rock = document.querySelector('#rock');
const options = ['rock', 'paper', 'scizzors'];


function game(playerSelection, computerSelection){



const button = document.querySelectorAll('.option');

button.forEach(option => {
   
    option.addEventListener('click', function getChoices(){
        for(i = 0; i <= options.length-1; i++){
            function getPlayerSelection(){
                return playerSelection = "rock"
            
        };

        getPlayerSelection();
        
        function getComputerChoice (){
            return computerSelection = options[Math.floor(Math.random()*options.length)]}}; 
        
        getComputerChoice();


        
        
// Below to enter computer choice to HTML
const computer = document.querySelector('#computerOption');
const text = document.createElement('p');
text.textContent = `The computer selected ${computerSelection}`;

computer.appendChild(text);



console.log(playerSelection);
console.log(computerSelection);




if (playerSelection === computerSelection){
    outcomeToHTML = `Tie! The computer also selected ${playerSelection}`}

else if (playerSelection === "rock" && computerSelection === "scizzors" || playerSelection === "scizzors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") 
{
    outcomeToHTML = `You win! ${playerSelection} beats ${computerSelection}`}

else {outcomeToHTML = `Sorry, ${computerSelection} beats ${playerSelection}`}

// Below to enter match result to HTML
const outcome = document.querySelector('#outcome');
const outcomeText = document.createElement('p');
outcomeText.textContent = outcomeToHTML;

outcome.appendChild(outcomeText);



});



});



};

game();

