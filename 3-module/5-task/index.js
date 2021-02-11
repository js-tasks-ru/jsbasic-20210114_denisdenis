/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  // Пустой результирующий массив
  let resultArr = [];

  // Рразбиваем строку по разделителям (на массив с вложенным массивом)
  let arr = str
  .split(',')
  .map(item => item.includes(' ') ? item.split(' ') : item);

  // Перебираем полученный массив (с вложенным массивом) на возможность получить число, если возможно - добавляем в результирующий массив
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let i of item) {
        if (isFinite( parseFloat(i) )) resultArr.push( parseFloat(i) );
      }
    } else {
      if (isFinite( parseFloat(item) )) resultArr.push( parseFloat(item) );
    }
  }

  // Возвращаем объект с min и max
  return {
    min: resultArr.reduce((min, item) => min > item ? item : min),
    max: resultArr.reduce((max, item) => max < item ? item : max)
  };

}
