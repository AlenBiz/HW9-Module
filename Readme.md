Шаг 1: Инициализация проекта в терминале VS Code командой npm init (считаем, что пакетный менеджер npm уже скачен)
Шаг 2: Заполнение данных о проекте непосредственно в терминале или пропускаем шаги и потом в файле package.json
Основные поля:
"name"
"description"
"repository"
"keywords"
"author"
Шаг 3: Создаем файл со скриптом раcширением js
Шаг 4: Устанавливаем фреймфорк Jest через терминал командой npm install --save-dev jest
Шаг 5: Редактируем package.json для запуска из командной строки "script":{"test":"jest"}
Шаг 5: Создаем файл с тестами для файла с шага 3 с тем же названиием и обязательным .test.js или .cpec.js
Шаг 6: В файле с Шага 3 экспортируем функцию, в файле с шага 5 импортируем функцию для тестирования
Шаг 7: Прописываем тестовые проверки, используя правильный синтаксис и matchers
Шаг 8: Запускаем тесты командой npm run test и наслаждаемся позитивными отчетами и исправляем негативные )


