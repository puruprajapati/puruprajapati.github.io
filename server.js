const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
/*
let i = 99;
let j = 8.76;
console.log(typeof i); //number
console.log(typeof j); //number

let a = "a" / 2;
console.log(a);  //NaN
console.log(typeof a); //number

console.log("2" / "3");  //0.66
console.log("2" + 3); //23


console.log("05" == 5);  //true
console.log("5" == 5);  //true
console.log(5.0 == 5);  //true
console.log(5.0 === 5);  //true
console.log("5" === 5);  //false
console.log("3" > 2);
// comparing with NaN will always return false
console.log("12a" > 3);  //false
console.log("12b" < 3);  //false
console.log("12b" == 3);  //false
console.log('a' < 'b');  // true
console.log('a' > 'b');  //false

console.log('0' ? "hi" : "bye");  //true
console.log('0' == false);  // false



if (0 || '' || "" || 0.0 || false || null || undefined || NaN) {
  console.log('inside true');

} else {
  console.log("inside false");
}

if (true && "0" && "abc" && 123) {
  console.log("inside true");
} else {
  console.log("inside false");
}
*/


/*
const user = {
  fname: 'Jack',
  lastName: 'Ma',
  age: 20,
  'fancy name': 'huhuhaha'
}
console.log(user.fname);
console.log(user['fancy name']);


let result = 'hello';
user[result] = '1';  // can assign dynamic attribute
console.log(user);
console.log(typeof user)
delete user.age;
user.dob = '1999/11/11';
console.log(user)

// user = { name: 'hello' };  // this is an error, wont be able to modify user 

const username = 'test@gmail.com';
const password = '123';

let person1 = {
  username: username,
  password: password
};

let person2 = {
  username,
  password
};

console.log(person1);
console.log(person2);


let ducks = ["Huey", "Dewey", "Louie"];
console.log(ducks[5]);
let stooges = []; // stooges.length is 0  
stooges[0] = "Larry"; // stooges.length is 1
console.log(stooges);
stooges[1] = "Moe"; // stooges.length is 2 
console.log(stooges);
stooges[4] = "Curly"; // stooges.length is 5 
console.log(stooges);
stooges[4] = "Shemp"; // stooges.length is 5 
console.log(stooges);


*/

const a = [1, 2, 3, 5, 4, 5, 6];
a.map((element, i, array) => {
  console.log(element);
})


console.log(add(10, 20));
// console.log(subtract(5, 1));
function add(x, y) {
  return x + y;
}

const subract = function (x, y) {
  return x - y;
}

console.log(subract(5, 1));


app.listen(port, () => console.log(`Listening on port ${port}`)); 
