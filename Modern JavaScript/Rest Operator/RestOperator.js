const user = {
  firstName: 'Felipe',
  lastName: 'Dantas',
  age: 21,
  email: 'dantas@mail.com',
  city: 'São Paulo',
  country: 'Brazil',
  skills: ['JavaScript', 'React', 'Node', 'CSS'],
  full_info: 'Felipe Dantas is a 21 years old developer from Brazil'
};

//Old way to get the values from the object

// const firstName = user.firstName;
// const lastName = user.lastName;

// Desestructuring 

const { firstName, lastName, ...resto } = user; // Rest Operator retorna o resto do objeto menos o que foi desestruturado
const [skill1, skill2, ...restoArray] = skills;

console.log(resto);
console.log(restoArray);