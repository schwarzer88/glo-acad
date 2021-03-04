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

    //плавная прокрутка
    const getScroll = () => {
        let btnScroll = document.querySelector('main>a');
        btnScroll.addEventListener('click', (e) => {
            e.preventDefault();

            const blockId = btnScroll.getAttribute('href');
            document.querySelector(blockId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        });
    }
    getScroll();

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
                target = e.target.closest('a');
                if (target) {
                    handlerMenu();
                } else {
                    return;
                }
            }
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

    //слайдер
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            portfolioDots = document.querySelector('.portfolio-dots'),
            slider = document.querySelector('.portfolio-content');

        let dot;

        const getDots = () => {
            slide.forEach((item, index) => {
                if (index === 0) {
                    portfolioDots.innerHTML += '<li class="dot dot-active"></li>';
                } else {
                    portfolioDots.innerHTML += '<li class="dot"></li>';
                }
                dot = document.querySelectorAll('.dot');
            });
        };
        getDots();

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.portfolio-btn,.dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((item, index) => {
                    if (item === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide(1500);
            }
        });
        startSlide(1500);
    };
    slider();

    //Валидация калькулятора
    const validateInputs = () => {
        const formMessage = document.getElementById('form2-message'),
            formNames = document.querySelectorAll('.form-name'),
            form2Name = document.getElementById('form2-name'),
            formEmails = document.querySelectorAll('.form-email'),
            formPhones = document.querySelectorAll('.form-phone');

        const hyphens = /-+/gi;
        const spaces = /\s+/gi;

        document.addEventListener('input', event => {
            const target = event.target;

            if (target.matches('.calc-item')) {
                target.value = target.value.replace(/\D/gi, '');
            } else if (target.matches('.form-name') || target.matches('#form2-message') ||
                target.matches('#form2-name')) {
                target.value = target.value.replace(/[^А-яа-яЁё-\s]/gi, '');
            } else if (target.matches('.form-email')) {
                target.value = target.value.replace(/[^A-Za-z@_.!`*'-]/gi, '');
            } else if (target.matches('.form-phone')) {
                target.value = target.value.replace(/[^\d()-]/gi, '');
            }
        });

        const changeOnBlur = event => {
            const target = event.target;

            if (target.matches('.form-name') || target.matches('#form2-name')) {
                target.value = target.value[0].toUpperCase() + target.value.substring(1).toLowerCase();
            }

            target.value = target.value.replace(hyphens, '-').trim();
            target.value = target.value.replace(spaces, ' ').trim();

        };

        formMessage.addEventListener('blur', changeOnBlur);
        form2Name.addEventListener('blur', changeOnBlur);
        formNames.forEach(item => {
            item.addEventListener('blur', changeOnBlur);
        });
        formEmails.forEach(item => {
            item.addEventListener('blur', changeOnBlur);
        });
        formPhones.forEach(item => {
            item.addEventListener('blur', changeOnBlur);
        });
    };
    validateInputs();

    //калькулятор
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', (e) => {
            const target = e.target;

            if (target.matches('select') || target.matches('input')) {
                countSum();
            }

        });

    };
    calc();
});