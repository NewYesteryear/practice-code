/* 1. Var & Let & Const
Var is mutable Global & Function scope variable
Let is mutable Function & Block scope variable
Const is immutable Function & Block scope constant
*/

/* 2. Understanding Arrow Functions*/
console.log("2. Understanding Arrow Functions");

const name = "Wong";
const age = 24;

//previous version
const summarizeUser = function(userName, userAge) {
  return "Name is " + userName + " and Age is " + userAge;
};

//new arrow function - treat this keyword differently
const userDetails = (userName, userAge) => {
  return "Name is " + userName + " and Age is " + userAge;
};

//short arrow function
const userNextYearAge = userAge => userAge + 1;

//no parameter for arrow function
const userWish = () => "Programming for life";

console.log(summarizeUser(name, age));
console.log(userDetails(name, age));
console.log(userNextYearAge(age));
console.log(userWish());

/* 3. Objects, Properties & Methods*/
console.log("3. Objects, Properties & Methods");

//this is object
const person = {
  name: "Wong",
  age: 24,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

person.greet();

/* 4. Array & Array & Methods */
console.log("4. Array & Array Methos");

//Array & Array is reference types

const hobbies = ["Sports", "Cooking"];
for (let hobby of hobbies) {
  console.log(hobby);
}
console.log(hobbies);
// map
console.log(hobbies.map(hobby => "Hobby: " + hobby));

/* 5. Spread & Rest Operator */
console.log("5. Spread & Rest Operator");

//Spread operator
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

//Rest Operator
const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4, 5, 6));

/* 6. Object & Array Destructor*/
console.log("6. Object & Array Destructor");

const getPerson = ({ name, age }) => {
  console.log(name, age);
};
getPerson(person);

const { userName, userAge } = person;
console.log(name, age);

const [sport1, sport2] = hobbies;
console.log(sport1, sport2);

/* 7. Async Code & Promises*/
console.log("7. Async Code & Promises");

// const fetchData = callback => {
//     setTimeout(() => {
//         callback('Done!');
//     }, 1500);
// };

// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log("Hello!");
