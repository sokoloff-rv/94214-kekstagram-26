/**
 * Возвращает случайное целое число из заданного диапазона
 *
 * @param {number} startNumber - Начало диапазона
 * @param {number} finishNumber - Конец диапазона
 *
 * @return {number|string} Случайное число из заданного диапазона | Текст ошибки
 */
function getRandomNumber(startNumber, finishNumber) {
  if (typeof startNumber !== 'number' || typeof finishNumber !== 'number') {
    return 'Некорректный тип аргумента';
  }
  startNumber = Math.ceil(startNumber);
  finishNumber = Math.floor(finishNumber);
  if (startNumber < 0 || finishNumber < 0 || startNumber > finishNumber) {
    return 'Некорректный диапазон';
  }
  return Math.round(Math.random() * (finishNumber - startNumber) + startNumber);
}

/**
 * Проверяет строку на соответствие максимальной длине
 *
 * @param {string} text - Проверяемая строка
 * @param {number} maxLength - Максимальная длина
 *
 * @return {bool|string} true, если длина строки не больше максимальной, false в противном случае | Текст ошибки
 */
function checkLength(text, maxLength) {
  if (typeof text !== 'string' || typeof maxLength !== 'number') {
    return 'Некорректный тип аргумента';
  }
  return text.length <= maxLength;
}

getRandomNumber(1, 10);
checkLength('Hello world', 100);
