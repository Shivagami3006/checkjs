// let a = prompt('Enter the value:'),b=10;
// console.log(typeof a);
// if(a==b||b===a){
//     console.log('equal');
// }else{
//     console.log('not equal');
// }

let maths = prompt("maths mark:"),
  eng = prompt("eng mark:"),
  tamil = prompt("tamil mark:");
 total = Number(maths) + Number(eng) +  Number(tamil);
console.log(total);
 average = total / 3;
console.log(average.toFixed(2));

if (maths >= 35 && eng >= 35 && tamil >= 35) {
  console.log("pass");
  if (average >= 91 && average <= 100) {
    console.log("grade:A");
  } else if (average >= 81 && average <= 90) {
    console.log("grade:B");
  } else if (average >= 71 && average <= 80) {
    console.log("grade:C");
  } else {
    console.log("grade:D");
  }
} else {
  console.log("fail");
  console.log("no grade");
}
