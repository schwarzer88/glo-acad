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
let childIncome = incomeItem[0].childNodes;
let childExpenses = expensesItems[0].childNodes;

let cancel = document.querySelector('#cancel');

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




const AppData = function() {
    this.budget = 0;
    this.income = {};
    this.addIncome = [];
    this.incomeMonth = 0;
    this.expenses = {};
    this.addExpenses = [];
    this.deposit = false;
    this.precentDeposit = 0;
    this.moneyDeposit = 0;
    this.period = 3;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.ExpensesMonth = 0;

};

AppData.prototype.reset = function() {
    budgetMonthValue.value = '';
    budgetDayValue.value = '';
    expensesMonthValue.value = '';
    additionalExpensesValue.value = '';
    additionalIncomeValue.value = '';
    targetMonthValue.value = '';
    incomePeriodValue.value = '';
    salaryAmount.value = '';
    additionalIncomeItem[0].value = '';
    additionalIncomeItem[1].value = '';
    incomeTitle.value = '';
    incomeAmount.value = '';
    expensesTitle.value = '';
    childExpenses[1].value = '';
    childExpenses[3].value = '';
    additionalExpensesIten.value = '';
    targetAmount.value = '';
    childIncome[1].value = '';

    salaryAmount.removeAttribute('readOnly');
    additionalIncomeItem[0].removeAttribute('readOnly');
    additionalIncomeItem[1].removeAttribute('readOnly');
    incomeTitle.removeAttribute('readOnly');
    incomeAmount.removeAttribute('readOnly');
    expensesTitle.removeAttribute('readOnly');
    childExpenses[1].removeAttribute('readOnly');
    childExpenses[3].removeAttribute('readOnly');
    additionalExpensesIten.removeAttribute('readOnly');
    depositAmount.removeAttribute('readOnly');
    depositPercent.removeAttribute('readOnly');
    targetAmount.removeAttribute('readOnly');
    periodAmount.removeAttribute('readOnly');
    periodSelect.removeAttribute('readOnly');
    childIncome[1].removeAttribute('readOnly');
    childIncome[3].removeAttribute('readOnly');
    cancel.removeAttribute('readOnly');

    elemStart.style.display = 'inline-block';
    cancel.style.display = 'none';

};

AppData.prototype.start = function() {
    console.log(this);
    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getBudget();

    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();

    this.getInfoDeposit();
    this.showResult();
    salaryAmount.setAttribute('readOnly', 'readOnly');
    additionalIncomeItem[0].setAttribute('readOnly', 'readOnly');
    additionalIncomeItem[1].setAttribute('readOnly', 'readOnly');
    incomeTitle.setAttribute('readOnly', 'readOnly');
    incomeAmount.setAttribute('readOnly', 'readOnly');
    expensesTitle.setAttribute('readOnly', 'readOnly');
    childExpenses[1].setAttribute('readOnly', 'readOnly');
    childExpenses[3].setAttribute('readOnly', 'readOnly');
    additionalExpensesIten.setAttribute('readOnly', 'readOnly');
    depositAmount.setAttribute('readOnly', 'readOnly');
    depositPercent.setAttribute('readOnly', 'readOnly');
    targetAmount.setAttribute('readOnly', 'readOnly');
    periodAmount.setAttribute('readOnly', 'readOnly');
    periodSelect.setAttribute('readOnly', 'readOnly');
    childIncome[1].setAttribute('readOnly', 'readOnly');
    childIncome[3].setAttribute('readOnly', 'readOnly');

    elemStart.style.display = 'none';
    cancel.style.display = 'inline-block';
};

AppData.prototype.showResult = function() {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.ExpensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSavedMoney();
};
AppData.prototype.addExpensesBlock = function() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    let inputs = cloneExpensesItem.querySelectorAll('input');
    inputs[0].value = '';
    inputs[1].value = '';
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
        expenses.style.display = 'none';
    }
};
AppData.prototype.addIncomeBlock = function() {
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
};
AppData.prototype.getExpenses = function() {
    let _this = this;
    expensesItems.forEach(function(item) {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if (itemExpenses !== '' && cashExpenses !== '') {
            _this.expenses[itemExpenses] = cashExpenses;
        }
    });
};
AppData.prototype.getIncome = function() {
    let _this = this;
    incomeItem.forEach(function(item) {
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if (itemIncome !== '' & cashIncome !== '') {
            _this.income[itemIncome] = cashIncome;
        }
    });

    for (let key in _this.income) {
        _this.incomeMonth += +_this.income[key];

    }

};
AppData.prototype.getAddExpenses = function() {
    let _this = this;
    let addExpenses = additionalExpensesIten.value.split(',');
    addExpenses.forEach(function(item) {
        item = item.trim();
        if (item !== '') {
            _this.addExpenses.push(item);
        };
    });
};
AppData.prototype.getAddIncome = function() {
    additionalIncomeItem.forEach(function(item) {
        let itemValue = item.value.trim();
        if (itemValue !== '') {
            _this.addIncome.push(itemValue);
        }
    });
};
//Функция возвращает Накопления за месяц (Доходы минус расходы)
AppData.prototype.getBudget = function() {
    this.budgetMonth = this.budget + this.incomeMonth - this.ExpensesMonth;
    this.budgetDay = Math.ceil(this.budgetMonth / 30);
};

//Подсчитывает за какой период будет достигнута цель.
AppData.prototype.getTargetMonth = function() {
    return Math.ceil(targetAmount.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function() {
    if (this.budgetDay >= 1200) {
        return ('У вас высокий доход');
    } else if (this.budgetDay >= 600) {
        return ('У вас средний доход');
    } else if (this.budgetDay >= 0) {
        return ('К сожалению у вас доход ниже среднего');
    } else {
        return ('Что то пошло не так');
    }
};
AppData.prototype.getInfoDeposit = function() {
    if (this.deposit) {
        do {
            this.percentDeposit = prompt('Какой у вас годовой процент??', 10);
        }
        while (!isNumber(this.precentDeposit));

        do {
            this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
        while (!isNumber(this.moneyDeposit));
    }
};
AppData.prototype.calcSavedMoney = function() {
    return this.budgetMonth * periodSelect.value;
};
AppData.prototype.getExpensesMonth = function() {
    for (let key in this.expenses) {
        this.ExpensesMonth += (this.expenses[key] * 1);
    }
};
AppData.prototype.eventListeners = function() {
    let _this = this;
    periodSelect.addEventListener('input', function() {
        periodAmount.textContent = periodSelect.value;
        incomePeriodValue.value = _this.calcSavedMoney();
    });
    // periodSelect.AddEventListenet('input', function() {});
    salaryAmount.addEventListener('input', function() {

        elemStart.addEventListener('click', _this.start.bind(_this));
    });
    expenses.addEventListener('click', _this.addExpensesBlock);
    incomePlus.addEventListener('click', _this.addIncomeBlock);
    cancel.addEventListener('click', _this.reset);
}
const appData = new AppData();

appData.eventListeners();
console.log(appData);