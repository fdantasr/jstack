// Como passar um número indefinido de parâmetros para uma função

function soma(params) {
  //console.log(arguments);
  console.log(Object.values(arguments));
}


function soma2 (primeiroParametro,...argumentosItem) {
  console.log(primeiroParametro); // 1 
  console.log(argumentosItem);  // [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Dantas']
}

const soma3 = () => {
  console.log(arguments);
  // Retorna os argumentos do contexto em que a função estpá inserida e não da função
}

soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Felipe'); 
soma2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Dantas'); 
soma3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Dantas');