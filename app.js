let chance = 1;
var player = document.getElementsByClassName('player')[0];

document.querySelectorAll('.button').forEach(btn => btn.addEventListener('click', function () {
    if (this.innerHTML === '') {
        this.innerHTML = setXO();
        CheckWinner();
    }
}));

function setXO(){
    if (chance === 1) {
        chance = 2;
        player.innerHTML = "Player 2's turn!";
        return 'X';
    } else {
        chance = 1;
        player.innerHTML = "Player 1's turn!";
        return 'O';
    }
}

function CheckWinner() {
    var btn1 = document.querySelector('#btn1').innerHTML;
    var btn2 = document.querySelector('#btn2').innerHTML;
    var btn3 = document.querySelector('#btn3').innerHTML;
    var btn4 = document.querySelector('#btn4').innerHTML;
    var btn5 = document.querySelector('#btn5').innerHTML;
    var btn6 = document.querySelector('#btn6').innerHTML;
    var btn7 = document.querySelector('#btn7').innerHTML;
    var btn8 = document.querySelector('#btn8').innerHTML;
    var btn9 = document.querySelector('#btn9').innerHTML;

    if (btn1 === btn2 && btn2 === btn3 && btn1 !== '' ||
        btn4 === btn5 && btn5 === btn6 && btn4 !== '' ||
        btn7 === btn8 && btn8 === btn9 && btn7 !== '' ||
        btn1 === btn4 && btn4 === btn7 && btn1 !== '' ||
        btn2 === btn5 && btn5 === btn8 && btn2 !== '' ||
        btn3 === btn6 && btn6 === btn9 && btn3 !== '' ||
        btn1 === btn5 && btn5 === btn9 && btn1 !== '' ||
        btn3 === btn5 && btn5 === btn7 && btn3 !== '') {
            
        alert(displayWinner());
        document.getElementById('reset').style.display = 'block';
        //disable all buttons
        document.querySelectorAll('.button').forEach(btn => btn.disabled = true);
        document.querySelector('table').style.margin = '40px auto';
    }
}

function displayWinner() {
    if (chance === 1) {
        return 'O is the winner';
    } else {
        return 'X is the winner';
    }
}

function resetGame() {
    document.querySelectorAll('.button').forEach(btn => btn.innerHTML = '');
    chance = 1;
    document.getElementById('reset').style.display = 'none';
    //enable all buttons
    document.querySelectorAll('.button').forEach(btn => btn.disabled = false);
}