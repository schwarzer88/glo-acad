let money = 40000;
let income = 'freelance';
let addExpenses = 'Еда, Бензин, Сигареты';
let deposit = true;
let mission = 1000000;
let period = 12;

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log(addExpenses.length);

console.log('период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' долларов');

console.log(addExpenses.toLowerCase().split(','));

let budgetDay = money / 30;
console.log(budgetDay);

//Урок 3

money = +prompt('Ваш месячный доход?');
addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у вас депозит в банке?');

expenses1 = prompt('Введите обязательную статью расходов?');
amount1 = +prompt('Во сколько это обойдется?', '100');
expenses2 = prompt('Введите обязательную статью расходов?');
amount2 = +prompt('Во сколько это обойдется?', '100');


//Высчитываем месячный бюджет
let budgetMonth = +money - (amount1 + amount2);
console.log('бюджет за месяц ' + budgetMonth);


//высчитываем, сколько месяцев надо, чтобы достигнуть цели.
console.log('за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

budgetDay = Math.floor(budgetMonth / 30);
console.log('бюджет в день ' + budgetDay);

if (budgetDay >= 1200) {
    console.log('У вас высокий доход');
} else if (budgetDay >= 600) {
    console.log('У вас средний доход');
} else if (budgetDay >= 0) {
    console.log('К сожалению у вас доход ниже среднего');
} else {
    console.log('Что то пошло не так');
}