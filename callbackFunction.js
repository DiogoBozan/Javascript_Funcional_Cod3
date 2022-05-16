function exec(fn, a, b) {
  return fn(a, b);
}

const somar = (x, y) => console.log(x + y);
exec(somar, 10, 5);

const subtrair = (w, z) => console.log(w - z);
exec(subtrair, 45, 25);
// //  ************************* --------------- *************************************------------------------------

const callBack = () => console.log("callback 1...");
setInterval(callBack, 1000);

setInterval(() => console.log("callback 2..."), 1000);

setInterval(function () {
  console.log("callback 3...");
}, 1000);
// //  ************************* --------------- *************************************------------------------------

const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString());
}

console.log("Inicio...");
fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
console.log("Fim...");

console.log("Inicio Sync...");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim Sync...");
