//1. Generate random input from Computer
//2. Player clicks on image to select rock, paper, or scizzors
//3. Determine winner of Game
//4. Output outcome


// function game(){
  

//     function playRound(playerSelection, computerSelection){ 
//         function getYourChoice(){
//             return playerSelection = prompt("Your choice:").toLowerCase();}
//                 getYourChoice();





// // Game outcome based on Player vs. Computer selections

//     if (playerSelection == "rock" || playerSelection == "paper"|| playerSelection == "scizzors"){
//         if (playerSelection === computerSelection){
//         console.log("It's a draw! " + "the computer selected " + computerSelection + " as well!")

//         } else if (playerSelection === "rock" && computerSelection === "paper"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);

//         } else if (playerSelection === "paper" && computerSelection === "scizzors"){
//         console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        
//         } else{
//         console.log("You Win! " + playerSelection + " beats " + computerSelection);
//         }}
        
//     else{
//     console.log("Please re-enter your selection using \"rock\", \"paper\", or \"scizzors\"")}

//     }; 
    
// playRound()

// }};

// game()








// const options = ['rock', 'paper', 'scizzors'];

const rock = document.querySelector('#rock');
const options = ['rock', 'paper', 'scizzors'];


function game(playerSelection, computerSelection){



const button = document.querySelectorAll('.option');

button.forEach(option => {
   
    option.addEventListener('click', function getPlayerSelection(){
        for(i = 0; i <= options.length-1; i++){
            console.log(options[i])};
        });
    });
  

function getComputerChoice (){
    return computerSelection = options[Math.floor(Math.random()*options.length)]}; 

getComputerChoice();


console.log(playerSelection);
console.log(computerSelection);


// Below to enter computer choice to HTML
const computer = document.querySelector('#computerOption');
const text = document.createElement('p');
text.textContent = computerSelection;

computer.appendChild(text);



};




game();




