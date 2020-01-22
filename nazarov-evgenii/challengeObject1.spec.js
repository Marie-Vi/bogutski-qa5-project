const { expect } = require('chai');

/*
Name
Общежития Иркутского Государственного Университета

Description
В ИГУ есть много разных общежитий, у каждого факультета свое. Нам нужно описать три самых больших из них.
Данные о первом общежитии (dorm1)
department -> law;
number of students -> 360;
address -> downtown;
availability for new students -> false;

Данные о втором общежитии (dorm2)
department -> history;
number of students -> 240;
address -> east side;
availability for new students -> false;

Данные о третьем общежитии (dorm3)
department -> economics;
number of students -> 680;
address -> west side;
availability for new students -> true;

Ваша задача создать три объекта dorm1, dorm2 и dorm3 и поместить в них указанные данные. Не забывайте использовать
CamelCase для записи имен переменных и ключей, состоящих из нескольких слов.

Приведем пример, который принципиально похож на то что нужно сделать:
```
const dorm = {
    department:'math',
    numberOfStudents: 90,
    address: 'somewhere',
    availabilityForNewStudents: true
};

```

*/

// Solution
const dorm1 = {
    department:'law',
    numberOfStudents: 360,
    address: 'downtown',
    availabilityForNewStudents: false
};

const dorm2 = {
    department:'history',
    numberOfStudents: 240,
    address: 'east side',
    availabilityForNewStudents: false
};

const dorm3 = {
    department:'economics',
    numberOfStudents: 680,
    address: 'west side',
    availabilityForNewStudents: true
};


// Tests
describe('testing dorm1', ()=> {
    it('переменная dorm1 должа хранить тип данных объект',  () => {
        expect(dorm1).a('object')
    });

    it('у объекта dorm1 должно быть 4-е ключа',  () => {
        expect(Object.keys(dorm1).length).to.be.equal(4)
    });

    it('should keys and its values be equal to a task data',  () => {
        expect(dorm1).to.include({
            department:'law',
            numberOfStudents: 360,
            address: 'downtown',
            availabilityForNewStudents: false
        })
    });
});


describe('testing dorm2', ()=> {
    it('переменная dorm1 должа хранить тип данных объект',  () => {
        expect(dorm2).a('object')
    });

    it('у объекта dorm2 должно быть 4-е ключа',  () => {
        expect(Object.keys(dorm2).length).to.be.equal(4)
    });

    it('should keys and its values be equal to a task data',  () => {
        expect(dorm2).to.include({
            department:'history',
            numberOfStudents: 240,
            address: 'east side',
            availabilityForNewStudents: false
        })
    });
});

describe('testing dorm3', ()=> {
    it('переменная dorm3 должа хранить тип данных объект',  () => {
        expect(dorm3).a('object')
    });

    it('у объекта dorm3 должно быть 4-е ключа',  () => {
        expect(Object.keys(dorm3).length).to.be.equal(4)
    });

    it('should keys and its values be equal to a task data',  () => {
        expect(dorm3).to.include({
            department:'economics',
            numberOfStudents: 680,
            address: 'west side',
            availabilityForNewStudents: true
        })
    });
});

