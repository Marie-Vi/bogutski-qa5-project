const { expect } = require('chai');

/*
Name
Больше, чем предыдущая в 7 раз.

Description

Создайте переменную `level1` и присвойте ей любое число от -10 до -5.
Создайте вторую переменную `levelUp`, которая будет использовать
значение переменной `level1`, то есть переменная `levelUp` будет в 7 раз больше чем `level1`

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = -2;
const after = before * 4;
```
*/

// Solution
let string = 'What’s up?';

function sentReverse(str){
  let rev = '';
  if (str === '') return 'Warning: strReverse dosnt work with empty string';
  if (str.length === 1) return str;
  for(let i = 0; i < str.length; i++){
    rev = str[i] + rev;
  }
  return rev;
}
console.log(sentReverse(string));

// Tests
const expected = '?pu s’tahW';

  it('empty string should return Warning message', () => {
    expect(sentReverse('')).equal('Warning: strReverse dosnt work with empty string');
  });

  it('should reverse worlds in sentence', () => {
    expect(sentReverse(string)).equal(expected);
  });
