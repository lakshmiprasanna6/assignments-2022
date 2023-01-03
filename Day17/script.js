// function changeStyles() {
//   var list = document.getElementById("style").classList;
//   console.log(list);
//   list.add("dummy");

//   var x = document.getElementById("display").classList;
//   //   x.remove("style-ele");

//   x.toggle("style-ele");
// }

// es6
// let
var a = 10;
{
  var a = 20;
  console.log(a); //20
}

console.log(a); //20

// using let
var b = 20;
{
  let b = 30;
  b = 90;
  console.log(b); //30
}

console.log(b); //20

//can't redeclare a variable with same name
// let b = 50;
// console.log(b);

//hoisting doesn't apply with let
// z = 90;
// console.log(z);
// let z;

//const
var t = 78;
{
  const t = 89;
  // t = 90; //re-define a value is not allowed
  console.log(t);
}

console.log(t);

// const keyword is used to declare varible with contant reference, not constant value
const arr = [90, 88, 100];
arr[0] = 102;
// const arr = [90, 100, 99];//give error
console.log(arr);

//can't redeclare a variable with same name
// const b = 50;
// console.log(b);

//hoisting doesn't apply with let
// z = 90;
// console.log(z);
// const z;

//arrow function/fat arrow
function add() {
  console.log(10 + 20);
  console.log(this); //window
}
add();

addNum = () => {
  console.log(30 + 90);
  console.log(this); //window
};

addNum();

// 2. this keyword: With arrow function, this keyword will always refer to window object
let person = {
  display: function () {
    console.log(this);
  },
  displayName: () => {
    console.log(this);
  },
};

person.display(); //person
person.displayName(); //window

// 3. return keyword
function sub() {
  return 20 - 10;
}

console.log(sub()); //10

subtract = () => {
  return 100 - 80;
};

// subtract = () => 100 - 80;

console.log(subtract()); //20

//array helper functions (map, filter, some, every, find, forEach, reduce)

//map is used to iterate over each array element in ordered format
const numArr = [90, 10, 89, 100, 67, 56, 66];

const resultArr = numArr.map(function (ele, i, arr) {
  //   console.log(ele);
  //   console.log(i);
  //   console.log(arr);
  return ele * 2;
});

console.log(resultArr);

// using arrow function (shorter syntax)
// var resultArr = numArr.map((ele, i, arr) => ele * 2);

//filter
//filter an array that pass the test
//return array filled with elements that pass the test

const resultFilter = numArr.filter((e) => {
  return e >= 60;
});

//shorter syntax
// var resultFilter = numArr.filter((e) => e >= 60);

console.log(resultFilter);

//forEach: is used to iterate over each array element in ordered format
numArr.forEach((e, i, arr) => {
  console.log(e);
  console.log(i);
});

//find
//return the first element that pass the test
const resultFind = numArr.find((e) => {
  return e >= 60;
});

console.log("Find");
console.log(resultFind);

//some
//return boolean value
//true, even if one element pass the test
const resultSome = numArr.some((item) => {
  return item >= 80;
});

console.log(resultSome);

//every
//return boolean value
//true, even if all the element pass the test
const resultEvery = numArr.every((item) => {
  return item >= 80;
});

console.log(resultEvery);

//reduce
//is used to reduce array to a single value
// considering [90, 10, 89, 100, 67, 56, 66]
const reduceArr = numArr.reduce((total, num) => {
  console.log(total); // 90 100 189 289 356 412
  console.log(num); //10 89 100 67 56 66
  return total + num;
});

//shorter syntax
// const reduceArr = numArr.reduce((total, num) => total + num);

console.log(reduceArr);

// default function arguments
add = (a, b = 40) => {
  return a + b; //
};

console.log(add(10, 100));

//class
//they are template of js objects

class University {
  //used to initialize values
  constructor(name, dept) {
    // this is referring to University
    this.name = name;
    this.dept = dept;
  }

  display(p) {
    console.log(this.name + "" + p);
  }
}

const stOne = new University("alina", "cse"); //creating an instance for a object
console.log(stOne);
stOne.display(90);

const stTwo = new University("alex", "cse");
console.log(stTwo);
stTwo.display(100);

const personData = [
  {
    name: "alina",
    age: 10,
  },
  {
    name: "alex",
    age: 90,
  },
];

const result = personData.map((e) => {
  return e.age * 2;
});
console.log(result);

// task
// revise let & const & var diff
// arrow function & prev function diff
// create multiple, division, subtraction function with fat arrow

// array helper functions: map, filter, find, some, reduce, every

// task: use e6
// 1.check if all the property values(firstName) in an array of object is same or not

// array of object
// [
//     {
//         firstName: '',
//         id: 1,
//         age: 12
//     }, {
//         firstName: '',
//         id: 2,
//         age: 12
//     }, {
//         firstName: '',
//         id: 3,
//         age: 12
//     }
// ]

// 2. get the value of the first element in an array that has value greater than 20
// 3. get the value of the first element in an array that has value less than 20
// 4. filter data based on a id(property) in an array of objects: pick any random id value
// 5. round off all the decimal numbers in an array and sum all the values [9.8, 9.7, 4.5, 3.4]

// 6.get all the person name based on age greater than and equal to 18, eligible to vote
// [{
//     firstName: 'joe',
//     age: 24
// }, {
//     firstName: 'alina',
//     age: 12
// },
// {
//     firstName: 'alex',
//     age: 20
// }
// ]

// 7. sum all the elements of an array [90, 89, 56, 45]
// 8. check element is odd or even in an array [90, 89, 56, 45]

// 9. sum of all the salaries and display final sum value
// [{
//     salary: 56000,
// },
// {
//     salary: 90000
// }]
// 10. concat all array elements ['red', 'pink', 'orange', 'red']: 'redpinkorangered'

//task
//create a class Car: city(),specialFeature()
//name, brand, color, manufacture

//create a class Book: type_of_book()
//no. of pages, type of pages, author

//create a class Animal: walk(), eat(), climb()
//gender, name, disease

// Inheritance
//parent class
class Shape {
  constructor(i) {
    this.id = i;
  }

  display() {
    console.log(this.id);
  }
}

// child/derived class
class Circle extends Shape {
  constructor(id, radius) {
    super(id); //to parent constructor call
    this.radius = radius;
  }

  circumference() {
    console.log(2 * Math.PI * this.radius);
  }
}

const c = new Circle(5, 4);
console.log(c);
c.circumference();
c.display();

class Triangle extends Shape {
  constructor(id, type) {
    super(id);
    this.type = type;
  }

  displayType() {
    console.log(this.type);
  }
}

const tri = new Triangle(1, "right-angled");
console.log(tri);
tri.displayType();

// tri.circumference();//both child classes can't access each others data

// enhance object literal
//restructuring of object
const fname = "alina";
const lname = "alex";
const ageVal = 20;

//combine all values to create a object
// property shorthand
const personValues = {
  fname,
  lname,
  ageVal,
};

console.log(personValues.fname);

//rest operator (...)
add = (...args) => {
  //args = [10, 90, 100, 89, 78, 88, 90, 23, 45]
  console.log(args);
};

add(10, 90, 100, 89, 78, 88, 90, 23, 45);

//destructuring of object
const user = {
  id: 10,
  verified: true,
};

const { id, verified } = user; //destructuring
console.log(id, verified);

//spread operator (...)
// for objects
const objOne = {
  A: 10,
  B: 20,
};

//shallow copy
// const objTwo = objOne;
// objTwo.A = 30;
// console.log(objOne, objTwo);

//using spread operator (deep copy)
const objTwo = { ...objOne, Z: 10 };
objTwo.A = 30;
console.log(objOne, objTwo);

//for arrays
const one = [19, 90, 10];
const two = [90, 88, 89];
const three = [...one, ...two, 100, 200];
console.log(three);

// destruturing of arrays
const [arrOne, , arrTwo] = one;
console.log(arrOne, arrTwo);

const [aval, ...bval] = two; //using rest operator
console.log(aval, bval);

// template strings (``)
console.log(
  "Hi, this is " + fname + " " + lname + " " + " and age is " + ageVal
);

// '' or "" or ``

console.log(`Hi, this is ${fname} ${lname} and age is ${ageVal}`);

//task
//Inheritance: parent class Electronics (methods: name, version, company name): child class(laptop, ipad, mobile, tablet):
// class child {
// configuration()
//price()
// }