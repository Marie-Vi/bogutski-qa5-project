const { expect } = require('chai');

//Name
//Составить строку

//Description
//Создайте переменную `word1` и запишите в нее слово 'Life'
//Создайте переменную `word2` и запишите в нее слово 'is'
//Создайте переменную `word3` и запишите в нее слово 'good!'
//Создайте переменную `myGoal` строчного типа и запишите в результат конкатенации (склеивания) трех предыдущих переменных.

// Приведем пример, который принципиально похож на то что нужно сделать,
// но адаптируйте его к требованиям задачи

// ```
// const before = "Be";
// const after = "Happy!";
// const together = before + ' ' + after;
// ```;


//Solution
const word1 = 'Life';
const word2 = 'is';
const word3 = 'good!';
const myGoal = word1 + ' '  + word2 + ' ' +  word3;

//Tests
it('Переменная `word1` существует и содержит значение', () => {
    expect(word1).not.to.be.undefined;
});

it('Переменная `word2` существует и содержит значение', () => {
    expect(word2).not.to.be.undefined;
});

it('Переменная `word3` существует и содержит значение', () => {
    expect(word3).not.to.be.undefined;
});

it('Значение переменной `word1` - строка', () => {
    expect(word1).a('string');
});

it('Значение переменной `word2` - строка', () => {
    expect(word2).a('string');
});

it('Значение переменной `word2` - строка', () => {
    expect(word3).a('string');
});

it('Переменная `myGoal` содержит значение `Life is good!`', () => {
    expect(myGoal).eq('Life is good!');
});



