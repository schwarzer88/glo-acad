"use strict";

import countTimer from './modules/countTimer';
import getScroll from './modules/getScroll';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import validateInputs from './modules/validateInputs';
import dataAttribute from './modules/dataAttribute';
import calc from './modules/calc';
import sendForm from './modules/sendForm';
import sendFormModal from './modules/sendFormModal';
import sendFormFooter from './modules/sendFormFooter';

//timer
countTimer('1 july 2019');
//плавная прокрутка
getScroll();
//Меню
toggleMenu();
//popup
togglePopUp();
//tabs
tabs();
//слайдер
slider();
//Валидация
validateInputs();
//Наша команда
dataAttribute();
//калькулятор
calc();
//send-ajax-form
sendForm();
//ajax-modal
sendFormModal();
//ajax-footer
sendFormFooter();