# PNV
Eng version

Сделать:

1. На инпутах с именем и телефоном написать достаточный, но не перегруженный паттерн.

Помни, что фамилия может быть двойной. (Иван Хуев-Кукуев)

Помни, что телефон может быть с произвольным количеством цифр, с префиксом страны, со скобками, дефисами, пробелами и так далее. Типа, +38 (80 80) 30-0 35-30

2. Вернуть перемешивалку иконок бонусов по рефрешу страницы тупо.

3. Раскури, как подключить https://github.com/mfranzke/datalist-polyfill. И подключи

4. (Опять) переделать блок выбора страны, я там name в data-... перекинул

5. Перечекать ВЕСЬ ордер. Я его по просьбе ильи весь переделал

6. Репозиторий почему-то стал весить 200 мегосов. Это никуда не годится

7. Обязательно глянь заинлайненный код в индексе. Ищи по слову "всратокод". Это штука, которую я придумал, чтобы высирать детали заказа. +++ Туда еще надо вкусы делать, но мне было лень

Мне сравнительно ясно, что листенер надо вешать не на форму, а на каждый инпут (чтоб не проверять всё при любом нажатии). И в то же время ясно, что проверки нужно корячить более-менее для каждого инпута отдельно. Скажем, размер должен быть checked, country - из предложенных вариантов, postal code - числовой, имейлы - совпадать и тэдэ. Нутыпонел.

8. В country нужно проверять соответствие введенного со списком стран

9. Придумать, что делать в случае, если человек все вкусы "не хочу" поставил

10. Кинуть перемешивалку на иконки бонусов, логотипы и выбиралку вкусов (пусть при рефреше каждый раз по-разному стоит). Но лого и выбиралка - по желанию, погоды не делает

11. И го все-таки в анимацию бонусов чо-то типа

let bonusItems = картинки с бонусами;
let bonusItemsArr = [];

for (i = 0; i < bonusItems.length; i++) {
  bonusItemsArr[i] = bonusItems[i].classList;
}

а в анимации делать bonusItemsArr[i].toggle('...');

Я подозреваю, что это лучше по 2 причинам:

Можно уменьшать-увеличивать количество картинок без ебли с проставлением айдишников.

Есть ощущуние, что getElementById + classList при каждом обращении может быть дороже, чем просто toggle из уже умеющихся объектов и классов.

12. Да, го анимацию бонусов через .children.length. Не то я вот 2 дрипки добавил - и хуй сосу сижу

13. Зацени собакена в футере (это обязательно)
