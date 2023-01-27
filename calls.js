// С точки зрения SOLID можно объявление класса и вызовы его методов (файл js.js)
// разнести по разным файлам. Здесь - вызов методов, объявление класса в class.js.


const conditioner = new Device('conditioner').turnedOn('кондиционер', true, 10);
const freezer = new Device('freezer').turnedOn('морозилка', false, 4);

// Результат работы - при запуске calls.html