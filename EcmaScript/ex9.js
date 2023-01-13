let raiz = [2, 4, 6 ,8 ,10 , 12, 14, 16, 18, 20]

function calculaRaiezesQuadradas(arr){
    return arr.map(function(soma){
        return arr = Math.sqrt(soma)
    }, 0)
}

console.log(calculaRaiezesQuadradas(raiz))