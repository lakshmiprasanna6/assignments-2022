// array of objects to be queried
const array = [
  {
    id: 1,
age:19,
    name: 'Shubham'
  },
  {
    id: 2,
age:12,
    name: 'Parth'
  },
  {
    id: 3,
age:09,
    name: 'Pratik'
  }
]

const object = array.find(obj => obj.age>18);
console.log(object)