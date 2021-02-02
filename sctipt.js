"use strict";

let money = 40000;
let income = 'freelance';
let addExpenses = 'Еда, Бензин, Сигареты';
let deposit = true;
let mission = 1000000;
let period = 12;
money = +prompt('Ваш месячный доход?', 40000);
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммуналка, бензин');
deposit = confirm('Есть ли у вас депозит в банке?');
let expenses1 = prompt('Введите обязательную статью расходов?', 'сигареты');
let amount1 = +prompt('Во сколько это обойдется?', 1000);
let expenses2 = prompt('Введите обязательную статью расходов?', 'парковка');
let amount2 = +prompt('Во сколько это обойдется?', 1000);
let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);
let budgetDay = (accumulatedMonth / 30);



//Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth() {
    let sum = amount1 + amount2;
    return sum;
}

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    let accum = money - getExpensesMonth();
    return accum;
}

//Подсчитывает за какой период будет достигнута цель.
let getTargetMonth = function() {
    let target = Math.ceil(mission / accumulatedMonth);
    return target;
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
console.log('Расходы за месяц ' + getExpensesMonth());
console.log(addExpenses.toLowerCase().split(','));
console.log('за ' + mission / getTargetMonth() + ' месяцев');
console.log('бюджет в день ' + budgetDay);
console.log(getStatusIncome());