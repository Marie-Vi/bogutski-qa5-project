const { expect } = require('chai');

/*
Reverce String


Description

Создайте переменную `phrase` и присвойте ей свою любимую фразу, идиому или пословицу на английском.
Создайте фуникцию разворачивающую строку. Не исползуйте методы. Строка не должна быть пустой.
В случае пустой строки функция должна возвращать предупреждение: 'Warning: empty string!'


Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = "The early bird catches the worms";
const after = 'smrow eht sehctac drib ylrae ehT';
```
*/

// Solution
const phrase = 'What’s up?';

function sentReverse(str) {
  let rev = '';
  if (str === '') return 'Warning: empty string!';
  if (str.length === 1) return str;
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }
  return rev;
}


// Tests

let expected = phrase.split('').reverse().join('');

it('Переменная "phrase" явлется string', () => {
  expect(phrase).a('String');
});

it('empty string should return Warning message', () => {
  expect(sentReverse('')).equal('Warning: empty string!');
});

it('should reverse worlds in sentence', () => {
  expect(sentReverse(phrase)).equal(expected);
});
