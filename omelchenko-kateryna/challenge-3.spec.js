const {expect} = require('chai');

/* Name
 Переменная с именем знаменитости

/* Description
Создайте переменную `name` и присвойте ей значение 'Brad Pitt'.

Приведем пример, который принципиально похож на то, что нужно сделать.
Адаптируйте его к требованиям задачи.

```
const name = 'Michael Jordan';
```

Solution
 */
const name = 'Brad Pitt';

// Tests

it('Переменная `name` существует и содержит значение', () => {
    expect(name).not.undefined;
});

it('Переменная `name` содержит тип данных string', () => {
    expect(name).a('string');
});

it('Переменная `name` принимает значение "Brad Pitt" ', () => {
    expect(name).eq('Brad Pitt');
});


