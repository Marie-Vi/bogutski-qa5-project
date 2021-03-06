const { expect } = require('chai');

/*
Course Name: Javascript Practice
Section Name: Основные конструкции JavaScript -> Оператор выбора switch

Упражнение на использование оператора switch.
Такая же задача уже была в Javascript syntax, но там она решалась через if else.
Здесь надо повторить ее решение, используя switch.

Description

Как известно, в Америке имеются значительные перебои с производством детской одежды,
поэтому некоторые семьи продолжают привозить одежду из России.
Дети растут быстро и, чтобы выяснить какой размер покупать, бабушка детей звонит маме и уточняет рост дорогих внуков.
Ей бы очень помогла программа, которая выдавала бы ей правильный размер в зависимости от введенного роста ребенка.
Давайте ей поможем.
Напишите функцию `checkSize`, которая принимает рост `height`, как аргумент, и возвращает размер ребенка.
Таблица размеров такова:
Размер	Рост, см
XS	    116-126
S	    127-137
M	    138-142
L	    143-148
XL	    149-155
Если заданный рост выходит за пределы этой таблицы, это значит, что бабушка ошиблась
и зашла во взрослый отдел одежды (или младенческий), тогда функция должна возвращать `Wrong department`.

Решение должно быть сделано на этот раз через оператор выбора switch. If else пожалуйста не используйте,
на это будет проверка в тестах.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```
function checkPrice (age) {
    switch (true){
        case (age >= 5 && age <= 12):
            return 15;
        case (age >= 13 && age <= 65):
            return 30;
        case (age >= 65):
            return 10;
        default:
            return 'free';
    }
}
```
*/
// Solution:
function checkSize (height) {
    switch (true){
        case (height >= 116 && height <= 126):
            return 'XS';
        case (height >= 127 && height <= 137):
            return 'S';
        case height >= 138 && height <= 142:
            return 'M';
        case height >= 143 && height <= 148:
            return 'L';
        case height >= 149 && height <= 155:
            return 'XL';
        default:
            return 'Wrong department';
    }
}
// Tests

it('Функция работает правильно при нижнем граничном значении XS', () => {
    expect(checkSize(116)).eq('XS');
});

it('Функция работает правильно при верхнем граничном значении XS', () => {
    expect(checkSize(126)).eq('XS');
});

it('Функция работает правильно при нижнем граничном значении S', () => {
    expect(checkSize(127)).eq('S');
});

it('Функция работает правильно при верхнем граничном значении S', () => {
    expect(checkSize(137)).eq('S');
});

it('Функция работает правильно при нижнем граничном значении M', () => {
    expect(checkSize(138)).eq('M');
});

it('Функция работает правильно при верхнем граничном значении M', () => {
    expect(checkSize(142)).eq('M');
});

it('Функция работает правильно при нижнем граничном значении L', () => {
    expect(checkSize(143)).eq('L');
});

it('Функция работает правильно при верхнем граничном значении L', () => {
    expect(checkSize(148)).eq('L');
});

it('Функция работает правильно при нижнем граничном значении XL', () => {
    expect(checkSize(149)).eq('XL');
});

it('Функция работает правильно при верхнем граничном значении XL', () => {
    expect(checkSize(155)).eq('XL');
});

it('Функция работает правильно за нижним пределом таблицы на граничном значении', () => {
    expect(checkSize(115)).eq('Wrong department');
});

it('Функция работает правильно за верхним пределом таблицы на граничном значении', () => {
    expect(checkSize(156)).eq('Wrong department');
});

it('Тип данных возвращаемого результата является строкой', () => {
    expect(checkSize(130)).a('string');
});

it('Возвращаемый результат содержит значение если аргумент null', () => {
    expect(checkSize(null)).not.undefined;
});

it('Возвращаемый результат содержит значение если аргумента нет', () => {
    expect(checkSize()).not.undefined;
});

it('Включает оператор switch', () => {
    expect(checkSize.toString().includes('switch') && checkSize.toString().includes('case')).to.be.true;
});

it('Не включает оператор if else', () => {
    expect(checkSize.toString().includes('if') && checkSize.toString().includes('else')).to.be.false;
});
