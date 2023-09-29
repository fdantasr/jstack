const user = {
  firstName: 'Felipe',
  lastName: 'Dantas',
  age: 21,
  email: 'dantas@mail.com',
  city: 'São Paulo',
  country: 'Brazil',
  skills: ['JavaScript', 'React', 'Node', 'CSS'],
  full_info: 'Felipe Dantas is a 21 years old developer from Brazil',
  active : false
};

const copiedUser = { 
  ...user,
  skills: [...user.skills, 'MongoDB'],
  active: true,
 };