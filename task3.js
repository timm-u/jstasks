//Kristjan Krimm
//19.12.2021
//task3.js

const persons = [
  {
    name: "Julia",
    age: 27,
  },
  {
    name: "Martin",
    age: 45,
  },
  {
    name: "Taavi",
    age: 17,
  },
  {
    name: "Emma",
    age: 2,
  },
  {
    name: "Ricky",

    age: 62,
  },
];

const totalSumOfAges = persons.reduce((a, b) => a + b.age, 0);
console.log(totalSumOfAges);
