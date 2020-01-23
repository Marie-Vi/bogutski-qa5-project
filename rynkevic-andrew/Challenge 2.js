const {expect} = require('chai');

/*
Сергей Владимирович Михалков перевел на русский язык, сказку Три поросенка. Создайте переменные поросят и присвойте
им Имена главных героев сказки. Создайте переменную `characters` и присвойте ей имена всех вышеупомянутых персонажей (используйте метод конкатенации)

Приведем пример, который принципиально похож на то, что нужно сделать,
но адаптируйте его к требованиям задачи:

```
const gnome = "Happy"

```
 */

//Solution

const character = 'characterName';

//Tests

const pigOne = 'Nif-Nif';
const pigTwo = 'Nuf-Nuf';
const pigThree = 'Naf-Naf';
const characters = 'Nif-Nif' + ' ' + 'Nuf-Nuf' + ' ' + 'Naf-Naf'

it('Переменная `pigOne` существует и ей присвоено значение', () => {
    expect(pigOne).not.undefined;
});

it('Переменная `pigTwo` существует и ей присвоено значение', () => {
    expect(pigTwo).not.undefined;
});

it('Переменная `pigThree` существует и ей присвоено значение', () => {
    expect(pigThree).not.undefined;
});


it('Переменная `pigOne` отвечает типу `string`', () => {
    expect(pigOne).a('string');
});

it('Переменная `pigTwo` отвечает типу `string`', () => {
    expect(pigTwo).a('string');
});

it('Переменная `pigThree` отвечает типу `string`', () => {
    expect(pigThree).a('string');
});


it('Переменной `pigOne` присвоено значение `Nif-Nif` ', () => {
    expect(pigOne).eq('Nif-Nif');
});

it('Переменной `pigTwo` присвоено значение `Nuf-Nuf` ', () => {
    expect(pigTwo).eq('Nuf-Nuf');
});

it('Переменной `pigThree` присвоено значение `Naf-Naf` ', () => {
    expect(pigThree).eq('Naf-Naf');
});

it('Создайте переменную `characters` и присвойте ей имена всех вышеупомянутых персонажей (используйте метод конкатенации)',  () => {
    expect(characters).eq('Nif-Nif' + ' ' + 'Nuf-Nuf' + ' ' + 'Naf-Naf')
});