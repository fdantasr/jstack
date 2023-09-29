const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Error!');
  }, 2000);
});

async function run (){
  try{
  const resposta = await apiCall;
  console.log(resposta);
  } catch (erro){
    console.log(erro);
  }
}

run();

