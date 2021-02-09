"use strict";
//a
const elemStart = document.getElementById('start');
//b
const incomePlus = document.getElementsByTagName('button')[0];
const expenses = document.getElementsByTagName('button')[1];
//c
const depositCheck = document.querySelector('#deposit-check');
//d
const additionalIncome = document.querySelectorAll('.additional_income-item');
//выводы(e)
const budgetMonthValue = document.getElementsByClassName('budget_month-value');
const budgetDayValue = document.getElementsByClassName('budget_day-value');
const expensesMonthValue = document.getElementsByClassName('expenses_month-value');
const additionalIncomeValue = document.getElementsByClassName('additional_income-value');
const additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
const incomePeriodValue = document.getElementsByClassName('income_period-value');
const targetMonthValue = document.getElementsByClassName('target+month-value');
//вводы(f)
const salaryAmount = document.querySelector('.salary-amount');
const incomeTitle = document.querySelector('.income-title');
const incomeAmount = document.querySelector('.income-amount');
const additionalIncomeItem = document.querySelector('.additional_income-item');
const expensesTitle = document.querySelector('.expenses-items > .expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');
const additionalExpensesIten = document.querySelector('.additional_expenses-item');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const targetAmount = document.querySelector('.target-amount');
const periodSelect = document.querySelector('.period-select');

console.log(additionalIncomeItemOne);
console.log(additionalIncomeItemTwo);
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

let appData = {
        income: {},
        addIncome: [],
        expenses: {},
        addExpenses: [],
        deposit: false,
        precentDeposit: 0,
        moneyDeposit: 0,
        mission: 1000000,
        period: 3,
        budgetDay: 0,
        budgetMonth: 0,
        ExpensesMonth: 0,
        asking: function() {

            if (confirm('У вас есть доп заработок??')) {
                let itemIncome;
                do {
                    itemIncome = prompt('Какой у вас есть доп заработок?', 'таксую');
                }
                while (isNumber(itemIncome));

                let cashIncome;
                do {
                    cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                }
                while (!isNumber(cashIncome));

                appData.income[itemIncome] = cashIncome;
            }
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'коммуналка, бензин, курсы, еда, сигареты');
            appData.addExpenses = addExpenses.toLowerCase().split(',')
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            let sum1;
            let sum2;
            let exp1;
            let exp2;

            for (let i = 0; i < 2; i++) {
                if (i === 0) {
                    do {
                        exp1 = prompt('Введите обязательную статью расходов?', 'бензин');
                    }
                    while (isNumber(exp1));
                    do {
                        sum1 = prompt('Во сколько это обойдётся?', 1000);
                    }
                    while (!isNumber(sum1));
                    appData.expenses[exp1] = sum1;

                } else if (i === 1) {
                    do {
                        exp2 = prompt('Введите обязательную статью расходов?', 'парковка');
                    }
                    while (isNumber(exp2));

                    do {
                        sum2 = prompt('Во сколько это обойдётся?', 1200);
                    }
                    while (!isNumber(sum2));
                    appData.expenses[exp2] = sum2;
                }

            }
            for (let key in appData.expenses) {
                appData.ExpensesMonth += (appData.expenses[key] * 1);
            }
        },

        //Функция возвращает Накопления за месяц (Доходы минус расходы)
        getBudget: function() {
            appData.budgetMonth = money - appData.ExpensesMonth;
            appData.budgetDay = (appData.budgetMonth / 30);
        },

        //Подсчитывает за какой период будет достигнута цель.
        getTargetMonth: function() {
            let target = Math.ceil(appData.mission / appData.budgetMonth);
            if (target <= 0) {
                console.log('цель не будет достигнута');
            } else {
                console.log('Цель будет достигнута');
                appData.period = target;
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
        getInfoDeposit: function() {
            if (appData.deposit) {
                do {
                    appData.percentDeposit = prompt('Какой у вас годовой процент??', 10);
                }
                while (!isNumber(appData.precentDeposit));

                do {
                    appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
                }
                while (!isNumber(appData.moneyDeposit));
            }
        },
        calcSavedMoney: function() {
            return appData.budgetMonth * appData.period;
        }

    } //appData
appData.asking();
appData.getBudget();
appData.getTargetMonth();
appData.getInfoDeposit();




//выводы функции
console.log('Расходы за месяц ' + appData.ExpensesMonth);
console.log('за ' + appData.period + ' месяцев');
console.log(appData.getStatusIncome());
console.log(appData.addExpenses.join(',').replace(/(^|\s)\S/g, function(a) { return a.toUpperCase() }));
for (let key in appData) {
    console.log(`Наша программа включает в себя данные: ${key}`);
}