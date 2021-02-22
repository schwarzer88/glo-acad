"use strict";

function getTimeRemaining() {
    let dateStop = new Date('01 jan 2022').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);
    return (timeRemaining);
}

function getGreeting() {
    let hours = new Date().getHours();
    if (hours < 12) {
        return 'Доброе утро';
    } else if (hours >= 12 && hours < 18) {
        return 'Добрый день';
    } else {
        return 'Добрый вечер';
    }
};

function getNowTime() {
    const addZero = n => n < 10 ? '0' + n : n;
    let hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();
    if (hours > 12) {
        hours -= 12;
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}pm`;
    } else {
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}am`;
    }
}

function getWeek() {
    const week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
    const weeks = new Date().getDay();
    return week[weeks - 1];
};

function getElems() {
    let root = document.querySelector('#root');
    root.innerHTML = `${getGreeting()}<br>
    Сегодня:${getWeek()}<br>
    Текущее время:${getNowTime()}<br>
    До нового года осталось ${getTimeRemaining()} дней`;
}

setInterval(getElems(), 1000);