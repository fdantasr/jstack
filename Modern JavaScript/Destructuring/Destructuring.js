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

const { firstName, lastName, age, skills, full_info: fullInfo } = user;
const [skill1, skill2, skill3, skill4] = skills;

console.log(firstName, lastName, age, skill1, skill2, skill3, skill4);
console.log(fullInfo);