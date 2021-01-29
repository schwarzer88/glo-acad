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

console.log(addExpenses.toLowerCase().split(','));

let budgetDay = money / 30;
console.log(budgetDay);