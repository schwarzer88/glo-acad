"use strict"

function game(x) {
    let y = +prompt('Угадай число от 1 до 100');
    if (!parseInt(y)) {
        alert('Введите число!!');
        game(x);
    } else if (y < x) {
        alert('Загаданное число больше');
        game(x);
    } else if (y > x) {
        alert('Загаданное число меньше');
        game(x);
    } else if (y === x) {
        alert('Поздравляю, Вы угадали');
    }
}

game(50);