//Arry methods:

// For Each
//parameters 1.value(compulsory) 2.index(optional) 3.array(optional)
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// number.forEach((value) => {
//   console.log(value);
// });
// number.forEach((value, index, array) => {
//   console.log(`index : ${index} value:${value}`);
// });

// const student = [
//   { name: "siva", native: "che", ph: "1223" },
//   { name: "jaya", native: "chenn", ph: "456" },
//   { name: "abi", native: "tv", ph: "789" },
// ];

// console.table(student);

// student.forEach((value, index, array) => {
//   console.table(`index : ${index} value:${value.name}`);
// });

//Map
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sqrt = number.map((value) => {
  return Math.sqrt(value).toFixed(2);
});
console.table(sqrt);

const users = [
  { name: "siva", age: "22", native: "che", ph: "1223" },
  { name: "jaya", age: "10", native: "chenn", ph: "456" },
  { name: "abi", age: "22", native: "tv", ph: "789" },
];

// console.table(users);
let eligible = users.map((A) =>( {
//   name: A.name,
//   age: A.age,
//   native: A.native,
//   ph: A.ph,
...A,
  status:A.age >= 18 ? "Eligible" : "not Eligible"

}));
console.table(eligible);

