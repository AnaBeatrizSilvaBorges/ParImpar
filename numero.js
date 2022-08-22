const parImpar = function(numeroInicial, numeroFinal) 
{
    let inicial = parseInt(numeroInicial);
    let final = parseInt(numeroFinal);
    let qntd = 0;
    console.log('Lista de números pares:')
    while(inicial <= final){
        let resto = inicial % 2;
          if(resto == 0){
            console.log(inicial)
            qntd += 1;
          }
          inicial++
    }
    console.log('Quantidade de números encontrados:' + qntd)
}
const imparPar = function( numeroInicial, numeroFinal){
    let inicial = parseInt(numeroInicial);
    let final = parseInt(numeroFinal);
    let qntd = 0;
    console.log('Lista de números impares:')
    while(inicial <= final){
        let resto = inicial % 2;
          if(resto == 1){
            console.log(inicial)
            qntd += 1;
          }
          inicial++
    }
    console.log('Quantidade de números encontrados:' + qntd)
}


module.exports = { parImpar, imparPar}