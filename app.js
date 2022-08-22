console.log('Par ou Impar \n');

const { parImpar } = require('./numero')
const { imparPar } = require('./numero')
const { Console } = require('console');
const { exit } = require('process');

// Import da biblioteca entrada de dados 
    var readline = require('readline');

// Instancia do objeto entrada dde dados
    var EntradaDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    EntradaDados.question('Digite o número inicial ( 0 - 500 ): \n', function (numeroInicial) {
        let numero = numeroInicial;

    EntradaDados.question('Digite o número final ( 100 - 1000 ): \n', function (numeroFinal) {
        let numero2 = numeroFinal;

        if ( numero <= 0 || numero > 500)
        {
            console.log('\nO numero inicial deve ser entre 0 e 500')
        }

        else if ( numero2 < 100 || numero2 > 1000)
        {
            console.log('\nO numero final deve ser entre 100 e 1000')
        }

        if ( numero == '' || numero2 == '') 
        {
            console.log('\nTodos os numeros devem ser inseridos')
        }

        else if ( numeroInicial >  numeroFinal)
        {
            console.log('\nO numero final deve ser maior que o inicial')
        } 

        else if ( numeroInicial == numeroFinal)
        {
            console.log('\nOs numeros nao podem ser iguais')
        }

        else 
        {
            parImpar(numeroInicial,numeroFinal)
            imparPar(numeroInicial, numeroFinal)
        }
        

    });
    });