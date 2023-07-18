// console.log('hello');
// console.log(dog);
// console.log('cat');
// console.log('hello');
// setTimeout(() => {
//     console.log('dog'),0
// }, );
// console.log('cat');

// let promise = new Promise(function(resolve,reject){
//     setTimeout(()=> resolve('done'),1000)
// });

// // promise.then(
//     result => alert(result),
//     error => alert(error)
// );
// promise.then(
//    function(result) {
//      console.log(result);
//    },
//    function(error){
//    console.log(error);
//    }
// );dee

var a=1,b=2;
 new Promise(function (resolve, reject) {
  setTimeout(resolve(a+b),5000);
}).then(function(resolve){
console.log(resolve )
}).catch(function(error){
  console.log('error')
});

// var e = new Error("hello");
// console.log(e)

new Promise(function (resolve, reject) {
  setTimeout( function(){reject(new Error("whoops"))}, 5000);
})
  .then(function (resolve) { 
    console.log(resolve);
  })
  .catch(function (error) {
    console.log("error");
  });
