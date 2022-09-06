//1. Generate random input from Computer
//2. Player clicks on image to select rock, paper, or scizzors
//3. Determine winner of Game
//4. Output outcome


// Below to enter computer choice to HTML
// const computer = document.querySelector('#computerOption');
// const text = document.createElement('p');
// text.textContent = `The computer selected: ${computerSelection}`;

// computer.appendChild(text);




const rock = document.querySelector('#rock');
const options = ['rock', 'paper', 'scizzors'];


function game(playerSelection, computerSelection){



const button = document.querySelectorAll('.option');

button.forEach(option => {
    
   
    option.addEventListener('click', function getChoices(){
        // console.log(this.id, this.innerHTML)


            function getPlayerSelection(){
                if(option.id === "rock"){
                    return playerSelection = "rock"
                }

                else if (option.id === "paper"){
                    return playerSelection = "paper"
                }

                else if (option.id === "scizzors"){
                    return playerSelection = "scizzors"
                }
                                     
            
        };


getPlayerSelection();
        
    function getComputerChoice (){
            return computerSelection = options[Math.floor(Math.random()*options.length)]}; 
        
        getComputerChoice();


        

console.log(playerSelection);
console.log(computerSelection);


// Result of game() based on PlayerSelection vs. Randomly generated ComputerSelection

if (playerSelection === computerSelection){
    outcomeToHTML = `Tie! You both selected ${playerSelection}`}

else if (playerSelection === "rock" && computerSelection === "scizzors" || playerSelection === "scizzors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") 
{
    outcomeToHTML = `You win! ${playerSelection} beats ${computerSelection}`}

else {outcomeToHTML = `Sorry, ${computerSelection} beats ${playerSelection}`}


// Below to enter match result to HTML
const outcome = document.querySelector('#outcome');
outcome.textContent = "Play Again?";

const instructions = document.querySelector('#computerOption');
instructions.textContent = outcomeToHTML;



});



});



};



game();


