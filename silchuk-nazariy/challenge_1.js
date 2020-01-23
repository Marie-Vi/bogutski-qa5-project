const { expect } = require('chai');

/*
Name
Переменная с названием Породы Собаки

Description:

Создайте переменную `petBreed` и присвойте ей значение `Poodle`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:

```
const petBreed = 'Rottweiler'
```

*/

// Solution
const petBreed = 'Poodle';

// Tests

it('Переменная `petBreed` содержит значение', () => {
    expect(petBreed).not.undefined;
});

it('Переменная `petBreed` содержит строку', () => {
    expect(petBreed).a('string');
});

it('Переменная `petBreed` содержит `Poodle`', () => {
    expect(petBreed).eq('Poodle');
});

