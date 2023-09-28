const minhaArrowFunction = () => {
    return 'Olá, Arrow Function!';
}

console.log(minhaArrowFunction());

// Quando a função tem apenas uma linha de código, podemos omitir as chaves e o return

const minhaArrowFunction2 = () => 'Olá, Arrow Function!';

const algumNumero = 10;

const minhaArrowFunction3 = () => ( //Organizando o código com parênteses para melhor leitura de operações ternárias
    algumNumero >= 10 ? 'Olá, Arrow Function!' 
    : 'Sou menor que 10'
);

const minhaArrowFunction4 = () => ({ // Quando retornamos um objeto, precisamos colocar entre parênteses
    nome: 'Desconhecido',
    idade: 0,
});