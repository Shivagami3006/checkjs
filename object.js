// let student = { fname: "jaya",
// lname:"surya",
//  age: 22,
//   ph: "12233",
// fullname:function(){
//    // return student.fname + student.lanme
//     let a = `${this.fname}${this.lname}`;
//     console.log(a);
// }}

// student.fullname();

// var length = Object.keys(student).length;
// console.log(length);

// this method is browser object model (BOM); its called window objet;
// so terminal return empty object ( also called global object)

// let student = {
//   fname: "jaya",
//   lname: "surya",
//   age: 22,
//   ph: "12233",
//   fullname: function () {
//    return this
//   },
// };

// console.log(this)
// function X(a) {
//    return console.log(`Expected:'${a.substring(4)}'`);
// }
// X("abcdefg");
// function Y(a) {
//    return console.log(`Expected:'${a.substring(1)}'`);
// }
// Y("1234");

// function Z(a) {
//    return console.log(`Expected:'${a.substring(4)}'`);
// }
// Z("fgedcba");

// let user1 = {
//   fname: "siva",
//   age: "29",
//   location: "chennai",
//   login () {
//     let a = `${this.fname} login successfully`;
//     console.log(a);
//   },
//   logout () {
//     let b = `${this.fname} logout successfully`;
//     console.log(b);
//   },
// };

// // console.log(user1);
// user1.login();
// user1.logout();

// let user2 = {
//    lname: "abi",
//    age: "29",
//    location: "chennai",
//    login () {
//     return `${this.lname} login successfully`;
//    },
//    logout() {
//      return `${this.lname} logout successfully`;
//    },
//  };
// //  console.log(user2);
// user2.login();
// user2.logout();
// ----------------------------------------------------------------
//  let user3 = {
//    ename: "jaya",
//    age: "29",
//    location: "chennai",
//    login () {
//      let c = `${this.ename} login successfully`;
//      console.log(c);
//    },
//    logout () {
//      let e = `${this.ename} logout successfully`;
//      console.log(e);
//      return this

//    },
//  };
//  console.log( user3.logout().age);
//  user3.logout();
// ---------------------------------------------------------

class user {
  constructor(fname, age, location) {
    this.fname = fname;
    this.age = age;
    this.location = location;
  }
  Login() {
    console.log("login");
  }
  Logout() {
    console.log("logout");
  }
}
var userone = new user("Ram", 20, "chennai");
var usertwo = new user("janu", 21, "chennai");
console.log(
  `my name is ${userone.fname} and my location is ${userone.location} `
);
console.log(
  `my name is ${usertwo.fname} and my location is ${userone.location} `
);
