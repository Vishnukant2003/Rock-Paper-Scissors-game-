let rounds = 0;
let userWinCount = 0;
let userLostCount = 0;
let drawCount = 0;

function playGame(userChoice) {

    let computerChoice = getComputerChoice();

    const result= document.getElementById("result");
    const total= document.getElementById("total");
    const won= document.getElementById("won");
    const lost= document.getElementById("lost");
    const draw= document.getElementById("draw");
    

    if (userChoice === computerChoice) {
        result.style.visibility= "visible";
        result.innerText= "Result : Draw.";

        rounds++;
        drawCount++;
        total.innerText= "Total Rounds : " + rounds;
        draw.innerText= "Draw : " + drawCount;
    } else if (userChoice === "rock" && computerChoice === "scissors"
        || userChoice === "paper" && computerChoice === "rock"
        || userChoice === "scissors" && computerChoice === "paper"
    ) {
        result.style.visibility= "visible";
        result.innerText= "Result : You won.";

        rounds++;
        userWinCount++;
        total.innerText= "Total Rounds : " + rounds;
        won.innerText= "You Won : " + userWinCount;
    } else {
        result.style.visibility= "visible";
        result.innerText= "Result : You lost.";

        rounds++;
        userLostCount++;
        total.innerText= "Total Rounds : " + rounds;
        lost.innerText= "You Lost : " + userLostCount;
    }

}


function getComputerChoice() {
    let arr=["rock", "paper", "scissors"];
    let x = (Math.random()*3);
    let random = parseInt(x);
    return arr[random];
}