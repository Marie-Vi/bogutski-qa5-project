const { expect } = require('chai');

/*
Name
Можешь ли ты сегодня играть на iPad?

Description

У тебя очень строгие родители, которые установили правило:
Ты можешь играть на планшете, только если оценка по математике удовлетворительная и все домашние задания выполнены.

Создайте переменную `grade` и присвойте ей значение true (оценка удовлетворительная) или false (оценка неудовлетворительная).
Создайте переменную `isHomeworkDone` и присвойте ей значение true (все домашние задания выполнены) или false (домашние задания не выполнены).
Создайте переменную `canIPlay` присвойте ей условие проверки доступа к планшету.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const isStudent = true;  // это ученик
const isWorkday = true;  // сегодня рабочий день
const schoolTime = isAdult && isWeekend;  //true - идет в школу
```

 */

// Solution
const grade = true;
const isHomeworkDone = true;
const canIPlay = grade && isHomeworkDone;


// Tests

it('Переменная `grade` существует и имеет значение', () => {
    expect(grade).not.undefined;
});

it('Переменная `isHomeworkDone` существует и имеет значение', () => {
    expect(isHomeworkDone).not.undefined;
});

it('Переменная `grade` содержит тип данных boolean', () => {
    expect(grade).a('boolean');
});

it('Переменная `isHomeworkDone` содержит тип данных boolean', () => {
    expect(isHomeworkDone).a('boolean');
});

it('Переменная `canIPlay` существует и имеет значение', () => {
    expect(canIPlay).not.undefined;
});

it('Переменная `canIPlay` содержит тип данных boolean', () => {
    expect(canIPlay).a('boolean');
});

it('Переменная `canIPlay` содержит верный результат', () => {
    const expected = grade && isHomeworkDone;
    expect(canIPlay).eq(expected);
});