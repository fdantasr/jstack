/* A diferença entre o .then e .catch pro async await é que o .then e .catch são métodos de um objeto Promise, enquanto o async await é uma função assíncrona que retorna uma Promise.

Deste modo o async await é uma forma mais simples de lidar com Promises, pois não é necessário encadear vários .then e .catch, basta usar o try catch, além dele travar a execução do código até que a Promise seja resolvida ou rejeitada. Já o .then e .catch não travam a execução do código, pois são métodos de um objeto Promise, e o código continua sendo executado normalmente, enquanto a Promise é resolvida ou rejeitada.

*/