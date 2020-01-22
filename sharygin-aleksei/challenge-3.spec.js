const { expect } = require('chai');

/*
Name
Переменная с фамилией космонавта.

Description

Наш герой был первым человеков, побывавшим в космосе.
Его исторический полёт, прогремевший на весь мир, был совершён 12-го апреля 1961-го года.
Создайте переменную 'lastName' с фамилией этого человека.

```
Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const firstName = 'Yuri"
```
*/

// Solution
const lastName = 'Gagarin';


// Tests
it('Переменная `lastName` существует.', () => {
    expect(lastName).not.undefined;
});

it('Переменная `lastName` содержит строку.', () => {
    expect(lastName).a('string');
});

it('Переменная `lastName` содержит значение `Gagarin`.', () => {
    expect(lastName).eq("Gagarin")
});
