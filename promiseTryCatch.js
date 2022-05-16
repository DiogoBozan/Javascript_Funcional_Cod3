function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chanceErro) {
      reject("Ocorreu um erro!");
    } else {
      resolve(valor);
    }
  });
}

funcionarOuNao("Testando bro...", 0.9)
  .then((v) => console.log(`Valor: ${v}`))
  .catch((err) => console.log(`Erro: ${err}`)); //0.9 é a probabilidade de 0 a 1 (random)
