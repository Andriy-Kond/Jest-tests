// передаємо рік. Функція повертає true якщо рік високосний, і false, якщо ні.
const isLeapYear = year => {
  if (year === undefined) {
    // треба писати на початку, бо інакше не спрацює - спрацюють інші перевірки і повернуть помилку перевірки
    throw new Error('year must be exist');
  }

  if (typeof year !== 'number') {
    throw new Error('year must be number type');
  }

  if (!Number.isInteger(year)) {
    throw new Error('year must be integer');
  }

  if (year < 42) {
    throw new Error('year must be 42 or more');
  }

  const date = new Date(year, 2, 0); // нульовий день березня поверне дату "останній день лютого" тобто 28.02 чи 29.02
  const days = date.getDate(); // поверне останній день лютого, тобто кількість днів у місяці (28 чи 29)
  return 29 === days;
};

module.exports = isLeapYear;
