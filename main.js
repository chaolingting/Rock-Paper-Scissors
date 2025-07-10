//Computer Choice
function getComputerChoice(){
 const computerChoice = Math.floor(Math.random() * 3);
 console.log(computerChoice)
 
 if (computerChoice === 0){
    return 'rock';
 } else if (computerChoice === 1){
    return 'paper';
 } else if (computerChoice === 2){
    return 'scissor'
 }
 
}
//console.log(getComputerChoice());

//Human Choice
function getHumanChoice(){
    const userInput = prompt('Choose Rock, Paper, or Scissors:')
    return userInput.toLowerCase().trim();

}



function playGame(){
    
//Score
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
if (humanChoice === 'rock' && computerChoice === 'paper'){
console.log('You lose, try again!');
computerScore += 1 ;
} else if (humanChoice ==='rock' && computerChoice === 'rock' ){
 console.log('TIE, try again!');

} else if (humanChoice === 'rock' && computerChoice === 'scissor'){
    console.log('You win!')
    humanScore += 1;
}

if (humanChoice ==='paper' && computerChoice === 'rock'){
    console.log('You win!');
    humanScore += 1;
}else if(humanChoice === 'paper' && computerChoice === 'paper'){
     console.log('TIE, try again!');
}else if (humanChoice === 'paper' && computerChoice === 'scissor'){
    console.log('You lose, try again');
    computerScore += 1;
}

if(humanChoice === 'scissor' && computerChoice === 'paper'){
    console.log('You win!');
    humanScore += 1;
} else if (humanChoice === 'scissor' && computerChoice === 'scissor'){
    console.log('TIE, try again');
} else if (humanChoice === 'scissor' && computerChoice ==='rock'){
    console.log('You lose, try again');
    computerScore += 1;
}


console.log(`Score: You ${humanScore} : Computer ${computerScore}`);





}

for (let i = 1; i <= 5; i++){
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(`you choose: ${humanChoice}`);
console.log(`computer choose: ${computerChoice}`);
playRound(humanChoice, computerChoice);
}

if(humanScore > computerScore){
    console.log('Congrats you win the game! Refresh to play again.');
}else if(humanScore < computerScore){
    console.log('computer wins the game, refresh to play again!');
} else{
    console.log('This game is a tie, refresh to play agian!');
}

}

//test
playGame();