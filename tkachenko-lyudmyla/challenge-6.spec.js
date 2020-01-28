const { expect } = require('chai');

//Name
//Создание строки

//Description
//Создайте переменную `myGoal` типа строка и запишите в нее следующее значение: Eat. Sleep. Code.

// Приведем пример, который принципиально нe похож на то что нужно сделать:
//const car = tractor;

//Solution
const myGoal = "Eat. Sleep. Code.";

// Tests
it('Переменная `myGoal` существует и содержит значение', () => {
    expect(myGoal).not.to.be.undefined;
});

it('Значение переменной `myGoal` - строка', () => {
    expect(myGoal).a('string');
});

it('Переменная `myGoal`содержит значение `Eat. Sleep. Code.`', () => {
    expect(myGoal).eq('Eat. Sleep. Code.');
});

