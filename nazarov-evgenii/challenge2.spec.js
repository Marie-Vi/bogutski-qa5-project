const { expect } = require('chai');

/*
Name
Отряд мушкеретов

Description

Наш отряд состоит из трех самых известных мушкеров и одного. Вам нужно создать три переменные и присвоить им имена
мушкеторов.

Первого мушкетера (переменная firstMusketeer) зовут Athos,
второго мушкетера (переменная secondMusketeer) зовут Portos,
третьего мушкетера (переменная thirdMusketeer) зовут Aramis

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const musketeerName = 'D'Artagnan';

```

*/

// Solution
const firstMusketeer = 'Athos';
const secondMusketeer = 'Portos';
const thirdMusketeer = 'Aramis';



// Tests
describe('Проверяем переменную firstMusketeer', () => {
    it('переменная firstMusketeer должна существовать',  () => {
        expect(firstMusketeer).not.undefined;
    });

    it('переменная firstMusketeer должна содержать строковый тип данных',  () => {
        expect(firstMusketeer).a('string');
    });

    it('значение переменной firstMusketeer должна быть Athos',  () => {
        expect(firstMusketeer).eq('Athos');
    });
})

describe('Проверяем переменную secondMusketeer', () => {
    it('переменная secondMusketeer должна существовать',  () => {
        expect(secondMusketeer).not.undefined;
    });

    it('переменная secondMusketeer должна содержать строковый тип данных',  () => {
        expect(secondMusketeer).a('string');
    });

    it('значение переменной secondMusketeer должна быть Portos',  () => {
        expect(secondMusketeer).eq('Portos');
    });
})

describe('Проверяем переменную thirdMusketeer', () => {
    it('переменная thirdMusketeer должна существовать',  () => {
        expect(thirdMusketeer).not.undefined;
    });

    it('переменная thirdMusketeer должна содержать строковый тип данных',  () => {
        expect(thirdMusketeer).a('string');
    });

    it('значение переменной thirdMusketeer должна быть Aramis',  () => {
        expect(thirdMusketeer).eq('Aramis');
    });
})

