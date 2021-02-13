"use strict";
//a
let elemStart = document.getElementById('start');
//b
let incomePlus = document.getElementsByTagName('button')[0];
let expenses = document.getElementsByTagName('button')[1];
//c
let depositCheck = document.querySelector('#deposit-check');
//d
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');
//выводы(e)
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];
//вводы(f)
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-items > .expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesIten = document.querySelector('.additional_expenses-item');
let depositAmount = document.querySelector('.deposit-amount');
let depositPercent = document.querySelector('.deposit-percent');
let targetAmount = document.querySelector('.target-amount');
let periodAmount = document.querySelector('.period-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItem = document.querySelectorAll('.income-items');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}



let appData = {
        budget: 0,
        income: {},
        addIncome: [],
        incomeMonth: 0,
        expenses: {},
        addExpenses: [],
        deposit: false,
        precentDeposit: 0,
        moneyDeposit: 0,
        period: 3,
        budgetDay: 0,
        budgetMonth: 0,
        ExpensesMonth: 0,
        start: function() {

            appData.budget = +salaryAmount.value;

            appData.getExpenses();
            appData.getIncome();
            appData.getBudget();

            appData.getExpensesMonth();
            appData.getAddExpenses();
            appData.getAddIncome();

            appData.getInfoDeposit();
            appData.showResult();
        },
        showResult: function() {
            budgetMonthValue.value = appData.budgetMonth;
            budgetDayValue.value = appData.budgetDay;
            expensesMonthValue.value = appData.ExpensesMonth;
            additionalExpensesValue.value = appData.addExpenses.join(', ');
            additionalIncomeValue.value = appData.addIncome.join(', ');
            targetMonthValue.value = appData.getTargetMonth();
            incomePeriodValue.value = appData.calcSavedMoney();
        },
        addExpensesBlock: function() {
            let cloneExpensesItem = expensesItems[0].cloneNode(true);
            let inputs = cloneExpensesItem.querySelectorAll('input');
            console.log(inputs[0].value);
            inputs[0].value = '';
            inputs[1].value = '';
            expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expenses);
            expensesItems = document.querySelectorAll('.expenses-items');
            if (expensesItems.length === 3) {
                expenses.style.display = 'none';
            }
        },
        addIncomeBlock: function() {
            let cloneIncomeItem = incomeItem[0].cloneNode(true);
            let inputs = cloneIncomeItem.querySelectorAll('input');
            console.log(inputs[0].value);
            inputs[0].value = '';
            inputs[1].value = '';
            incomeItem[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
            incomeItem = document.querySelectorAll('.income-items');
            if (incomeItem.length === 3) {
                incomePlus.style.display = 'none'
            }
        },
        getExpenses: function() {
            expensesItems.forEach(function(item) {
                let itemExpenses = item.querySelector('.expenses-title').value;
                let cashExpenses = item.querySelector('.expenses-amount').value;
                if (itemExpenses !== '' && cashExpenses !== '') {
                    appData.expenses[itemExpenses] = cashExpenses;
                }
            });
        },
        getIncome: function() {
            incomeItem.forEach(function(item) {
                let itemIncome = item.querySelector('.income-title').value;
                let cashIncome = item.querySelector('.income-amount').value;
                if (itemIncome !== '' & cashIncome !== '') {
                    appData.income[itemIncome] = cashIncome;
                }
            });

            for (let key in appData.income) {
                appData.incomeMonth += +appData.income[key];

            }

        },
        getAddExpenses: function() {
            let addExpenses = additionalExpensesIten.value.split(',');
            addExpenses.forEach(function(item) {
                item = item.trim();
                if (item !== '') {
                    appData.addExpenses.push(item);
                };
            });
        },
        getAddIncome: function() {
            additionalIncomeItem.forEach(function(item) {
                let itemValue = item.value.trim();
                if (itemValue !== '') {
                    appData.addIncome.push(itemValue);
                }
            });
        },
        //Функция возвращает Накопления за месяц (Доходы минус расходы)
        getBudget: function() {
            appData.budgetMonth = appData.budget + appData.incomeMonth - appData.ExpensesMonth;
            appData.budgetDay = Math.ceil(appData.budgetMonth / 30);
        },

        //Подсчитывает за какой период будет достигнута цель.
        getTargetMonth: function() {
            return Math.ceil(targetAmount.value / appData.budgetMonth);
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
            return appData.budgetMonth * periodSelect.value;
        },
        getExpensesMonth: function() {
            for (let key in appData.expenses) {
                appData.ExpensesMonth += (appData.expenses[key] * 1);
            }
        }
    } //appData

periodSelect.addEventListener('input', function() {
    periodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcSavedMoney();
});



// periodSelect.AddEventListenet('input', function() {});
salaryAmount.addEventListener('input', function() {
    elemStart.addEventListener('click', appData.start);
});

const expensesInputs = expensesItems[0].querySelectorAll('input');
expensesInputs[0].addEventListener('keydown', function(e) {
    if (/[^а-яА-ЯёЁ .,!;:'"`-]/i.test(this.value)) { this.value = ''; }
});

expensesInputs[1].addEventListener('keydown', function(event) {
    if (/[^1-90]/i.test(this.value)) { this.value = ''; }
});

expenses.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);



//выводы функции
// console.log('за ' + appData.period + ' месяцев');

// console.log(appData.addExpenses.join(',').replace(/(^|\s)\S/g, function(a) { return a.toUpperCase() }));
// for (let key in appData) {
//     console.log(`Наша программа включает в себя данные: ${key}`);
// }