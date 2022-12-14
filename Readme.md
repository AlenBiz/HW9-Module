## Запуск проекта и первых тестов
- **Шаг 1:** Инициализация проекта в терминале VS Code командой ```npm init``` (считаем, что пакетный менеджер **npm** уже скачен)
- **Шаг 2:** Заполнение данных о проекте непосредственно в терминале или пропускаем шаги и потом в файле package.json
>Основные поля:
>"name"
>"description"
>"repository"
>"keywords"
>"author"
- **Шаг 3:** Создаем рабочий файл со скриптом раcширением js
- **Шаг 4:** Устанавливаем фреймфорк **Jest** через терминал командой ```npm install --save-dev jest```
- **Шаг 5:** Редактируем package.json для запуска из командной строки "script":{"test":"jest"}
- **Шаг 5:** Создаем файл с тестами для файла с шага 3 с тем же названиием и расширением .test.js или .cpec.js
- **Шаг 6:** В файле с Шага 3 экспортируем функцию, в файле с шага 5 импортируем функцию для тестирования
- **Шаг 7:** Прописываем тестовые проверки, используя правильный синтаксис и [matchers](https://jestjs.io/docs/using-matchers)
- **Шаг 8:** Запускаем тесты командой ```npm run test``` и наслаждаемся позитивными отчетами и исправляем негативные )
---
## Coverage
- **Шаг 9:** По [ссылке](https://www.npmjs.com/package/babel-plugin-istanbul) скачиваем плагин для оценки покрытия кода
- **Шаг 10:** Устанавливаем плагин в терминале командой ```npm install --save-dev babel-plugin-istanbul``` и проверяем в файле package.json появление новой зависимости ![Картинка](https://i.postimg.cc/yYCg6ZH4/2022-11-11-7.png)
- **Шаг 10:** Запускаем проверку покрытия командой ```npx jest --coverage```
- **Шаг 11:** Получаем в терминале результат проверки
![Картинка](https://i.postimg.cc/4xBm12hs/2022-11-10-4.png)
- **Шаг 12:** Откроем подробный отчет в браузере
![Картинка](https://i.postimg.cc/FsbfYHrf/2022-11-11-4.png)
- **Шаг 13:** Рассмотрим подробный отчет 
>Покрытие ```100% Functions 1/1``` - в коде одна функция и она проверена
>Покрытие ```100% Branches 2/2``` - в функции условие на ИЛИ -это образовывает две ветки
>Покрытие ```100% Lines 5/5``` - весь код из 5 строк -линий 
![Картинка](https://i.postimg.cc/52xXLWys/2022-11-11-2.png)

в readme добавить описание работы вашего проекта, его запуск и настройку для будущих коллег, а также инфо относительно измерения покрытия в вашем проекте - что измеряете, как настраивать и запускать.
