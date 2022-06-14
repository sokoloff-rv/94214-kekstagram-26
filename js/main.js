/**
 * Возвращает случайное целое число из заданного диапазона
 *
 * @param {number} startNumber - Начало диапазона
 * @param {number} finishNumber - Конец диапазона
 *
 * @return {number|string} Случайное число из заданного диапазона или текст ошибки
 */
function getRandomNumber(startNumber, finishNumber) {
  if (typeof startNumber !== 'number' || typeof finishNumber !== 'number') {
    return 'Некорректные аргументы функции';
  }
  startNumber = Math.ceil(startNumber);
  finishNumber = Math.floor(finishNumber);
  if (startNumber < 0 || finishNumber < 0 || startNumber > finishNumber) {
    return 'Некорректный диапазон';
  }
  return Math.round(Math.random() * (finishNumber - startNumber) + startNumber);
}

getRandomNumber(1, 10);
