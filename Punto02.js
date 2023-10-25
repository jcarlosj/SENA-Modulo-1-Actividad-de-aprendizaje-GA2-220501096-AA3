function comprobarSuma( num1, num2, num3 ) {
    if ( num1 === num2 + num3 || num2 === num1 + num3 || num3 === num1 + num2 ) {
        return 'Uno de los números es igual a la suma de los otros dos.';
    }
    
    return 'Ninguno de los números es igual a la suma de los otros dos.';
    
}

// Ejemplo de uso:
let resultado = comprobarSuma( 2, 3, 5 ); // Debería mostrar 'Uno de los números es igual a la suma de los otros dos.'
console.log( resultado );
resultado = comprobarSuma( 1, 4, 7 ); // Debería mostrar 'Ninguno de los números es igual a la suma de los otros dos.'
console.log( resultado );
