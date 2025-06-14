const calcularAreaRectangulo = (longitud, ancho) => longitud * ancho; // Calculo el área recibiendo por paramétro la longitud y el area, y multiplico ambos valores, el resultado es devuelto con el return implicito de la arrow function.

const contarPalabras = (string) => string.split(' ').length; // La función recibe un string, creo un array de strings y cada valor valor del string se genera a partir del espacio. Por último cuento con el método length la cantidad de valores del array.

const contarVocales = (string) =>
  string
    .split('')
    .filter(
      (i) => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'
    ).length;
// recibo el string por parametro en la funcion, luego lo divido en un array separandolo por cada letra como valor de array, y a ese array le aplico el metodo filter para filtrar los valores del array por un criterio, en este caso valores que sean vocales, ese nuevo array con los valores que cumplieron esa condicion le aplico el método length para contarlo y asi obtener el resultado deseado.

console.log('Solucion 1');
console.log(calcularAreaRectangulo(5, 3));

console.log('Solucion 2');
console.log(contarPalabras('Humahuaca es un lugar copado'));

console.log('Solucion 3');
console.log(contarVocales('JavaScript'));

/* console.log('Solucion 4');

console.log('Solucion 5');

console.log('Solucion 6');

console.log('Solucion 7');

console.log('Solucion 8');
 */
