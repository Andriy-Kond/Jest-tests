// Тести є модульні (тестують певний модуль/функцію), інтеграційні і UI.

// Jest шукає всі файли, що закінчуються на ".test.js" імпортує всі свої функції/інструменти (describe, test, expect, it, beforeAll, afterAll і т.і.) і запускає ці файли
// Можна створити окрему теку для тестів, але робити файл поруч з тим, що тестується легше, бо банально легше імпортувати в новий файл зі старого, бо вони на одному рівні
// У package.json має бути скріпт: "test": "jest"

// Спочатку пишемо вимоги до функції, а потім набір тестових даних, які будуть перевіряти всі можливі ситуації

/* Вимоги:
1. Given integer (aункція отримує ціло число).
2. Return true is year is leap or false if not.
3. If given not valid argument throw error with message (якщо функція нічого не отримує, або отримує не правильний тип даних, то має викинути помилку з інформативним текстом - з указанням в чому саме помилка.)

Тести:
01. Якщо рік ділиться на 4 без залишку, то він високосний. 2008 - true
02. Якщо рік НЕ ділиться на 4 без залишку, то він НЕ високосний. 2003 - false
03. Якщо рік ділиться на 4 і на 100, то він не високосний. 1900 - false
04. Якщо рік ділиться на 4, на 100 і на 400, то він високосний. 2000 - true

Високосні роки рахують від 42 року н.е., коли відбулась реформа календаря. 
05. Якщо передано значення менше ми не зможемо порахувати. 41 - error "year must be 42 or more"
06. Передали число з комою. 2008.4 - error "year must be integer"
07. Передали пусте значення. () - error "year must be exist"
Передали інший тип даних:
08.  "2008" - error "year must be number"
09.  null - error "year must be number"
10.  true - error "year must be number"
11.  false - error "year must be number"
12.  () => {} - error "year must be number"
13.  [] - error "year must be number"
14.  {} - error "year must be number"

*/

const isLeapYear = require('./isLeapYear');

// тести починаються з ф-ції describe, яка створює групу тестів. Перший арг - назва, другий - тести
describe('test isLeapYear function', () => {
  // test() (або it()) - окремий тест. Перший арг - назва, другий - функція, що робить тест
  test('2008 - true', () => {
    // Тест робиться просто: викликається функція, передаються якісь дані, вона повертає результат.
    const result = isLeapYear(2008);
    // І треба цей результат порівняти з правильною відповіддю. Це робиться так:
    expect(result).toBe(true);
    /* Як працює вбудована у Jest функція expect
    const expect = restult => {
      return {
        result,
        toBe(value) {
          return this.result === value;
        },
        ... інші ф-ції перевірки
      };
    };
    */
  });
  test('2003 - false', () => {
    expect(isLeapYear(2003)).toBe(false);
  });
  test('1900 - false', () => {
    expect(isLeapYear(1900)).toBe(false);
  });
  test('2000 - true', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  // 1) Якщо ф-я викине помилку, то вона прилетить не у expect, а у test. Тому ми маємо огорнути її у коллбек.
  // 2) Помилка це об'єкт new Error. При перевірці об'єктів завжди буде false. Тому маємо використати toTrow(), який перевіряє чи взагалі викинуло помилку і далі перевіряє message помилки і дивиться чи збігається він з тим, що йому дали.
  test('41 - error "year must be 42 or more"', () => {
    expect(() => isLeapYear(41)).toThrow('year must be 42 or more');
  });
  test('2008.4 - error "year must be integer"', () => {
    expect(() => isLeapYear(2008.4)).toThrow('year must be integer');
  });
  test('() - error "year must be exist"', () => {
    expect(() => isLeapYear()).toThrow('year must be exist');
  });

  test('"2008" - error "year must be number type"', () => {
    expect(() => isLeapYear('2008')).toThrow('year must be number type');
  });
  test('null - error "year must be number type"', () => {
    expect(() => isLeapYear(null)).toThrow('year must be number type');
  });
  test('true - error "year must be number type"', () => {
    expect(() => isLeapYear(true)).toThrow('year must be number type');
  });
  test('false - error "year must be number type"', () => {
    expect(() => isLeapYear(false)).toThrow('year must be number type');
  });
  test('() => {} - error "year must be number type"', () => {
    expect(() => isLeapYear(() => {})).toThrow('year must be number type');
  });
  test('[] - error "year must be number type"', () => {
    expect(() => isLeapYear([])).toThrow('year must be number type');
  });
  test('{} - error "year must be number type"', () => {
    expect(() => isLeapYear({})).toThrow('year must be number type');
  });
});
