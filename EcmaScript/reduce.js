// let termo = "validaParenteses(')((()()())))')";

// function verificar(termo) {
//   let contador = 0;

//   let termoLista = termo.split("");

//   termoLista.map(function (letra) {
//     //   console.log(letra);
//     if (letra === "(") {
//       contador = contador + 1;
//     } else if (letra === ")") {
//       contador = contador - 1;
//     } else {
//       contador = contador + 0;
//     }
//   });

//   if (contador === 0) {
//     console.log("esta tudo certo");
//   } else if (contador > 0) {
//     console.log("está faltando " + contador + ' ")" para fechar');
//   } else {
//     console.log("está faltando " + Math.abs(contador) + ' "(" para fechar');
//   }
// }

// verificar(termo);

let nums = [1, 2, 3, 3, 4, 5];

function removeDuplicatas() {
  return nums.reduce(function (anterior, valor) {
    let  duplicata = anterior.find(function (valorAtual) {
      return valor === valorAtual;
    });
    if (!duplicata) {
      anterior.push(valor);
    }
    return anterior;
  }, []);
}

console.log(removeDuplicatas());


