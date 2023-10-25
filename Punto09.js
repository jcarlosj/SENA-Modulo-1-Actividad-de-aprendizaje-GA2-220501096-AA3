function ingresarNotas( cantidadNotas ) {
    let notas = [];
    let i = 0;

    while( i < cantidadNotas ) {
        const nota = Number( prompt( `Ingresar nota #${ i + 1 }:` ) );

        if( nota >= 0 && nota <= 10 ) {
            notas.push( nota );
            i++;
        }
        else {
            console.log( 'La nota no esta en el rango no se a agregado' );
        }
        
    }

    const total = notas.reduce( ( acumulador, actual ) => {
        return acumulador + actual;
    }, 0 );

    return {
        notas,
        promedio: total / notas.length,
        mayor: Math.max( ...notas ),
        menor: Math.min( ...notas )
    };
}

// Implementacion
const { notas, promedio, mayor, menor } = ingresarNotas( 5 );
console.log( 'Lista de notas: ', notas );
console.log( 'Promedio: ', promedio );
console.log( 'Nota Mayor: ', mayor );
console.log( 'Nota Menor: ', menor );
