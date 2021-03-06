const { expect } = require('chai');

/*
Name
Создание переменной со значением Infinity

Description
Вселенная бесконечна... Время бесконечно...  Как понять и осознать бесконечность?
Создайте переменную `inf` и присвойте ей значение выражения со значением "+бесконечность"
Для этого выражение должно содержать деление произвольного числа на ноль.

Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const before = 1;
const after = before / 0;
```
*/

// Solution
const inf = 1 / 0;

// Tests

  it('тип переменной `inf`- число',  () => {
    expect(inf).a('number');
  });

  it('переменная `inf` содержит значение', () => {
    expect(inf).not.undefined;
  });

   it('переменная `inf` равна Infinity',  () => {
    expect(inf).equal(Infinity);
  });





