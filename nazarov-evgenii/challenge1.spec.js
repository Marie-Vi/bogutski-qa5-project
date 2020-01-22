const { expect } = require('chai');

/*
Name
Секретный адрес PASV.us

Description
Секретный офис школы PASV.us расположен по адресу 'Pentagon, USA' Создайте переменную pasvSecretAddress и
присвойте ей тайный адрес школы PASV.us

*/

// Solution
const pasvSecretAddress = 'Pentagon, USA';



// Tests
it('переменная pasvSecretAddress существует',  () => {
    expect(pasvSecretAddress).not.undefined;
});

it('переменная pasvSecretAddress одержил строковый тип данных',  () => {
    expect(pasvSecretAddress).a('string');
});

it('переменная pasvSecretAddress одержит значение Pentagon, USA',  () => {
    expect(pasvSecretAddress).eq('Pentagon, USA');
});