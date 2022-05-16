// map utiliza sobre array

const nums = [1, 2, 3, 4, 5];
const double = (n) => n * 2;
console.log(nums.map(double)); // [ 2, 4, 6, 8, 10 ]
// //  ************************* --------------- *************************************------------------------------

// soma o i anterior mais o próx;
const nums1 = [1, 2, 3, 4, 5];
const doubleIndex = (n, i) => n * 2 + i;
console.log(nums1.map(doubleIndex)); //[ 2, 5, 8, 11, 14 ]
// //  ************************* --------------- *************************************------------------------------

const nomes = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const oneSecondPosition = (text) => text[(1, 2)];
console.log(nomes.map(oneSecondPosition));
// //  ************************* --------------- *************************************------------------------------

const nomes1 = ["Ana", "Bia", "Gui", "Lia", "Rafa"];
const firstLetter = (text) => text[0];
console.log(nomes1.map(firstLetter));
// //  ************************* --------------- *************************************------------------------------

const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getName = carrinho.map((item) => item.nome);

const getPrice = carrinho.map((value) => value.preco);
const getTotalPrice = getPrice.reduce((sumOfValue, a) => sumOfValue + a, 0);
console.log(`Valor total do Preco é: ` + getPrice);

// const getTotal = carrinho.map((value) => value.qtde * value.preco);
// console.log(`Valor total Qtda * Preco é: ` + getTotal);

Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    novoArray.push(fn(this[i], i, this));
  }
  return novoArray;
};

const getNome = (item) => item.nome;
console.log(carrinho.meuMap(getNome));

const getTotal = (item) => item.qtde * item.preco;
const totais = carrinho.meuMap(getTotal);
console.log(totais);
