'use strict';

// ==================== Task 1 =================

/**
 * Функция легкой валидации входящиего числа
 * @param { number } arg Число, которое будет проходить проверку
 * @returns {boolean}
 */
function checkNum(arg) {
  if (isNaN(arg) || arg > 999 || arg <= 0) return true;
  return false;
}


/**
 * Функция преобразовывает входящее число в объект, деля на единицы,десятые и сотые;
 * @param { number } num
 * @returns { object } Возвращяем преобразованый объект
 */
function numberToObj(num) {

  let objectFromNum = {
    units: null,
    tens: null,
    hundreds: null,
  };
  let str = String(num);

  if (checkNum(num)) {
    alert('Need an integers from 0 to 999!');
    return;
  }

  if (str.length === 3) {  // Мне не нравится такая проверка, хотелось бы более лаконичнее
    objectFromNum.units = str.split('')[2];
    objectFromNum.tens = str.split('')[1];
    objectFromNum.hundreds = str.split('')[0];
  }
  if (str.length === 2) {
    objectFromNum.units = str.split('')[1];
    objectFromNum.tens = str.split('')[0];
    objectFromNum.hundreds = 0;
  }
  if (str.length === 1) {
    objectFromNum.units = str.split('')[0];
    objectFromNum.tens = 0;
    objectFromNum.hundreds = 0;
  }

  return objectFromNum;
}

console.log(numberToObj(385));

// ==================== Task 1.1 =================

// ==================== ES5 ======================

function ProductES5(name, price) {
  this.name = name;
  this.price = price;
}

ProductES5.prototype.make25PercentDiscount = function() {
  this.price = this.price - (this.price * 0.25);
}

const prodES5 = new ProductES5('phoneES5', 105);

prodES5.make25PercentDiscount();
console.log(prodES5);

// ==================== ES6 ======================

class ProductES6 {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    this.price = this.price - (this.price * 0.25);
  }
}

const prodES6 = new ProductES6('phoneES6', 106);
prodES6.make25PercentDiscount();
console.log(prodES6);


// ==================== Task 1.2 =================

const currentDate = `${new Date().getDate()}.0${new Date().getMonth() + 1}.${new Date().getFullYear()}`;

// ==================== ES5 ======================

function PostES5(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

PostES5.prototype.edit = function (text) {
  this.text = text;
}

const postES5 = new PostES5('ClarkES5', 'Some textES5', currentDate);
console.log(postES5);


function AttachedPostES5(author, text, date) {
  PostES5.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = AttachedPostES5;

AttachedPostES5.prototype.makeTextHighlighted = function() {
  this.highlighted = true;
}

const postAttachedES5 = new AttachedPostES5('KentES5', 'More some textES5', currentDate);
console.log(postAttachedES5);

// ==================== ES6 ======================

class PostES6 {
  constructor(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
  }

  edit (text) {
    this.text = text;
  }
}

const postES6 = new PostES6('ClarkES6', 'Some textES6', currentDate);
console.log(postES6);


class AttachedPostES6 extends PostES6{
  constructor(author, text, date){
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const postAttachedES6 = new AttachedPostES5('KentES6', 'More some textES6', currentDate);
console.log(postAttachedES6);
