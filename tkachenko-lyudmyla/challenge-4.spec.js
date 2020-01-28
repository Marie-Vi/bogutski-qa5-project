const { expect } = require('chai');

/*Name
Лабораторная работа. Деление студентов на группы

Description
Для выполнения лабораторной работы необходимо сделать: описание документации,
написание программы, создание тестов, тестирование.

Учитель поделил студентов на группы. Сколько студентов будет в каждой группе?

Создайте переменную `students` и присвойте ей значение 32
Создайте переменную `groups` и присвойте ей значение 4 (количество групп)
Создайте переменную `oneGroup` и верните результат: сколько студентов будет в каждой группе?

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи

```
const participants = 90;
const OneTable = 10;
const tables = participants / OneTable;
```;*/

//Solution
const students = 32;
const groups = 4;
const oneGroup = students / groups;

// Tests
it('Переменная `students` существует и содержит значение', () => {
    expect(students).not.to.be.undefined;
});

it('Переменная `groups` существует и содержит значение', () => {
    expect(groups).not.to.be.undefined;
});

it('Значение переменной `students`- число', () => {
    expect(students).a('number');
});

it('Значение переменной `groups` больше 0', () => {
    expect(groups).gt(0);
});

it('Значение переменной `groups` - число', () => {
    expect(groups).a('number');
});

it('Результат переменной `oneGroup` равен числу 8', () => {
    expect(oneGroup).eq(8);
});
