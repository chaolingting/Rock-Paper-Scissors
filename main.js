
//Score
let humanScore = 0;
let computerScore = 0;


const btnRock = document.getElementById("rock")
const btnScissors = document.getElementById("scissors")
const btnPaper = document.getElementById("paper")
const screenHuman = document.querySelector(".screen-human")
const screenComputer = document.querySelector(".screen-computer")
const scoreHuman = document.querySelector(".score-human")
const scoreComputer = document.querySelector(".score-computer")
const board = document.querySelector(".board")


const buttons = [btnRock, btnScissors, btnPaper];



//Computer Choice
function getComputerChoice(){
 const computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0){
        return "Rock"
    } else if (computerChoice === 1){
        return "Paper"
    } else if (computerChoice === 2){
        return "Scissors"
    }
 
}



btnRock.addEventListener("click", () => {
    const humanChoice = "Rock";
    screenHuman.innerText = "Rock"; 
    screenHuman.className = "chosen-btn-human"
    const computerChoice = getComputerChoice();
    screenComputer.textContent = computerChoice;
    screenComputer.className = "chosen-btn-computer"
    playRound(humanChoice, computerChoice);

    })

btnScissors.addEventListener("click", () => {
    const humanChoice = "Scissors";
    screenHuman.innerText = `${humanChoice}`; 
    screenHuman.className = "chosen-btn-human"
    const computerChoice = getComputerChoice();
    screenComputer.textContent = computerChoice;
    screenComputer.className = "chosen-btn-computer"
    playRound(humanChoice, computerChoice);

    })

btnPaper.addEventListener("click", () => {
    const humanChoice = "Paper";
    screenHuman.innerText = "Paper"; 
    screenHuman.className = "chosen-btn-human"
    const computerChoice = getComputerChoice();
    screenComputer.textContent = computerChoice;
    screenComputer.className = "chosen-btn-computer"
    playRound(humanChoice, computerChoice);

    })





function playRound(humanChoice,computerChoice){
        if (humanChoice === 'Rock' && computerChoice === 'Paper'){
            computerScore += 1 ;
            } else if (humanChoice ==='Rock' && computerChoice === 'Rock' ){
            } else if (humanChoice === 'Rock' && computerChoice === 'Scissors'){
            humanScore += 1;
        }

        if (humanChoice ==='Paper' && computerChoice === 'Rock'){
            humanScore += 1;
        }else if(humanChoice === 'Paper' && computerChoice === 'Paper'){
        }else if (humanChoice === 'Paper' && computerChoice === 'Scissors'){
                computerScore += 1;
        }

        if(humanChoice === 'Scissors' && computerChoice === 'Paper'){
            humanScore += 1;
        } else if (humanChoice === 'Scissors' && computerChoice === 'Scissors'){
        } else if (humanChoice === 'Scissors' && computerChoice ==='Rock'){
            computerScore += 1;

        }

      scoreHuman.innerText = humanScore;
      scoreComputer.innerText = computerScore;
      scoreHuman.className = "score";
      scoreComputer.className = "score";


      playGame()
    
}

function playGame(){
    if (humanScore === 0 && computerScore === 0) {
        return;
    }

    if(humanScore >=5 && computerScore >=5 && humanScore ===computerScore){
            board.innerText = "This game is a tie, refresh to play again!";
            board.className = "tie-text"
            endGame();
    }else if(humanScore >= 5){
            board.innerText = "You win the game, refresh to play again!"
            board.className = "win-text"
            endGame();
    }else if(computerScore >= 5){
            board.innerText = "Computer wins the game, refresh to play again!"
            board.className = "lose-text"
            endGame();
        }

}

function endGame(){
    buttons.forEach((btn) => {
        btn.disabled = true
    })

}