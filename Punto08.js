function ingresarNotas( cantidadElementos ) {
    let listaOriginal = [];

    for ( let i = 0; i < cantidadElementos; i++ ) {
        const string = prompt( 'Digite una cadena de caracteres: ' );
        listaOriginal.push( string );
    }

    // Crear una copia inversa del vector
    const listaInvertida = listaOriginal.slice().reverse();

    return [ listaOriginal, listaInvertida ];
}

// Implementacion
const { 0: listaOriginal, 1: listaInvertida } = ingresarNotas( 5 );
console.log( 'Lista Original: ', listaOriginal );
console.log( 'Lista Invertida: ', listaInvertida );
