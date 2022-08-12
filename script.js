//1. Generate random input from Computer
//2. Receive input from player
//3. Determine winner of Game
//4. Output outcome

    // return computerSelection = "paper";             
        // const computerRandom = Math.floor(Math.random()* computerOptions.length);
        
                
        // let computerSelection = computerOptions[computerRandom];
          

function game(){
  
for (i = 0; i < 5; i++){

function playRound(playerSelection, computerSelection){ 
    function getYourChoice(){
        return playerSelection = prompt("Your choice:").toLowerCase();}
            getYourChoice();



    function getComputerChoice(computerOptions = ['rock', 'paper', 'scizzors'])
    {   
        return computerSelection = computerOptions[Math.floor(Math.random()*computerOptions.length)]
       
    
    }
    
        getComputerChoice();


        // console.log("The computer selected " + computerSelection + ", you selected " + playerSelection);    
    

    if (playerSelection == "rock" || playerSelection == "paper"|| playerSelection == "scizzors"){
        if (playerSelection === computerSelection){
        console.log("It's a draw! " + "the computer selected " + computerSelection + " as well!")
        } else if (playerSelection === "rock" && computerSelection === "paper"){console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else if (playerSelection === "paper" && computerSelection === "scizzors"){
        console.log("You Lose! " + computerSelection + " beats " + playerSelection);
        } else{
        console.log("You Win! " + playerSelection + " beats " + computerSelection);
        }}
        
    else{
    console.log("Please re-enter your selection using \"rock\", \"paper\", or \"scizzors\"")}
     

    };

    
       
    
playRound()


};
}

game()


