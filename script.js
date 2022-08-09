//1. Generate random input from Computer
//2. Receive input from player
//3. Determine winner of Game
//4. Output outcome


// function getComputerChoice(){
//     const computerOptions = ['rock', 'paper', 'scizzors'];

//     const computerRandom = Math.floor(Math.random()* computerOptions.length);
    
//     let computerSelection = computerOptions[computerRandom]
//     console.log(computerSelection);
       
// }
    
//     getComputerChoice();

    












    
// const computerOptions = ['rock', 'paper', 'scizzors'];

// const randomSelector = Math.floor(Math.random()* computerOptions.length);
// console.log(randomSelector, computerOptions[randomSelector]);




function playRound(playerSelection, computerSelection){ 
    function getYourChoice(){
        return playerSelection = prompt("Your choice:");}
            getYourChoice();

    function getComputerChoice(computerOptions = ['rock', 'paper', 'scizzors']){
                    
        const computerRandom = Math.floor(Math.random()* computerOptions.length);

         
                
        let computerSelection = computerOptions[computerRandom];
        console.log(computerSelection);       
    }
    
        getComputerChoice();
            
    
        console.log(playerSelection);    


    if (playerSelection === computerSelection){
        console.log("DRAW")
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You Lose.");
    } else if (playerSelection === "paper" && computerSelection === "scizzors"){
        console.log("You Lose.");
    } else{
        console.log("You Win!");
    }

    
    };
       
playRound()

