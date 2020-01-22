const { expect } = require('chai');

/*
Name
Секретный адрес PASV.us

Description
Секретный офис школы PASV.us расположен по адресу 'Pentagon, USA' Создайте переменную pasvAddress и
присвойте ей тайный адрес школы PASV.us

*/

// Solution
const pasvAddress = 'Pentagon, USA';



// Tests
it('переменная pasvAddress существует',  () => {
    expect(pasvAddress).not.undefined;
});

it('переменная pasvAddress одержил строковый тип данных',  () => {
    expect(pasvAddress).a('string');
});

it('переменная pasvAddress одержит значение Pentagon, USA',  () => {
    expect(pasvAddress).eq('Pentagon, USA');
});