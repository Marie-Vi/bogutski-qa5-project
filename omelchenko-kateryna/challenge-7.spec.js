const {expect} = require('chai');

/* Name
Multiply Piroshki


 Description
Серый Волк украл у Красной Шапочки пирожки, которые она несла для Бабушки.
Он ел по 5 пирожков в день на протяжении 3-х дней.
Сколько было пирожков изначально?

Создайте переменную `piroshkiPerDay` и присвойте ей значение 5.
Создайте переменную `days` и присвойте ей значение 3.
Создайте переменную `originalPiroshki` и посчитайте сколько было пирожков изначально.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const dumplingsPerDay = 7;
const days = 4;
const originalDumplings = dumplingsPerDay * days;
```

Solution
 */
const piroshkiPerDay = 5;
const days = 3;
const originalPiroshki = piroshkiPerDay * days;

// Tests

it('Переменная `piroshkiPerDay` существует и содержит значение', () => {
    expect(piroshkiPerDay).not.undefined;
});

it('Переменная `piroshkiPerDay` содержит тип данных number', () => {
    expect(piroshkiPerDay).a('number');
});

it('Переменная `piroshkiPerDay` принимает значение "false" ', () => {
    expect(piroshkiPerDay).eq(5);
});

it('Переменная `days` существует и содержит значение', () => {
    expect(days).not.undefined;
});

it('Переменная `days` содержит тип данных number', () => {
    expect(days).a('number');
});

it('Переменная `days` принимает значение 3 ', () => {
    expect(days).eq(3);
});

it('Переменная `originalPiroshki` существует и содержит значение', () => {
    expect(originalPiroshki).not.undefined;
});

it('Переменная `originalPiroshki` содержит тип данных number', () => {
    expect(originalPiroshki).a('number');
});

it('Переменная `originalPiroshki` принимает значение 15 ', () => {
    expect(originalPiroshki).eq(15);
});


