
function displayTitle() {
    alert('Welcome to the rock paper scissors game.');
}
function playGame() {
    let number = Math.floor(Math.random() * 2 + 1);
    let count = 1;
    let guess;
    alert(' choose rock, paper or scissors and remember your guess');

    while (true) {
        guess = Number(prompt('Enter your guess'));
        if (number === 0) {
            alert('Rock, If you choose rock, you tied.  If you chose scissors you Win.  If you chose paper you lose.');
            count++;
        } else if (number === 1) {
            alert('Paper. If you chose paper you tied.  If you chose rock you lose. And if you chose SCISSORS you win');
            count++;
        } else if (number === 2) {
            alert(`Scissors. If you chose scissors you tied.  If you chose rock you lose.  And if you chose paper, congratulations you win`);
            return;
        }
    }
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again?(y or n');
    }
    alert('Thanks for playing the game!');
}

main();



