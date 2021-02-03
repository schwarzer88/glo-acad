"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




let money;
let income = 'freelance';
let addExpenses = 'Еда, Бензин, Сигареты';
let deposit = true;
let mission = 1000000;
let period = 12;
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммуналка, бензин');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1;
let expenses2;



let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 40000);
    }
    while (!isNumber(money));
}

start();


//Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth() {
    let sum1;
    let sum2;

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'сигареты');
            do {
                sum1 = prompt('Во сколько это обойдётся?', 1000);
            }
            while (!isNumber(sum1));
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'бензин');

            do {
                sum2 = prompt('Во сколько это обойдётся?', 1000);
            }
            while (!isNumber(sum2));
        }

    }
    console.log((sum1 * 1) + (sum2 * 1));
    return (sum1 * 1) + (sum2 * 1);
}

let expensesAmount = getExpensesMonth();

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    let accum = money - expensesAmount;
    return accum;
}
//выводы функции
let accumulatedMonth = getAccumulatedMonth();
console.log('доход в месяц ' + accumulatedMonth);
let budgetDay = (accumulatedMonth / 30);

//Подсчитывает за какой период будет достигнута цель.
let getTargetMonth = function() {
    let target = Math.ceil(mission / accumulatedMonth);
    if (target <= 0) {
        console.log('цель не будет достигнута');
    } else {
        console.log('Цель будет достигнута');
        return target;
    }
}

let showTypeOf = function(data) {
    return data, typeof(data);
}

let getStatusIncome = function() {
    if (budgetDay >= 1200) {
        return ('У вас высокий доход');
    } else if (budgetDay >= 600) {
        return ('У вас средний доход');
    } else if (budgetDay >= 0) {
        return ('К сожалению у вас доход ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
}


console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));
console.log('Расходы за месяц ' + expensesAmount);
console.log(addExpenses.toLowerCase().split(','));
console.log('за ' + getTargetMonth() + ' месяцев');
console.log('бюджет в день ' + budgetDay);
console.log(getStatusIncome());