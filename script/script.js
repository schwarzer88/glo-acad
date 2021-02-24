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
            mainHeader = document.querySelector('.main-header'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }



        menu.addEventListener('click', (e) => {
            let target = e.target;
            target = target.classList.contains('close-btn');
            if (target) {
                handlerMenu();
            } else {
                target = e.target.closest('li');
                if (target) {
                    handlerMenu();
                } else {
                    return;
                }
            }

            // closeBtn.addEventListener('click', handlerMenu);


            // menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu))
        });
        btnMenu.addEventListener('click', handlerMenu);
    };
    toggleMenu();

    //popup
    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupContent = document.querySelector('.popup-content');

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                let nowPx = -40;
                let widthPhone = document.documentElement.clientWidth;
                popupContent.style.top = '-40%';
                if (widthPhone <= 768) {
                    popup.style.display = 'block';
                    popupContent.style.display = 'block';
                    popupContent.style.top = null;
                } else {
                    let anim = setInterval(() => {
                        let height = Math.ceil(document.documentElement.clientHeight);
                        popupContent.style.position = 'relative';
                        if (nowPx === Math.ceil(30)) {
                            nowPx = 0;
                            clearInterval(anim);
                        } else {
                            nowPx++;
                            popupContent.style.top = `${nowPx}%`;
                        }
                    }, 8);
                }
            });
            popup.addEventListener('click', (event) => {
                let target = event.target;
                if (target.classList.contains('popup-close')) {
                    popup.style.display = 'none';
                } else {
                    target = target.closest('.popup-content');
                    if (!target) {
                        popup.style.display = 'none';
                    }
                }
            });
        });
    };
    togglePopUp();

    //tabs
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }
            }
        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {

                tab.forEach((item, i) => {

                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
});