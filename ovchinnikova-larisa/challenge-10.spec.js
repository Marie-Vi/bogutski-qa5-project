const {expect} = require('chai');

/*
Section 6. Логические операторы.  Урок "ИЛИ ||"

Name
To be or not to be?

Description
"To be, or not to be,
that is the question..."  (William Shakespeare, Hamlet).

Создайте переменную  с именем `toBe` и присвойте ей значение true.
Создайте переменную  с именем `notToBe` и присвойте ей значение false.
Создайте переменную  с именем `answer` и присвойте ей результат применения логической операции ИЛИ к данным переменным.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const isAdult = true;
const isStudent = false;
const result = isAdult || isStudent;
```
*/

// Solution
const toBe = true;
const notToBe = false;
const answer = toBe || notToBe;

// Tests

it('переменная `toBe` существует и имеет значение', () => {
    expect(toBe).not.undefined;
});

it('значение переменной `toBe` является boolean', () => {
    expect(toBe).a('boolean');
});

it('значение переменной `toBe` равно true', () => {
    expect(toBe).equal(true);
});

it('переменная `notToBe` существует и имеет значение', () => {
    expect(notToBe).not.undefined;
});

it('значение переменной `notToBe` является boolean', () => {
    expect(notToBe).a('boolean');
});

it('значение переменной `notToBe` равно false', () => {
    expect(notToBe).equal(false);
});

it('переменная `answer` существует и имеет значение', () => {
    expect(answer).not.undefined;
});

it('значение переменной `answer` является boolean', () => {
    expect(answer).a('boolean');
});

it('значение переменной `answer` верно', () => {
    expect(answer).equal(toBe||notToBe);
});






