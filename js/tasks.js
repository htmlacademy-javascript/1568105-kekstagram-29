const users = [
  {
    id: 1,
    name: 'John',
    isActive: true,
    age: 19
  },
  {
    id: 2,
    name: 'Rick',
    isActive: true,
    age: 25
  },
  {
    id: 3,
    name: 'Anthony',
    isActive: false,
    age: 15
  }
];

const getNames = (arr) => {
  const names = [];
  for (let i = 0; i < getNames.length - 1; i++) {
    if (arr[i].isActive) {
      names.push(arr[i]);
    }
  }
  return names;
};

const getNames1 = (arr) => arr.map((user) => user.name );

const getActiveUsers = (arr) => arr.filter((item) => item.isActive).map((activeUser) => activeUser.name);

const sortByAge = (arr) => arr.sort((item1, item2) => item1.age > item2.age ? 1 : -1).map((user) => `${ user.name}: ${ user.age}`);

const isNameExists = (name, arr) => arr.some((element) => element.name === name); // true / false

const findByName = (name, arr) => arr.find((item) => item.name === name); //

const findIndexByName = (name, arr) => arr.findIndex((item) => item.name === name); // вернёт номер массива или -1

// console.log(getNames1(users));
// console.log(getActiveUsers(users));
// console.log(sortByAge(users));
// console.log(isNameExists('Jon', users));
// console.log(findByName('John', users));
// console.log(findIndexByName('Jon', users));

const fruits = ['banana', 'kiwi', 'banana', 'pomelo', 'apple', 'ananas', 'pomelo', 'peach'];

const getUniqueArr = (arr) => [...new Set(arr)]; // Set удалит дубликаты в массиве

const getUniqueArrOne = (arr) => {
  const result = []; //

  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  });
  return result;
};

const getUniqueArrTwo = (arr) => arr.reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []);
// на первой итерации acc - пустой массив

// console.log(getUniqueArr(fruits));
// console.log(getUniqueArrOne(fruits));
// console.log(getUniqueArrTwo(fruits));

// ===

const getMultiplesThreeOrFive = (n) => {
  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
};
// console.log(getMultiplesThreeOrFive(1000));


const getMultiplesThreeOrFiveV1 = (n) => [...Array(n - 1).keys()]
  .map((item) => item + 1)
  .reduce((acc, item) => item % 3 === 0 || item % 5 === 0 ? acc + item : acc, 0);

// console.log(getMultiplesThreeOrFiveV1(10));

const fruitOne = ['banana', 'kiwi', 'banana', 'pomelo', 'apple', 'ananas', 'pomelo', 'peach'];

const getStatistique = (arr) => {
  const arrayWithoutRepeats = [...new Set(arr)];
  return arrayWithoutRepeats.reduce((acc, item) => {
    const value = arr.reduce((battery, element) => element === item ? battery + 1 : battery, 0);
    acc[item] = value;
    return acc;
  }, {})
}

console.log(getStatistique(fruitOne));
