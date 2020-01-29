const {expect} = require('chai');

/*
Section 2. Переменные. Урок 5. Чудеса присваивания

Name
Гонорар и благотворительность

Short description
Найдите, сколько денег останется у актера после выплаты налогов и благотворительности

Description
Известный актёр получил гонорар за съемки в фильме в размере 8 млн. долларов.
Из этой суммы 11% ушло на оплату налога, 90% оставшейся суммы гонорара от потратил на благотворительность.
Найдите, сколько денег актер оставил себе.

Создайте переменную `fee` и присвойте ей значение 8000000.
Запишите команду, уменьшающую значение переменной `fee` на 11%.
Запишите команду, уменьшающую полученное значение на 90%.

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:
```
let a = 100;
a = a - a * 0.15; //команда уменьшает значение переменной а на 15 процентов
```
*/

// Solution
let fee = 8000000;
fee = fee * 0.89;
fee = fee * 0.1;

// Tests

it('переменная `fee` существует и имеет значение', () => {
    expect(fee).not.undefined;
});

it('переменная `fee` не является NaN', () => {
    expect(isNaN(fee)).false;
});

it('переменная `fee` имеет тип number', () => {
    expect(fee).a('number');
});

it('переменная `fee` равна 712000', () => {
    expect(fee).equal(712000);
});
