   let winCount = 0;
    let loseCount= 0;
    let drawCount= 0;

function playGame(userChoice){
    let computerChoice = getComputerChoice();
  
    console.log(userChoice,computerChoice);

    let result = '';

    document.getElementById("result")

    if(userChoice === computerChoice ){
        drawCount++;
        result.innerHTML = "It's Draw🐉... "

    }else if(userChoice==="rock" && computerChoice==="scissor" 
        ||   userChoice==="paper" && computerChoice==="rock"
        ||   userChoice==="scissor" && computerChoice==="paper"
    )
    {
        winCount++;
        result.innerHTML = "You Win🏆 ..."
        
    }else{
           loseCount++;
        result.innerHTML = "You lose😭"
     
    }
       // Update result text
   

    document.getElementById("score").innerHTML = `
        Wins: ${winCount} | Losses: ${loseCount} | Draws: ${drawCount}
    `;
}


function getComputerChoice(){

    let arr = ["rock","paper","scissor"];

    let x = Math.random() * 3;

    let random = parseInt(x);

    return arr[random];

}
