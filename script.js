const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const nameBooks = document.querySelectorAll('a');
const uls = document.querySelectorAll('ul');

//изменил фон
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//удалил рекламу
adv.remove();

//изменил порядок книг
books.prepend(book[1]);
books.append(book[2]);
book[4].after(book[3]);


//изменил название 3 книги
nameBooks[4].textContent = 'Книга 3. this и Прототипы Объектов';


//исправил во второй книге порядок глав
uls[0].childNodes[7].after(uls[0].childNodes[13]);
uls[0].childNodes[10].before(uls[0].childNodes[17]);
uls[0].childNodes[19].after(uls[0].childNodes[5])


//исправил в пятой книге порядок глав
uls[5].childNodes[5].before(uls[5].childNodes[19]);
uls[5].childNodes[14].before(uls[5].childNodes[6]);
uls[5].childNodes[16].after(uls[5].childNodes[11]);

//добавил 8 главу в 6 книгу
let eight = uls[5].childNodes[16].cloneNode();
eight.textContent = 'Глава 8: За пределами ES6';
uls[2].childNodes[17].after(eight);