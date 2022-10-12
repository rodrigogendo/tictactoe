let f1, f2, f3, f4, f5, f6, f7, f8, f9;
f1 = document.querySelector('#f1');
f2 = document.querySelector('#f2');
f3 = document.querySelector('#f3');
f4 = document.querySelector('#f4');
f5 = document.querySelector('#f5');
f6 = document.querySelector('#f6');
f7 = document.querySelector('#f7');
f8 = document.querySelector('#f8');
f9 = document.querySelector('#f9');
let playerTurn = document.querySelector('h4');
let fields = document.querySelectorAll('input');
let resetButton = document.querySelector('.reset');
let container = document.querySelector('.container');
let win1 = document.querySelector('.win-line1');
let win2 = document.querySelector('.win-line2');
let win3 = document.querySelector('.win-line3');
let win4 = document.querySelector('.win-line4');
let win5 = document.querySelector('.win-line5');
let win6 = document.querySelector('.win-line6');
let win7 = document.querySelector('.win-line7');
let win8 = document.querySelector('.win-line8');

let buttonsArr = [];
let playerOne = true;
let playerTwo = false;

function addButtons() {

    for (let i = 0; i < fields.length; i++) {
        buttonsArr.push(fields[i]);
    }
    for (let j = 0; j < buttonsArr.length; j++) {
        buttonsArr[j].addEventListener('click', ()=>{
            if (playerOne == true) {
                playerTurn.innerHTML = 'Player O Turn';
                buttonsArr[j].value = 'X';
                playerOne = false;
                playerTwo = true;
                checkMarked();
                checkWinner();
            } else {
                playerTurn.innerHTML = 'Player X Turn';
                buttonsArr[j].value = 'O';
                playerOne = true;
                playerTwo = false;
                checkMarked();
                checkWinner();
            }
        });
    }
}

function checkMarked() {
    switch(f1.value) {
        case 'X':
            f1.disabled = true
            break;
        case 'O':
            f1.disabled = true
            break;
    }
    switch(f2.value) {
        case 'X':
            f2.disabled = true
            break;
        case 'O':
            f2.disabled = true
            break;
    }
    switch(f3.value) {
        case 'X':
            f3.disabled = true
            break;
        case 'O':
            f3.disabled = true
            break;
    }
    switch(f4.value) {
        case 'X':
            f4.disabled = true
            break;
        case 'O':
            f4.disabled = true
            break;
    }
    switch(f5.value) {
        case 'X':
            f5.disabled = true
            break;
        case 'O':
            f5.disabled = true
            break;
    }
    switch(f6.value) {
        case 'X':
            f6.disabled = true
            break;
        case 'O':
            f6.disabled = true
            break;
    }
    switch(f7.value) {
        case 'X':
            f7.disabled = true
            break;
        case 'O':
            f7.disabled = true
            break;
    }
    switch(f8.value) {
        case 'X':
            f8.disabled = true
            break;
        case 'O':
            f8.disabled = true
            break;
    }
    switch(f9.value) {
        case 'X':
            f9.disabled = true
            break;
        case 'O':
            f9.disabled = true
            break;
    }
}

function checkWinner() {
    if ((f1.value == 'X') && (f2.value == 'X') && (f3.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win1.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f4.value == 'X') && (f5.value == 'X') && (f6.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win2.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f7.value == 'X') && (f8.value == 'X') && (f9.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win3.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f3.value == 'X') && (f6.value == 'X') && (f9.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win4.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f2.value == 'X') && (f5.value == 'X') && (f8.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win5.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'X') && (f4.value == 'X') && (f7.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win6.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'X') && (f5.value == 'X') && (f9.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win7.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f3.value == 'X') && (f5.value == 'X') && (f7.value == 'X')) {
        playerTurn.innerHTML = 'Player X Won!'
        win8.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'O') && (f2.value == 'O') && (f3.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win1.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f4.value == 'O') && (f5.value == 'O') && (f6.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win2.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f7.value == 'O') && (f8.value == 'O') && (f9.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win3.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f3.value == 'O') && (f6.value == 'O') && (f9.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win4.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f2.value == 'O') && (f5.value == 'O') && (f8.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win5.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'O') && (f4.value == 'O') && (f7.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win6.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'O') && (f5.value == 'O') && (f9.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win7.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f3.value == 'O') && (f5.value == 'O') && (f7.value == 'O')) {
        playerTurn.innerHTML = 'Player O Won!'
        win8.style.display = 'block';
        f1.disabled = true;
        f2.disabled = true;
        f3.disabled = true;
        f4.disabled = true;
        f5.disabled = true;
        f6.disabled = true;
        f7.disabled = true;
        f8.disabled = true;
        f9.disabled = true;
    } else if((f1.value == 'X' || f1.value == 'O') && (f2.value == 'X' || f2.value == 'O')
    && (f3.value == 'X' || f3.value == 'O') && (f4.value == 'X' || f4.value == 'O')
    && (f5.value == 'X' || f5.value == 'O') && (f6.value == 'X' || f6.value == 'O')
    && (f7.value == 'X' || f7.value == 'O') && (f8.value == 'X' || f8.value == 'O')
    && (f9.value == 'X' || f9.value == 'O')) {
        playerTurn.innerHTML = 'Draw!'
    }
}

addButtons();

resetButton.addEventListener('click', ()=>{
    playerOne = true;
    playerTwo = false;
    playerTurn.innerHTML = 'Player X Turn';
    f1.disabled = false;
    f2.disabled = false;
    f3.disabled = false;
    f4.disabled = false;
    f5.disabled = false;
    f6.disabled = false;
    f7.disabled = false;
    f8.disabled = false;
    f9.disabled = false;
    f1.value = '';
    f2.value = '';
    f3.value = '';
    f4.value = '';
    f5.value = '';
    f6.value = '';
    f7.value = '';
    f8.value = '';
    f9.value = '';
    win1.style.display = 'none';
    win2.style.display = 'none';
    win3.style.display = 'none';
    win4.style.display = 'none';
    win5.style.display = 'none';
    win6.style.display = 'none';
    win7.style.display = 'none';
    win8.style.display = 'none';
})