/*function printName(name) {
  console.log(name);
}

const LastName = 'Doe';

module.exports = {printName, LastName};
Quando o nome da propriedade é igual ao nome da variável, pode-se omitir o nome da <propriedade></propriedade */

exports.printName = (name) => { 
  console.log(name);
}

exports.LastName = 'Doe';



