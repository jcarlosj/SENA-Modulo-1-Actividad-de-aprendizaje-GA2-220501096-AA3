function calcularOperacion(num1, num2, num3) {
    let msg = '';

    if (num1 > 0) {
        let producto = num2 * num3;
        msg = `El resultado del producto es: ${ producto }`;
    } else {
        let suma = num2 + num3;

        msg = `El resultado de la suma es: ${ suma }`;
    }

    return msg;
}

// Implementacion:
let resultado = calcularOperacion( 5, 2, 3 ); // Debería mostrar 'El resultado del producto es: 6'
console.log( resultado ); 
resultado = calcularOperacion( -2, 4, 6 ); // Debería mostrar 'El resultado de la suma es: 10'
console.log( resultado ); 
