const { expect } = require('chai');

/*
Name
Обезьянье дерево

Description
Живя в Нью-Мексико, штате который является достаточно жарким вы решили посадить в своем саду какое то
экзотическое дерево, но что бы дерево хорошо прижилось, необходимо собрать как можно больше информаци о нем
Итак вы решили что это будет Баобаб:

Баобаб - дно из самых толстых деревьев в мире: диаметр ствола достигает 9 м при высоте 18 - 25 м.
Растение характерно для саванн тропической Африки: Западная, Северо-Восточная, Центральная и Южная Африка.
Эфиопская версия происхождения предполагает перевод названия как "обезьянье дерево" - из-за повальной страсти
к плодам местных обезьян - павианов. В арабском же варианте - "баобаб"
("bu hubab") означает плод с множественными семенами.
Растение характерно для саванн тропической Африки: Западная, Северо-Восточная, Центральная и Южная Африка.
Для многих само упоминание о баобабе непременно ассоциируется со знаменитым произведением Сент-Экзюпери,
в котором герой пытался спасти свою планету от корней сих могучих растений, которые постепенно разрушали ее.


Итак
Приведем пример, который принципиально похож на то что нужно сделать,
но адаптируйте его к требованиям задачи:
```
const tree = 'Baobab tree';
```
*/

// Solution
const tree = 'Baobab tree';

// Tests

it('Переменная `tree` существует и содержит значение', () => {
    expect(tree).not.undefined;
});

it('Переменная `tree` тип данных string', () => {
    expect(tree).a('string');
});

it('Переменная `tree` содержит значение `Baobab`', () => {
    expect(tree).eq('Baobab tree');
});

