'use strict';

// Не знаю, правильно ли сделал, но все алерты закоментил, чтобы Вас не донимали)

// ================ Task 1 ===================

//пример 1
let a = 1, b = 1, c, d;
c = ++a; // Мы присваиваем в переменную "с" значение переменной "а" и + префексную форму инкремента
// alert(c); // ответ: 2

//пример 2
d = b++; // Мы присваиваем в переменную "d" значение переменной "b" и + постфиксную форму инкремента
// alert(d); //ответ: 1

//пример 3
c = 2 + ++a; // Переменную "с" мы перезаписываем, в первом примере мы увеличиваем переменную "а" на 1 (а = 2)
             // и в этом примере еще раз увеличиваем на 1 (а = 3), что в итоге даёт такой результат.
// alert(c); //ответ: 5

//пример 4
d = 2 + b++; // На момент исполнения кода "b" = 2, + постфиксный инкремент который не повлияет в момент исполнения
// alert(d); //ответ: 4

// Результаты alert'ov' логичны, в виду кода выще
// alert(a); //3
// alert(b); //3


// ================ Task 2 ===================

let a1 = 2;
let x = 1 + (a1 *= 2); // Тут переменная "а1" перезаписывается а1 *= 2 === (а1 = а1 * 2), в итоге а1 = 4;
// Следовательно х = 5


// ================ Task 3 ===================

let a2 = Number(getRandomInt(100, -100));
let b2 = Number(getRandomInt(100, -100));

function getRandomInt(max, min) {
  return (Math.random() * (max - min) + min).toFixed();
}

function findPosNumber(arg1, arg2) {
  let result;

  if (arg1 > 0 && arg2 > 0) {
    result = Math.max(arg1, arg2) - Math.min(arg1, arg2);
    console.log(`Разность чисел : ${result}`)
    return result;
  }
  if (arg1 < 0 && arg2 < 0) {
    result = Math.max(arg1, arg2) * Math.min(arg1, arg2);
    console.log(`Произведение чисел : ${result}`)
    return result;
  }
  if (arg1 < 0 && arg2 > 0 || arg1 > 0 && arg2 < 0) {
    result = Math.max(arg1, arg2) + Math.min(arg1, arg2);
    console.log(`Сумма чисел : ${result}`)
    return result;
  }
}

findPosNumber(a2, b2);


// ================ Task 4 ===================

function summary(a, b) {
  return a + b;
}

function deduct(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

// ================ Task 5 ===================

/**
 * Функция принимает аргументы и выполняет опрецарию указанную в opt
 * @param { number } arg1
 * @param { number } arg2
 * @param { string } opt
 * @returns { number }
 */

function calc(arg1, arg2, opt) {
  switch (opt) {
    case '+':
      return summary(arg1, arg2);
    case '-':
      return deduct(arg1, arg2);
    case '/':
      return divide(arg1, arg2);
    case '*':
      return multiply(arg1, arg2);
    default:
      alert('Укажите корректную операцию');
  }
}

console.log(calc(7, 3, '*'));

// ================ Task 6 ===================

// let openNewDeposit = prompt("Сумма?");  // не привожу явно к строке, т.к. результатов prompt будет строка.


/**
 * Функция формирует правильное окончание "рубль/ля/лей" положеных на депозит денег
 * @param { string } arg получаем через промпт
 * @returns { string } Строка суммы депозита с правильным окончанием
 */

function howToSay(arg) {
  switch (arg.charAt(arg.length - 1)){
    case '1':
    console.log('Ваша cумма в ' + arg + ' рубль успешно зачислена!');
    break;
    case '2':
    case '3':
    case '4':
      console.log('Ваша cумма в ' + arg + ' рубля успешно зачислена!');
      break;
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      console.log('Ваша cумма в ' + arg + ' рублей успешно зачислена!');
      break;
    default:
      console.log('Мы принимаем только деньги!');
  }
}

// howToSay(openNewDeposit);
