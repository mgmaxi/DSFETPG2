const calcularAreaRectangulo = (longitud, ancho) => longitud * ancho;

/*  Calculo el área recibiendo por paramétro la longitud y el area, y multiplico ambos valores, el resultado es devuelto con el return implicito de la arrow function.*/

console.log('Solución 1');

console.log(
  'Resultado 1: ' +
    calcularAreaRectangulo(5, 3) +
    '\nResultado 2: ' +
    calcularAreaRectangulo(15, 5) +
    '\nResultado 3: ' +
    calcularAreaRectangulo(5, 5)
);

console.log('______________');

const contarPalabras = (string) => string.split(' ').length;

/* La función recibe un string, creo un array de strings y cada valor valor del string se genera a partir del espacio. Por último cuento con el método length la cantidad de valores del array. */

console.log('Solución 2');

console.log(
  'Resultado 1: ' +
    contarPalabras('Humahuaca es un lugar copado') +
    '\nResultado 2: ' +
    contarPalabras('Haciendo el trabajo práctico un fin de semana') +
    '\nResultado 3: ' +
    contarPalabras('Fin de semana largooo')
);

console.log('______________');

const contarVocales = (string) =>
  string
    .split('')
    .filter(
      (i) => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u'
    ).length;
// recibo el string por parametro en la funcion, luego lo divido en un array separandolo por cada letra como valor de array, y a ese array le aplico el metodo filter para filtrar los valores del array por un criterio, en este caso valores que sean vocales, ese nuevo array con los valores que cumplieron esa condicion le aplico el método length para contarlo y asi obtener el resultado deseado.

console.log('Solución 3');

console.log(
  'Resultado 1: ' +
    contarVocales('JavaScript') +
    '\nResultado 2: ' +
    contarVocales('React') +
    '\nResultado 3: ' +
    contarVocales('Desarrollador de Software')
);

console.log('______________');

/* console.log('Solucion 4');  */

const edadCanina = () => prompt('Ingresa tu edad') * 7;

console.log('Solucion 5');

console.log(
  'Resultado 1: Tu perro tiene ' +
    edadCanina() +
    ' años humanos.\n' +
    'Resultado 2: Tu perro tiene ' +
    edadCanina() +
    ' años humanos.\n' +
    'Resultado 3: Tu perro tiene ' +
    edadCanina() +
    ' años humanos.\n'
);

console.log('______________');

/*
console.log('Solucion 6');

console.log('Solucion 7');
 */

console.log('Solucion 8');

const productos = [
  {
    id: 1,
    nombre: 'Laptop',
    precio: 1200,
    stock: 15,
    categoria: 'electrónica',
  },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50, categoria: 'electrónica' },
  { id: 3, nombre: 'Teclado', precio: 45, stock: 30, categoria: 'electrónica' },
  {
    id: 4,
    nombre: 'Monitor',
    precio: 300,
    stock: 20,
    categoria: 'electrónica',
  },
  { id: 5, nombre: 'Libro', precio: 15, stock: 100, categoria: 'libros' },
];
// 1. Usando forEach: Mostrar en consola cada producto con su nombre y precio
/* con el método forEach recorremos cada elemento del array de objetos y mostramos por cada uno solo la propiedad nombre y precio */

productos.forEach((element) =>
  console.log(
    'Nombre producto: ' + element.nombre + ' - Precio: $' + element.precio
  )
);

// 2. Usando map: Crear un array con solo los nombres de los productos
/* con el método map recorremos el array de productos y devolvemos un nuevo array de strings que contiene solo la propiedad nombre de cada uno */

const nombreDeProductos = productos.map((e) => e.nombre);
console.log(nombreDeProductos);

// 3. Usando filter: Obtener productos electrónicos con stock mayor a 20
/* con el método filter, obtenemos un nuevo array solo con los objetos que cumplan la condicion que indicamos, en este caso que sea el valor de la propiedad stock mayor a 20 */

const productosElectronicosMasDe20Stock = productos.filter((e) => e.stock > 20);

console.log(productosElectronicosMasDe20Stock);

// 4. Usando find: Encontrar el producto con id 3
/* con el método find encontramos el objeto que tiene id 3 y lo devolvemos */

console.log(productos.find((e) => (e.id = 3)));

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
/* con el método reduce usamos el acumulador para ir sumando el resultado de la multiplicacion de los valores de la propiedad precio y stock de cada objeto, el 0 que esta como segundo argumento indica desde donde se inicia a acumular */

const valorTotalInventario = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.stock,
  0
);

console.log(valorTotalInventario);

console.log('______________');
