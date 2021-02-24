window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    //timer
    function countTimer(deadLine) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadLine).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { timeRemaining, hours, minutes, seconds };
        }

        function updateClock() {
            setInterval(function() {
                let timer = getTimeRemaining();
                const addZero = n => n < 10 ? '0' + n : n;

                timerHours.textContent = addZero(timer.hours);
                timerMinutes.textContent = addZero(timer.minutes);
                timerSeconds.textContent = addZero(timer.seconds);
                if (timer.timeRemaining <= 0) {
                    clearInterval(1);
                    timerHours.textContent = '00';
                    timerMinutes.textContent = '00';
                    timerSeconds.textContent = '00';
                }
            }, 1000);
        };
        updateClock();
    };

    countTimer('1 july 2019');

    //Меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu))
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                let nowPx = -200;
                let widthPhone = document.documentElement.clientWidth;
                popupContent.style.top = '-200px';
                if (widthPhone <= 768) {
                    popup.style.display = 'block';
                    popupContent.style.display = 'block';
                    popupContent.style.top = null;
                } else {
                    let anim = setInterval(() => {
                        let height = Math.ceil(document.documentElement.clientHeight);
                        popupContent.style.position = 'relative';
                        console.log({ nowPx, height });
                        if (nowPx === Math.ceil(height / 4)) {
                            nowPx = 0;
                            clearInterval(anim);
                        } else {
                            nowPx++;
                            popupContent.style.top = `${nowPx}px`;
                        }
                    }, 8);
                }
            });
        });
        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    };

    togglePopUp();


});