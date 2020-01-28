const {expect} = require('chai');

/*
Section 2. Переменные. Урок 4. Что в имени тебе моем?

Name
Выбор имени переменной

Description
Мы придумываем имя своему ребенку, кличку домашнему питомцу, прозвище начальнику...
Программисты и тестировщики придумывают еще имена переменным.
А теперь давайте выберем имена, которые можно использовать в качестве имен переменных.

Для выполнения задания вы должны создать переменные с именами, которые можно использовать в языке JS.

Создайте переменные с допустимыми именами из следующего списка:
greenColor; 12month; _; amount; first_page; $50; const; null; camelCase; chapter-1.
Присвойте всем созданным переменным значение 1.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let pencil = 1;
let redBook = 1;
```
*/

// Solution
let greenColor = 1;
let  _ = 1;
let amount = 1;
let first_page = 1;
let $50 = 1;
let camelCase = 1;

// Tests

it('переменная `greenColor` существует и имеет тип number', () => {
    expect(greenColor).a('number');
});

it('переменная `greenColor` равна 1', () => {
    expect(greenColor).eq(1);
});

it('переменная `_` существует и имеет тип number', () => {
    expect(_).a('number');
});

it('переменная `_` равна 1', () => {
    expect(_).eq(1);
});

it('переменная `amount` существует и имеет тип number', () => {
    expect(amount).a('number');
});

it('переменная `amount` равна 1', () => {
    expect(amount).eq(1);
});

it('переменная `first_page` существует и имеет тип number', () => {
    expect(first_page).a('number');
});

it('переменная `first_page` равна 1', () => {
    expect(first_page).eq(1);
});

it('переменная `$50` существует и имеет тип number', () => {
    expect($50).a('number');
});

it('переменная `$50` равна 1', () => {
    expect($50).eq(1);
});

it('переменная `camelCase` существует и имеет тип number', () => {
    expect(camelCase).a('number');
});

it('переменная `camelCase` равна 1', () => {
    expect(camelCase).eq(1);
});
