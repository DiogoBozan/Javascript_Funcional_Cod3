let p = new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "Daniel"]);
});

p.then((primeiraPosicao) => primeiraPosicao[1])
  .then((primeiraLetra) => primeiraLetra[0])
  .then((letraMinuscula) => letraMinuscula.toLowerCase())
  .then((mostrar) => console.log(mostrar));

// // //  ************************* --------------- *************************************------------------------------

// OUTRO EXEMPLO:

function primeiraPosicaoFunc(array) {
  return array[0];
}

function primeiraLetraFunc(string) {
  return string[0];
}

function letraMinusculaFunc(string) {
  return string.toLowerCase();
}

p.then(primeiraPosicaoFunc)
  .then(primeiraLetraFunc)
  .then(letraMinusculaFunc)
  .then(console.log);

// // //  ************************* --------------- *************************************------------------------------

setTimeout(function () {
  console.log("Executando callback...");

  setTimeout(function () {
    console.log("Executando callback 222...");
  }, 2000);
}, 2000);

// // //  ************************* --------------- *************************************------------------------------
