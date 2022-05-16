const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const qtdaBiggerThanZero = carrinho.filter((value) => value.qtde >= 2);
console.log(qtdaBiggerThanZero);

const getName = (item) => item.nome;
const getPrice = (value) => value.preco >= 250;

const getPriceByNameBigger = carrinho.filter(getPrice).map(getName);
console.log(getPriceByNameBigger);

Array.prototype.meuFilter = function (fn) {
  const novoArray = [];

  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }

  return novoArray;
};

// const getNameFilter = (item) => item.nome;
const getPriceFilter = (value) => value.preco >= 250;

const meuItemValido2 = carrinho.filter(getPriceFilter);
console.log(meuItemValido2);
