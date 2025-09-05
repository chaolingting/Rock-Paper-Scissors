//Computer Choice
function getComputerChoice(){
 const computerChoice = Math.floor(Math.random() * 3);
 console.log(computerChoice)
 
 if (computerChoice === 0){
    return 'rock';
 } else if (computerChoice === 1){
    return 'paper';
 } else if (computerChoice === 2){
    return 'scissors'
 }
 
}


//Human Choice
function getHumanChoice(){
    const userInput = prompt('Choose Rock, Paper, or Scissors:')
    return userInput.toLowerCase().trim();

}


function playRound(humanChoice,computerChoice){
        if (humanChoice === 'rock' && computerChoice === 'paper'){
            console.log('You lose, try again!');
            computerScore += 1 ;
            } else if (humanChoice ==='rock' && computerChoice === 'rock' ){
            console.log('TIE, try again!');

            } else if (humanChoice === 'rock' && computerChoice === 'scissors'){
                console.log('You win!')
                humanScore += 1;
        }

        if (humanChoice ==='paper' && computerChoice === 'rock'){
            console.log('You win!');
            humanScore += 1;
        }else if(humanChoice === 'paper' && computerChoice === 'paper'){
                console.log('TIE, try again!');
        }else if (humanChoice === 'paper' && computerChoice === 'scissors'){
                console.log('You lose, try again');
                computerScore += 1;
        }

        if(humanChoice === 'scissors' && computerChoice === 'paper'){
            console.log('You win!');
            humanScore += 1;
        } else if (humanChoice === 'scissors' && computerChoice === 'scissors'){
            console.log('TIE, try again');
        } else if (humanChoice === 'scissors' && computerChoice ==='rock'){
            console.log('You lose, try again');
            computerScore += 1;
        }


        console.log(`Score: You ${humanScore} : Computer ${computerScore}`);

}

function playGame(){
    
    //Score
    let humanScore = 0;
    let computerScore = 0;


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