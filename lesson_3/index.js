'use strict';

// ================== Task 1 =========================
console.log('========= TASK 1 ==========');

for (let i = 0; i <= 10; i++) {
  if (i === 0) {
    console.log(i + ' - это ноль ');
    continue;
  }
  if (i % 2 === 1) console.log(i + ' - это нечетное число ');
  if (i % 2 === 0) console.log(i + ' - это четное число ');
}

// ================== Task 2 =========================
console.log('========= TASK 2 ==========');

const post = {
  author: "John", //вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2 //вывести это число
      }
    },
    {
      userId: 5, //вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", //вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1
      }
    },
  ]
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// ================== Task 3 =========================
console.log('========= TASK 3 ==========');

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

products.forEach( el => console.log( 'Скидка составит : ' + el.price * 15 / 100));

// ================== Task 4 =========================
console.log('========= TASK 4 ==========');

const newProducts = [  // Переименовал из-за конфликта имен
  {
    id: 3,
    price: 127,
    photos: [
      "1.jpg",
      "2.jpg",
    ]
  },
  {
    id: 5,
    price: 499,
    photos: []
  },
  {
    id: 10,
    price: 26,
    photos: [
      "3.jpg"
    ]
  },
  {
    id: 8,
    price: 78,
  },
];

let resArr = newProducts.filter(el => {
  if (el.photos){
    if (el.photos.length > 0 ) return true;
  }
});

console.log(resArr);
console.log(newProducts.sort((a, b) => a.price - b.price ));

// ================== Task 5 =========================
console.log('========= TASK 5 ==========');

for (let i = 0; i < 10; console.log(i), ++i) {};

// ================== Task 6 =========================
console.log('========= TASK 6 ==========');


for(let i = 0; i <= 20; i++) {
  let str = '';
  for(let j = 0; j < i; j++) {
    str += '*';
  }
  str += '\n';
  console.log(str);
}
