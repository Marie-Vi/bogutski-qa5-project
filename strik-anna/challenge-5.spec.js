const { expect } = require('chai');

/*
Course Name: Javascript Syntax
Section Name: `Функции, циклы, цикл for`

Упражнение на использование циклов

Description

На курсе по программированию в одной известной школе программирования, у каждого студента есть кнопка "I need help"
на счету пользователя в секции `Дневные отчеты`. Эту кнопку студент должен нажимать только в крайнем случае,
когда он чувствует, что совсем отстает от курса, давно ничего не понимает, и близок к тому, чтобы бросить обучение.
Нажатие этой кнопки сигнализирует руководителю курса, что необходимо срочно принимать действия по реанимации студента,
а если таких нажатий имеется несколько от разных студентов, то вероятно придется и адаптировать программу или какие-то
 составляющие курса.
Данная информация поступает руководителю раз в день в виде отдельного массива данных, в подобном виде:
['No click', 'No click', 'I need help', 'No click', 'I need help'].
Каждый элемент массива представляет собой статус кнопки `I need help` в дневном отчете отдельного ученика.
Количество элементов в массиве все время разнится, поскольку каждый день студентами заполняется разное
количество дневников.
Давайте поможем руководителю курса обрабатывать данную информацию, чтобы своевременно оказывать помощь
нуждающимся студентам.
Напишите функцию alertVictor, которая принимает данный массив `array` как аргумент,
считает количество элементов `I need help` и возвращает:
- сообщение `So far so good!` если в массиве нет ни одного элемента `I need help`,
- сообщение `Alert! Escalate someone to help!` если количество элементов `I need help` в массиве равно 1,
- сообщение `Alert! Alert! I've got a bad feeling about this!` если количество элементов `I need help` в массиве от 2-ух до 3-ех,
- сообщение `Alert! Alert! Alert! May the force be with you, Victor!` если количество элементов `I need help` в массиве более 3-ех.

Приведем пример, который принципиально похож на то, что нужно сделать, но адаптируйте его к требованиям задачи:
```
function countLetters(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i].length >= 5) count++;
  }
  if (count >= 5) return 'Lots of long words';
    else return 'A little of long words';
}
```
*/

// Solution:
function alertVictor(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] === 'I need help') count++;
  }
  if (count === 0) return 'So far so good!';
  else if (count === 1) return 'Alert! Escalate someone to help!';
  else if (count >= 2 && count <= 3) return 'Alert! Alert! I\'ve got a bad feeling about this!';
  else return 'Alert! Alert! Alert! May the force be with you, Victor!';
}

// Tests

it('Тип данных возвращаемого результата является строкой', () => {
  expect(alertVictor(['No click', 'No click', 'I need help', 'No click'])).a('string');
});

it('Работает правильно при количестве подходящих элементов равном 0', () => {
  expect(alertVictor(['No click', 'No click', 'No click'])).eq('So far so good!');
});

it('Работает правильно при количестве подходящих элементов равном 1', () => {
  expect(alertVictor(['No click', 'No click', 'I need help', 'No click'])).
  eq('Alert! Escalate someone to help!');
});

it('Работает правильно при количестве подходящих элементов равном 2', () => {
  expect(alertVictor(['No click', 'No click', 'I need help', 'No click', 'I need help'])).
  eq('Alert! Alert! I\'ve got a bad feeling about this!');
});

it('Работает правильно при количестве подходящих элементов равном 3', () => {
  expect(alertVictor(['No click', 'No click', 'I need help', 'I need help', 'I need help'])).
  eq('Alert! Alert! I\'ve got a bad feeling about this!');
});

it('Работает правильно при количестве подходящих элементов больше 3-ех', () => {
  expect(alertVictor(['No click', 'I need help', 'No click', 'I need help', 'No click', 'I need help', 'I need help'])).
  eq('Alert! Alert! Alert! May the force be with you, Victor!');
});

it('Возвращаемый результат `So far so good!` если в аргументе пустой массив', () => {
  expect(alertVictor([])).eq('So far so good!');
});