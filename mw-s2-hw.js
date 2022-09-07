// (function IIFE() {
//   function foo(x) {
//     var y = x * 2;
//     return function bar(z) {
//       if (z.length > 3) {
//         return z.map(function baz(v) {
//           if (v > 3) return v + y;
//           else return baz(v * 4);
//         });
//       } else {
//         var obj = [];
//         setTimeout(
//           function bam() {
//             obj.length = 1;
//             obj[0] = this.w;
//           }.bind(this),
//           100
//         );
//         return obj;
//       }
//     };
//   }

//   var p = foo(2);
//   var list1 = [1, 3, 4];
//   var list2 = list1.concat(6);
//   list1 = p.call({ w: 42 }, list1);
//   list2 = p(list2);
//   setTimeout(function () {
//     console.log(
//       list1[0] ===
//         list2.reduce(function (s, v) {
//           return s + v;
//         }, 0)
//     );
//   }, 200);
// })();

// Ex 2
var x = 2,
  fns = [];

(function () {
  var x = 5;

  for (var i = 0; i < x; i++) {
    //
    fns[i] = function () {
      return i - 1;
    };
  }
})();

//DO NOT MODIFY BELOW CODE
// console.log(fns[4] === 2);
console.log(x * 2 === fns[x * 2]());
//true

//ex5:

// Bài 5 (done)

function upper(strings, ...values) {
  return strings.toUpperCase();
}
var name = "Nguyen Van A",
  account = "ANV",
  classname = "Fresher FrontEnd";

console.log(
  `Hello ${upper(name)} (@${upper(account)}), welcome to the ${upper(
    classname
  )}!!!` === "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
);
