const { expect } = require('chai');

/*
Name

Написание даты в американском формате

Description

Создайте переменную `month` и присвойте ей любое число от 1 до 12.
Создайте вторую переменную `day` и присвойте ей любое число от 1 до 31.
Создайте третью переменную `year` и присвойте ей любое четырехзначное число.
Создайте четвертую переменную `date`, который объединит первые три переменные в одну строку
(Убедитесь, что первые две переменные отделены друг от друга символом «/».)
Создайте пятую переменную `dateLength`, которая покажет длину переменной `date`.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const hours = 1;
const minutes = 24;
const seconds = 2020;
const combinedString = hours + ':' + minutes + ':' + seconds;
const lengthOfCombinedString = combinedString.length;
```
*/

// Solution
const month = 1;
const day = 24;
const year = 2020;
const date =  month + '/' +  day + '/' + year;
const dateLength = date.length;

// Tests
it('Переменная `month` содержит значение', () => {
  expect(month).not.undefined;
});
it('Переменная `month` содержит число', () => {
  expect(month).a('number');
});
it('Переменная `month` меньше или равна 12',()=>{
  expect(month).lte(13);
});
it('Переменная `month` больше 0',()=>{
  expect(month).gte(1);
});
it('Переменная `day` содержит значение', () => {
  expect(day).not.undefined;
});
it('Переменная `day` содержит число', () => {
  expect(day).a('number');
});
it('Переменная `day` меньше или равна 31',()=>{
  expect(day).lte(31);
});
it('Переменная `day` больше 0',()=>{
  expect(day).gte(1);
});
it('Переменная `year` содержит значение', () => {
  expect(year).not.undefined;
});
it('Переменная `year` содержит число', () => {
  expect(year).a('number');
});
it('Переменная `year` меньше 10000',()=>{
  expect(year).lte(9999);
});
it('Переменная `year` больше 0',()=>{
  expect(year).gte(1);
});
it('Переменная `date` содержит значение', () => {
  expect(date).not.undefined;
});
it('Переменная `date` содержит строку', () => {
  expect(date).a('string');
});

it('Переменная `date`имеет символ \'/\'',()=>{
  expect(date).to.satisfy(function forwardSlash(date) {
    let result = 0;
    for(let i = 0; i < date.length; i++){
      if(date[i] === '/'){
        result++;
      }
    }
    return result === 2
});
});

it('Переменная `dateLength` содержит значение', () => {
  expect(dateLength).not.undefined;
});
it('Длина переменной `dateLength` меньше или равна 10',()=>{
  expect(dateLength).lte(10);
});
it('Переменная `dateLength` больше 8',()=>{
  expect(dateLength).gte(8);
});
it('Переменная `dateLength` содержит число', () => {
  expect(dateLength).a('number');
});