
/*
Name
Переменная с названием red color
Description
Создайте переменную 'red' и присвойте ей значение 'color'.
Приведем пример, который принципиально похож на то что нужно сделать:
```
const  green  = 'Crayon';
```
*/

// Solution
const  red =  'Color';

// Tests
it('переменная "red" существует',  () => {
    expect(red).not.undefined;
});

it('переменная "red" является строкой',  () => {
    expect(red).a('string');
});

it('переменная "red" содержит название цвет карандаш "Color", () => {
    expect(red).eq('Color')
});

