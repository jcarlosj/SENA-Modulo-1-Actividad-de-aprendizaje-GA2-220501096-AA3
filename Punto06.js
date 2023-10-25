function convertirCelsiusAFahrenheit( gradosCelsius ) {
    return (9 / 5) * gradosCelsius + 32;
}

// Implementacion
let celsius = 25;
let fahrenheit = convertirCelsiusAFahrenheit( celsius );
console.log( celsius + " grados Celsius equivalen a " + fahrenheit + " grados Fahrenheit." );
