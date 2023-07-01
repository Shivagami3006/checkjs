//  syntax:

//       for(Init ; condition ; increment){
//         statment (s);
//       }
// a=0;
// console.log(a++);
// console.log(a--);

// var i=0 ;
// for (i;i<=6;i++){
//     console.log(i)
// }
var table = 5,
  i = 1;

for (; i < 10; i++) {
  console.log(table + "X" + i + "=" + table * i);
}

var fruits = ["apple", "orage", "graps"];
var i = 0;
for (i; i < fruits.length; i++) {
  console.log("fruits:" + i + fruits[i]);
}

let num = [11, 12, 13, 14, 15, 60, 70, 8, 9, 10];
let even = [];
let odd = [];
for (i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    even.push(num[i]);
  } else {
    odd.push(num[i]);
  }
}
console.log({ even });
console.log({ odd });
