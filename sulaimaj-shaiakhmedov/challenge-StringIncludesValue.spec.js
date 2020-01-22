const { expect } = require('chai');

/*
Name
Лучший сотрудник 4го квартала года

Description

Создайте переменную `bestEmployeeQ4` и присвойте ей значение 'Malik Amirov Junior is the best employee of Q4 2019.'.
Создайте переменную `employee` и присвойте ей значение 'Malik Amirov Junior'.
Проверьте, что значение переменной `bestEmployeeQ4` содержит значение переменной `employee`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const decentCandidate2019='Employee Name is the most decent person in XX century';
const person = 'Name';

```
*/

// Solution
let bestEmployeeQ4='Malik Amirov Junior is the best employee of Q4 2019.';
let employee='Malik Amirov Junior';

// Tests

it('Переменная bestEmployeeQ4 существует и имеет значение', () => {
  expect(bestEmployeeQ4).not.undefined;
});

it('Переменная employee существует и имеет значение', () => {
  expect(employee).not.undefined;
});

it('Переменная bestEmployeeQ4 содержит тип данных String', () => {
  expect(bestEmployeeQ4).a('String');
});

it('Переменная bestEmployeeQ4 содержит значение переменной employee', () => {
  expect(bestEmployeeQ4).include('Malik Amirov Junior');
});


