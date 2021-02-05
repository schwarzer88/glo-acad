"use strict";

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
let money = 0;

let start = function() {
    do {
        money = prompt('Ваш месячный доход?', 40000);
    }
    while (!isNumber(money));
}

start();
console.log(money);

// let exp1;
// let exp2;

let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        mission: 1000000,
        period: 3,
        budgetDay: 0,
        budgetMonth: 0,
        ExpensesMonth: 0,
        asking: function() {
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммуналка, бензин');
            appData.addExpenses = addExpenses.toLowerCase().split(',')
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let sum1;
            let sum2;
            let exp1;
            let exp2;

            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    exp1 = prompt('Введите обязательную статью расходов?', 'сигареты');
                    do {
                        sum1 = prompt('Во сколько это обойдётся?', 1000);
                    }
                    while (!isNumber(sum1));
                    appData.expenses[exp1] = sum1;

                } else if (i === 1) {
                    exp2 = prompt('Введите обязательную статью расходов?', 'бензин');
                    do {
                        sum2 = prompt('Во сколько это обойдётся?', 1200);
                    }
                    while (!isNumber(sum2));
                    appData.expenses[exp2] = sum2;
                }

            }
            for (var key in appData.expenses) {
                appData.ExpensesMonth += (appData.expenses[key] * 1);
            }
        },

        //Функция возвращает Накопления за месяц (Доходы минус расходы)
        getBudget: function() {
            appData.budge tMonth = money - appData.ExpensesMonth;
            appData.budgetDay = (appData.budgetMonth / 30);
        },

        //Подсчитывает за какой период будет достигнута цель.
        getTargetMonth: function() {
            let target = Math.ceil(appData.mission / appData.accumulatedMonth);
            if (target <= 0) {
                console.log('цель не будет достигнута');
            } else {
                console.log('Цель будет достигнута');
                return target;
            }
        },
        getStatusIncome: function() {
            if (appData.budgetDay >= 1200) {
                return ('У вас высокий доход');
            } else if (appData.budgetDay >= 600) {
                return ('У вас средний доход');
            } else if (appData.budgetDay >= 0) {
                return ('К сожалению у вас доход ниже среднего');
            } else {
                return ('Что то пошло не так');
            }
        },

    } //appData
console.log(appData);
appData.asking();


//выводы функцииappData
console.log('доход в месяц ' + appData.budgetMonth);
console.log('Расходы за месяц ' + appData.ExpensesMonth);
console.log('за ' + appData.getTargetMonth() + ' месяцев');
console.log('бюджет в день ' + appData.budgetDay);
console.log(appData.getStatusIncome());