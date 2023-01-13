var dimensoes = [
  { altura: 10, comprimento: 20 },
  { altura: 2, comprimento: 4 },
  { altura: 1, comprimento: 1 },
  { altura: 50, comprimento: 50 },
];

function calcularAreaTotal(area){
  return area = dimensoes.reduce(function(valorAnterior, ValorParaSomarComAnterior){
    return valorAnterior + (ValorParaSomarComAnterior.altura * ValorParaSomarComAnterior.comprimento)
  }, 0 )
}
console.log(calcularAreaTotal())