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

const getActiveUsers = (arr) => arr.filter((item) => item.isActive).map((activeUser) => activeUser.name)

const sortByAge = (arr) => arr.sort((item1, item2) => item1.age > item2.age ? 1 : -1).map((user) => `${ user.name}: ${ user.age}`)

// console.log(getNames1(users));
// console.log(getActiveUsers(users));
console.log(sortByAge(users));

