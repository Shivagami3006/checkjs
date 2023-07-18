// // let A = ["a", "b", "c", "d"];

// // for (B of A[0]) {
// //   console.log(B);
// // }

// // let student = { fname: "siva", age: "20", ph: 334444 };
// // for(x in student){
// //     // console.log(x,student[x])
// //     // console.log(`${x} : ${student[x]}`)
// // }
// // console.log(student['fname'])
// // console.log(student.fname)

// // let get_item = prompt("Enter need:");

// // let stud = { fname: "siva",
// //  age: "20",
// //   ph: 334444,
// //   fathr_name:'ranga',
// //   Address:{distric:'tvmalai',
// //             village:'sdhjdd',
// //              pin_code:6788},
// //  fav_food:{veg:'curd_rise',dess:"payasam"}}

// //       console.table(stud[get_item]) ;
// //     //   console.log(stud.age) ; normally

// //     for(key in stud){

// //         console.log(stud[key]);
// //     };
// //     console.log( typeof(key))

// // let i = 1;

// // // Entry check loop
// // while (i <= 10) {
// //   console.log(i);
// //   i++;
// // }
// // text = "app";
// // let i = 1;
// // while (i <= 10) {
// //   console.log(`${(text += i)}`);
// //   i++;
// // }

// let Students = {
//   class_A: {
//     Rollno1: { name: "surya", age: "22", Father_name: "ranga" },
//     Rollno2: { name: "abi", age: "23", Father_name: "dhfj" },
//     Rollno3: { name: "jaya", age: "20", Father_name: "hfjga" },
//     Rollno4: { name: "siva", age: "24", Father_name: "shjaa" },
//   },
//   class_B: {
//     Rollno5: { name: "arun", age: "22", Father_name: "aadd" },
//     Rollno6: { name: "suresh", age: "23", Father_name: "adadga" },
//     Rollno7: { name: "ravi", age: "20", Father_name: "asdasd" },
//     Rollno8: { name: "guna", age: "24", Father_name: "adaax" },
//   },
//   class_C: {
//     Rollno9: { name: "kowsi", age: "22", Father_name: "qsaaa" },
//     Rollno10: { name: "dharshan", age: "23", Father_name: "aasnga" },
//     Rollno11: { name: "shan", age: "20", Father_name: "radds" },
//     Rollno12: { name: "anbu", age: "24", Father_name: "rddda" },
//   },
// };

// let classnameInput = prompt("Enter class name:");
// let rollno = prompt("Enter rollno:");
// let student_details;

// for (className in Students) {
//   if (className === classnameInput) {
//     let class_details = Students[className];
//     console.log(Students[className]);
//     for (rollNum in class_details) {
//       if (rollNum === rollno) {
//         student_details = class_details[rollNum];
//       }
//     }
//   }
// }

// if (student_details) {
//   console.log("student details: ", student_details);
// } else {
//   console.log("student not found!");
// }

// // // let i =0;
// // // exit check loop
// // do{
// //   console.log(i);
// // i++;
// // }while(i<=10);

// let i = 0,A=123;
// let password =Number( prompt("Enter the password :"));
// do {
//   if (password === A) {
//     console.log("success");
//     break;
//   } else {
//     console.log("if its Wrong only try 3 times");
//     i--;
//   }
// } while (i<3);



let password = "1234";
let userpin = prompt("")

// let item = prompt("Enter your item");
// let shop = {
//   fruits: {
//     Apple: { color: "red", price: "10" },
//     orange: { color: "red", price: "12" },
//     banana: { color: "red", price: "100" },
//   },
//   veg: {
//     carrot: { color: "orange", price: "20" },
//     brinjol: { color: "blue", price: "40" },
//     raddish: { color: "white", price: "60" },
//   },
//   non_veg: {
//     fish: { varity: "sea", price: "120" },
//     chicken: { varity: "country", price: "100" },
//     mutton: { varity: "red-meat", price: "10" },
//   },
// };

// let shop_menu;

// if (item === "fruits") {
//   for (prop in shop.fruits) console.log(prop, shop.fruits[prop]);
//   for (x in shop_menu) {
//     if (shop_menu == "catogry") console.log(x, shop_menu[x]);
//   }
// } else if (item === "veg") {
//   for (prop in shop.veg) console.log(prop, shop.veg[prop]);
//   shop_menu == shop.veg[prop];
// } else if (item === "non_veg") {
//   for (prop in shop.non_veg) console.log(prop, shop.non_veg[prop]);
//   // shop_menu == shop.non_veg[prop];
// }

// var catogry = prompt("catogry:");

// if (shop_menu) {
//   console.log("shop_menu: ", shop_menu);
// } else {
//   console.log("item not found!");
// }
