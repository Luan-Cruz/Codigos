// var nome = ["Diego", "Marcelo", "josé"];

// for (var i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// nome.forEach(function (nome) {
//   console.log(nome);
// });

var canais = ["SBT", "Globo", "record"];

canais.forEach(function (canal) {
  canais.unshift("Cultura");
  console.log(canal);
});

console.log("-------------------");

canais.forEach(function (canal) {
  console.log(canal);
});
