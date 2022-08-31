//1. Generate random input from Computer
//2. Receive input from player
//3. Determine winner of Game
//4. Output outcome


// function game(){
  
// // Loop 5 times    
// for (i = 0; i < 5; i++){

    // function playRound(playerSelection, computerSelection){ 
    //     function getYourChoice(){
    //         return playerSelection = prompt("Your choice:").toLowerCase();}
    //             getYourChoice();

// // Randomly select Computer's choice   
//     function getComputerChoice(computerOptions = ['rock', 'paper', 'scizzors'])
//         {return computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)]
//         }
//                 getComputerChoice();

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

const options = ['rock', 'paper', 'scizzors'];



const option = document.querySelector('#option1');
option.addEventListener('click', () => {
        // console.log(options);
})




function getComputerChoice (){
    return computerSelection = options[Math.floor(Math.random()*options.length)];  

};

getComputerChoice();

console.log(computerSelection);


