//1. Generate random input from Computer
//2. Receive input from player
//3. Determine winner of Game
//4. Output outcome



function playRound(playerSelection, computerSelection){ 
    function getYourChoice(){
        return playerSelection = prompt("Your choice:").toLowerCase();}
            getYourChoice();



    function getComputerChoice(computerOptions = ['rock', 'paper', 'scizzors'])
    {     return computerSelection = "paper";             
        // const computerRandom = Math.floor(Math.random()* computerOptions.length);
        
                
        // let computerSelection = computerOptions[computerRandom];
          
    }
    
        getComputerChoice();
        console.log("The computer selected " + computerSelection + ", you selected " + playerSelection);    
    
     // update below:  
    if (playerSelection == "rock" || playerSelection == "paper"|| playerSelection == "scizzors"){
        if (playerSelection === computerSelection){
        console.log("DRAW")
        } else if (playerSelection === "rock" && computerSelection === "paper"){console.log("You Lose.");
        } else if (playerSelection === "paper" && computerSelection === "scizzors"){
        console.log("You Lose.");
        } else{
        console.log("You Win!");
        }}
        
    else{
    console.log("Please re-enter your selection using \"rock\", \"paper\", or \"scizzors\"")}
     
    };
       
    
playRound()

