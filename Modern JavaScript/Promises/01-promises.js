const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve('Success!');
    reject('Error!');
  }, 2000);
});

apiCall
.then((resposta) => {
  console.log(resposta); //Valor passado no resolve é recebido aqui
})
.catch((err) => {
  console.log(err); //Valor passado no reject é recebido aqui
});