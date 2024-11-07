const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married:true,
    'fav places': ['a','b']
}

person.salary=30000;
person['age']= 26;
const propName = 'profession';
person[propName] = 'devops'
console.log(person)

const keyName = 'profession';
console.log(person[keyName])