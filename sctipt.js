"use strict"

function game() {
    let x = Math.floor(Math.random() * (Math.ceil(100) - Math.floor(1))) + Math.floor(1);

    function startGame(x) {
        let y = prompt('Угадай число от 1 до 100');
        if (y === 'undefined' || y == null || y === 0) {
            alert('Игра окончена');
        } else if (!parseInt(y)) {
            alert('Введите число!!');
            startGame(x);
        } else if (y < x) {
            alert('Загаданное число больше');
            startGame(x);
        } else if (y > x) {
            alert('Загаданное число меньше');
            startGame(x);
        } else if (y == x) {
            alert('Поздравляю, Вы угадали');
        }
    }
    startGame(x);
}

game();