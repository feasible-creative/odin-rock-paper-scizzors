//1. Generate random input from Computer
//2. Receive input from player
//3. Determine winner of Game
//4. Output outcome


    
    



// function getComputerChoice(){
//  ['rock', 'paper', 'scizzors'];
 

// }








// function yourChoice(){
//     return answer = prompt("Your choice:")
  
// }




function playRound(playerSelection, computerSelection){ 
    function yourChoice(){
        return playerSelection = prompt("Your choice:");}
          yourChoice();
    
      


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
