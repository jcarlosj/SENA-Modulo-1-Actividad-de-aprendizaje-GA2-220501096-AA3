function multiplosDeTres() {
    let suma = 0;
    let contarMultiplos = 0;
    
    for ( let i = 1; i <= 100; i++ ) {
        if ( i % 3 === 0 ) {
            console.log(i);
            suma += i;
            contarMultiplos++;
        }
        if ( contarMultiplos === 5 ) {
            break; // Detener el bucle después de las primeras 5 iteraciones para la traza.
        }
    }
    
    return suma;
} 

let resultado = multiplosDeTres();

console.log( 'Serie de números múltiplos de 3: ' );
console.log( 'La suma de la serie es: ' + resultado );