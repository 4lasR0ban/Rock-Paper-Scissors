var playerSC = 0;
var compSC = 0;
const playerSC_html = document.getElementById('playerSC');
const compSC_html = document.getElementById('compSC');
const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');
const desc = document.querySelector('h3');
const comm = document.querySelector('h1');
const reset = document.getElementById('reset');
const light1 = document.querySelector('.light-1');
const light2 = document.querySelector('.light-2');
const indication_player = document.querySelector('.indication-player');
const indication_comp = document.querySelector('.indication-comp');


function getCompChoice() {
    const choice = ['r', 'p', 's'];
    const randNum = Math.floor(Math.random() * choice.length);
    return choice[randNum];
}

function convert(choice) {
    if (choice === 'r') return 'rock';
    if (choice === 'p') return 'paper';
    return 'scissors';
}

function indication(playerChoice, compChoice) {
    indication_comp.innerHTML = `<i class="fas fa-hand-${convert(compChoice)}"></i>`;
    indication_player.innerHTML = `<i class="fas fa-hand-${convert(playerChoice)}"></i>`;
}

function win(playerChoice, compChoice) {
    playerSC++;
    console.log('win');
    playerSC_html.textContent = playerSC;
    indication(playerChoice, compChoice);
    light1.style.backgroundColor = "#0bff01";
    light2.style.backgroundColor = "#fe0000";
    desc.textContent = `${convert(playerChoice)} beats ${convert(compChoice)}`;
    comm.textContent = 'Player Win!';
}

function lose(playerChoice, compChoice) {
    compSC++;
    console.log('lose');
    compSC_html.textContent = compSC;
    indication(playerChoice, compChoice);
    light2.style.backgroundColor = "#0bff01";
    light1.style.backgroundColor = "#fe0000";
    desc.textContent = `${convert(playerChoice)} beats by ${convert(compChoice)}`;
    comm.textContent = 'Computer Win!';
}

function draw(playerChoice, compChoice) {
    console.log('draw');
    indication(playerChoice, compChoice);
    light1.style.backgroundColor = "#0bff01";
    light2.style.backgroundColor = "#0bff01";
    desc.textContent = 'Tie';
    comm.textContent = 'Tie!';
}

function game(playerChoice) {
    const compChoice = getCompChoice();
    switch (playerChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(playerChoice, compChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            lose(playerChoice, compChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(playerChoice, compChoice);
            break;
    }
}

function main() {
    rock.addEventListener('click', function() {
        game('r');
    })

    paper.addEventListener('click', function() {
        game('p');
    })

    scissors.addEventListener('click', function() {
        game('s');
    })
    reset.addEventListener('click', function() {
        location.reload();
    })
}

main();