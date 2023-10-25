function sumaElementosXFila() {
    for ( let i = 0; i < matriz.length; i++ ) {
        let sumaFila = 0;

        for ( let j = 0; j < matriz[ i ].length; j++ ) {
            sumaFila += matriz[ i ][ j ];
        }
        console.log( "Fila " + ( i + 1 ) + ": " + sumaFila );
    }
}

function sumaElementosXColumna() {
    for ( let j = 0; j < matriz[ 0 ].length; j++ ) {
        let sumaColumna = 0;
        
        for ( let i = 0; i < matriz.length; i++ ) {
            sumaColumna += matriz[ i ][ j ];
        }
        console.log("Columna " + (j + 1) + ": " + sumaColumna);
    }
}


// Implementacion
let matriz = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

console.log( matriz );
sumaElementosXColumna( matriz );
sumaElementosXFila( matriz );