const { expect } = require('chai');

/*
Name
Лучший сотрудник года
Тема: Тип данных String (Строка)

Description

Создайте переменную `bestEmployeeQ4` и присвойте ей значение 'Malik Amirov Junior is the best employee of Q4 2019.'.
Создайте переменную `employee` и присвойте ей значение 'Malik Amirov Junior'.
Проверьте, что имя сотрудника, присвоенное переменной `employee` упоминается в значении переменной `bestEmployeeQ4` как лучший сотрудник 4го квартала 2019 года.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const decentCandidate2019 = 'Employee Name is the most decent person in XX century';
const person = 'Name';
decentCandidate2019.includes(person) == true;

```
*/

// Solution
let bestEmployeeQ4='Malik Amirov Junior is the best employee of Q4 2019.';
let employee='Malik Amirov Junior';
bestEmployeeQ4.includes(employee)==true;

// Tests

it('Переменная bestEmployeeQ4 существует и ему присвоено значение', () => {
  expect(bestEmployeeQ4).not.undefined;
});

it('Переменная `employee` существует и ему присвоено значение', () => {
  expect(employee).not.undefined;
});

it('Переменная `b`estEmployeeQ4` содержит тип данных String', () => {
  expect(bestEmployeeQ4).a('String');
});

it('Переменная `employee` содержит тип данных String', () => {
  expect(employee).a('String');
});

it('Переменная `bestEmployeeQ4` содержит значение переменной `employee`', () => {
  expect(bestEmployeeQ4).include(employee);
});