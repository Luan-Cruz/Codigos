////////// EX:1     ///////////

// var alunos = [
//   { nome: "Diogo", media: 5.5 },
//   { nome: "Julia", media: 9.5 },
//   { nome: "Roberto", media: 1.5 },
//   { nome: "Tiago", media: 6.0 },
// ];

// let aprovados = alunos.filter(function (aluno) {
//   return aluno.media > 5;
// });
// console.log(aprovados);

/////// EX: 7 /////////

var lista = [
  { nome: "Tânia", sobrenome: "Cardoso", idade: 65 },
  { nome: "Emilly", sobrenome: "Barbosa", idade: 46 },
  { nome: "Vitória", sobrenome: "Costa", idade: 83 },
  { nome: "Erick", sobrenome: "Ferreira", idade: 16 },
];

// let pessoa = lista.find(function (buscar) {
//   return buscar.nome === "Tânia";
// });
// console.log(pessoa);

function buscar(propiedade, valor, lista) {
  return lista.find(function (item) {
    return item[propiedade] === valor;
  });
}
console.log(buscar("idade", 16, lista));
