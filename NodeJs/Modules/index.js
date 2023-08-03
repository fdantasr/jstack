//Modulos Nativos

const os = require('os'); //Modulo do NodeJs
console.log(os.type());

//Modulos de Arquivos

//const modulo = require ('./printName.js');
const {printName, LastName} = require ('./printName.js'); //Destructuring Assignment

//modulo.printName(`John ${modulo.LastName}`);
printName(`John ${LastName}`);