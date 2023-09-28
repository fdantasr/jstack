function minhaFuncao() {
  //Function comum tem o seu próprio this)
  this.name = 'Felipe';

  const minhaArrowFunction = () => {
    //Arrow function tem o this associado ao contexto em que foi criada, pois ela não tem um construtor, não da pra dar propriedades a ela
    this.lastName = 'Dantas'; //Não funciona, this associado ao contexto em que foi criada
  };
  minhaArrowFunction();
}

console.log(new minhaFuncao());  //object e assim podemos dar propriedades a ele

/*
-> Classes no JavaScript são sugar syntax para funções com construtor
-> Uma função com construtor é basicamente um objeto
*/