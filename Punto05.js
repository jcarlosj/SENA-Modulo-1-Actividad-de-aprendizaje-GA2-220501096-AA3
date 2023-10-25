function sumaParesEnUnRango( inicial, final ) {
    let sumaPares = 0;

    for ( let i = inicial; i <= final; i++ ) {
        if ( i % 2 === 0 ) {
            sumaPares += i;
        }
    }

    return sumaPares;
}

let resultado = sumaParesEnUnRango( 50, 200 );
console.log("La suma de los números pares entre 50 y 200, inclusive, es: " + resultado );