// syntax:
//        switch(expression){
//         case:x
//         //code block
//         break;
//         case y:
//             //code block
//             break;
//             default:
//                 //code block
//        }

// console.log(new Date());
// console.log(new Date().getDay());
// //taking index value output
// console.log(new Date().getMonth());

let months;
switch (new Date().getMonth()) {
  case 0:
    console.log("Janu");
    break;
  case 1:
    console.log("feb");
    break;
  case 2:
    console.log("mar");
    break;
  case 3:
    console.log("apri");
    break;
  case 4:
    console.log("may");
    break;
  case 5:
    console.log("Jun");
    break;
  case 6:
    console.log("Jul");
    break;
  case 7:
    console.log("aug");
    break;
  case 8:
    console.log("sep");
    break;
  default:
    console.log("error");
}
let month;
switch (new Date().getMonth()) {
  case 0:
    month: "jan";
    break;
  case 1:
    month: "feb";

    break;
  case 2:
    month: "mar";
    break;
  case 3:
    month: "apr";
    break;
  case 4:
    month: "may";
    break;
  case 5:
    month: "jun";
    break;
  case 6:
    month: "jul";
    break;
  case 7:
    month: "aug";
    break;
  case 8:
    month: "sep";
    break;
  default:
    console.log("error");
}

// // let marks = prompt("Enter marks:");
// console.log(typeof marks);

// switch (Number(marks)) {
//   case 90:
//     console.log("pass");
//     break;
//   case 80:
//     console.log("good");
//     break;
//   case 70:
//     console.log("avg");
//     break;
//   default:
//     console.log("fail");
// }

// let names = ["siva", "abi", "ji"];
// switch (names) {
//   case 0:
//     names:;
//     break;
//   case 1:
// }

let Distric = prompt("Enter the Distric Name:")
let Famous_for ;
switch(Distric) {
  case "Ariyalur":
    Famous_for = "Gangai Konda Choliswar ";
    break;
  case "Chennai":
    Famous_for = "Beach";
    break;
  case "Chengalpattu":
    Famous_for = " Palar River";
    break;
  case "Coimbatore":
    Famous_for = " Industries";
    break;
  case "Cuddalore":
    Famous_for = " Gold";
    break;
  case "Dharmapuri":
    Famous_for = " Hogenakkal Falls";
    break;
  case "Dindigul":
    Famous_for = " Locks";
    break;
  case "Erode":
    Famous_for = "  Turmeric cultivation";
    break;
  case "Kallakurichi":
    Famous_for = " agricultural ";
    break;
  case "Kanchipuram":
    Famous_for = " Silk";
    break;
  case "Kanniyakumari":
    Famous_for = " Thiruvalluvar Statue";
    break;
  case "Karur":
    Famous_for = " Ponnaniyar Dam";
    break;
  case "Krishnagiri":
    Famous_for = " Mango Capital of India";
    break;
  case "Madurai":
    Famous_for = " Jasmine";
    break;
  case "Mayiladuthurai":
    Famous_for = " Parimala Ranganathar Temple";
    break;
  case "Nagapattinam":
    Famous_for = " Kodikkarai Beach";
    break;
  case "Namkkal":
    Famous_for = "Agaya Gangai Waterfalls ";
    break;
  case "Nilgiris":
    Famous_for = " OOty tea";
    break;
  case "Perambalur":
    Famous_for = "Sugar Mills ";
    break;
  case "Pudukkotai":
    Famous_for = "Sittanavasal Cave ";
    break;
  case "Ramanathapuram":
    Famous_for = "rameswaram ";
    break;
  case "Ranipet":
    Famous_for = "Kanchanagiri hills  ";
    break;
  case "Salem":
    Famous_for = " Mangoes";
    break;
  case "Sivagasi":
    Famous_for = " Fireworks";
    break;
  case "Tenkasi":
    Famous_for = " Kutralam Falls";
    break;
  case "thanjavur":
    Famous_for = " Thalaiyatti Bommai";
    break;
  case "Theni":
    Famous_for = " Meghamalai ";
    break;
  case "Thoothukudi":
    Famous_for = " salt";
    break;
  case "Truchirappalli":
    Famous_for = "Kallanai Dam";
    break;
  case "Thirunelveli":
    Famous_for = " Halwa";
    break;
  case "Tiruppur":
    Famous_for = "Dress";
    break;
  case "Tiruvannamalai":
    Famous_for = " Girivalam";
    break;
  case "Tiruvallur":
    Famous_for = "  Veera Raghavar";
    break;
  case "Vellor":
    Famous_for = "Sripuram Golden Temple";
    break;
  case "Viluppuram":
    Famous_for = "Gingee Fort";
    break;
  default:
    Famous_for = "error";
}
// console.log("Famous_for", Famous_for)


// git remote add origin https://github.com/Shivagami3006/checkjs.git
// git branch -M main
// git push -u origin main


var a=80.01,b=80.00;

if(a==b){
  console.log("tru")

}
console.log("f")

var c=1,b="true";
console.log(a==b);