//Kristjan Krimm
//19.12.2021
//task5.js

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

const boyNames = ["Martin", "Taavi", "Ricky"];
const girlNames = ["Julia", "Emma"];

const people = {
  boys: persons.filter((item) => !girlNames.includes(item.name)),
  girls: persons.filter((item) => !boyNames.includes(item.name)),
  boyslessthanage30: persons.filter(
    (item) => !girlNames.includes(item.name) && item.age < 30
  ),
  girlslessthanage30: persons.filter(
    (item) => !boyNames.includes(item.name) && item.age < 30
  ),
};

const peopleUpperKeys = persons.map((item) =>
  Object.fromEntries(
    Object.entries(item).map(([key, val]) => [key.toUpperCase(), val])
  )
);

console.log(people);
console.log(peopleUpperKeys);
