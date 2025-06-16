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

const esPalindromo = (string) => {
  const sinEspacios = string.split(' ').join('').toLowerCase();
  return sinEspacios === sinEspacios.split('').reverse().join('');
}

/* recibo el string por parametro, elimino los espacios usando split, uno todo con join, y convierto todo en minuscula con toLowerCase para evitar errores por mayusculas, guardandolo en una nueva constante. Luego comparo esa constante con su versión invertida, que obtengo convirtiendola en un array de caracteres con split, invirtiendo el orden con reverse y volviendo a unirlo en un string con join. Si ambos strings son iguales, significa que es un palíndromo, por lo que devuelve true; de lo contrario, false. */

console.log('Solucion 4')

console.log(
  'Resultado 1: ' +
  esPalindromo('neuquen') +
  '\nResultado 2: ' +
  esPalindromo('reconocer o Reconocer ') +
  '\nResultado 3: ' +
  esPalindromo('fallar')
);

console.log('______________');

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

const capitalizarPalabras = (string) => {
  return string
    .split(' ')
    .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ');
}

/* recibo un string por parametro, lo divido en un array de palabras usando split, luego uso map para seleccionar la primer letra de cada palabra con charAt(0), tranformarla en mayuscula y agregarle el resto de los caracteres en el formato original con slice(1). Finalmente, uno todas las palabras transformadas en un solo string usando join con espacios, y retorno ese resultado. */

console.log('Solucion 6');

console.log(
  'Resultado 1: ' +
  capitalizarPalabras("hola mundo desde javascript") +
  '\nResultado 2: ' +
  capitalizarPalabras("capitalizando palabras con javascript") +
  '\nResultado 3: ' +
  capitalizarPalabras("practicando funciones el fin de semana")
);

console.log('______________');

const fibonacci = (n) => {
  const numeros = [];
  for (let i = 0; i < n; i++) {
    if (i == 0) numeros.push(0);
    else if (i == 1) numeros.push(1);
    else numeros[i] = numeros[i -1] + numeros[i - 2];
  }
  return numeros;
}

/* recibo un numero n por parametro, creo un array vacio para guardar los valores de la sucesion que se crean en el bucle for que se repite n veces. En cada vuelta, si es la primera posicion agrego 0, si es la segunda agrego 1, y a partir de ahi voy sumando los dos ultimos valores del array para obtener el siguiente numero de Fibonacci, una vez que el bucle termina retorno el array con los primeros n numeros de la sucesion. */

console.log('Solucion 7');

console.log(
  'Resultado 1: ' +
  fibonacci(5) +
  '\nResultado 2: ' +
  fibonacci(1) +
  '\nResultado 3: ' +
  fibonacci(12)
)

console.log('______________');

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

console.log(productos.find((e) => (e.id === 3)));

// 5. Usando reduce: Calcular el valor total del inventario (precio * stock)
/* con el método reduce usamos el acumulador para ir sumando el resultado de la multiplicacion de los valores de la propiedad precio y stock de cada objeto, el 0 que esta como segundo argumento indica desde donde se inicia a acumular */

const valorTotalInventario = productos.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.stock,
  0
);

console.log(valorTotalInventario);

console.log('______________');

console.log('Solucion 9');

const estudiantes = [
  { id: 1, nombre: 'Ana', edad: 20, calificaciones: [8, 9, 7, 8] },
  { id: 2, nombre: 'Carlos', edad: 22, calificaciones: [6, 7, 8, 7] },
  { id: 3, nombre: 'María', edad: 21, calificaciones: [9, 9, 8, 10] },
  { id: 4, nombre: 'Juan', edad: 19, calificaciones: [7, 6, 5, 8] }
];

// 1. Usando forEach: Mostrar nombre y edad de cada estudiante
/* con el metodo forEach recorro el array de objetos y muestro por consola solo el nombre y edad de cada estudiante. */

estudiantes.forEach(estudiante => {
  console.log(`Estudiante: ${estudiante.nombre} - Edad: ${estudiante.edad}`)
});

// 2. Usando map: Crear array de objetos con nombre y promedio de calificaciones
/* con el metodo map recorro el array de objetos y por cada estudiante calculo su promedio de calificaciones utilizando reduce para sumar y divido la suma por la cantidad de calificaciones. Luego creo una nueva cadena que contiene el nombre del estudiante y su promedio. */

const estudiantesConPromedio = estudiantes.map(estudiante => {
  const promedio = estudiante.calificaciones.reduce((suma, nota) => suma + nota, 0) / estudiante.calificaciones.length;
  return `Estudiante: ${estudiante.nombre} - Promedio: ${promedio}`;
});

console.log(estudiantesConPromedio);

// 3. Usando filter: Obtener estudiantes con promedio mayor a 7.5
/* con el metodo filter recorro el array de objetos y por cada estudiante calculo su promedio de calificaciones utilizando reduce. Luego comparo ese promedio con el valor 7.5, y si es mayor lo incluyo en el nuevo array que devuelve el metodo. */

const estudiantesConPromedioMayor7_5 = estudiantes.filter(estudiante => {
  const promedio = estudiante.calificaciones.reduce((suma, nota) => suma + nota, 0) / estudiante.calificaciones.length;
  return promedio > 7.5;
});

console.log(estudiantesConPromedioMayor7_5);

// 4. Usando find: Encontrar estudiante llamado 'María'
/* con el metodo find recorro el array para encontrar el primer estudiante que tenga el nombre "María" y en caso de encontrar uno lo devuelvo. */

console.log(estudiantes.find(e => e.nombre === 'María'));

// 5. Usando reduce: Calcular la edad promedio de los estudiantes
/* con el metodo reduce recorro el array y voy sumando la edad de cada estudiante en un acumulador inicializado en 0, luego divido esa suma por la cantidad de estudiantes que obtengo con length para asi conseguir el promedio. */

const edadPromedioEstudiantes = estudiantes.reduce((suma, estudiante) => suma + estudiante.edad, 0) / estudiantes.length;

console.log(`Edad promedio de los estudiantes: ${edadPromedioEstudiantes}`);

console.log('______________');

console.log('Solucion 10');

const peliculas = [
  { id: 1, titulo: 'El Padrino', año: 1972, duracion: 175, genero: 'drama', rating: 9.2 },
  { id: 2, titulo: 'Pulp Fiction', año: 1994, duracion: 154, genero: 'crimen', rating: 8.9 },
  { id: 3, titulo: 'El Señor de los Anillos', año: 2001, duracion: 178, genero: 'fantasía', rating: 8.8 },
  { id: 4, titulo: 'Interestelar', año: 2014, duracion: 169, genero: 'ciencia ficción', rating: 8.6 },
  { id: 5, titulo: 'Parásitos', año: 2019, duracion: 132, genero: 'drama', rating: 8.6 }
];

// 1. Usando forEach: Mostrar título y año de cada película
/* Recorremos el array películas y mostramos el título y el año de cada una.*/

peliculas.forEach(p => 
  console.log(`Título: "${p.titulo}" - Año: ${p.año}`)
);

// 2. Usando map: Crear array de títulos en mayúsculas
/* Generamos un nuevo array transformando los títulos a mayúsculas utilizando el método toUpperCase. */

const titulosMayus = peliculas.map(p => p.titulo.toUpperCase());
console.log(`Titulos en MAYUSCULAS:`, titulosMayus);

// 3. Usando filter: Obtener películas de drama con rating mayor a 8.5
/* Creamos un nuevo array con dos condiciones, género: drama y rating >8.5. */

const dramasTop = peliculas.filter(
  p => p.genero === 'drama' && p.rating >8.5
);
console.log('Dramas con rating > 8.5:', dramasTop);

// 4. Usando find: Encontrar película estrenada en 2014
/* Buscamos en el array la primera película cuyo año de estreno sea 2014.
El método find devuelve el primer elemento que cumple con la condición. 
Si no existiese, obtendríamos undefined. */

const estreno2014 = peliculas.find(p => p.año === 2014);
console.log('Película estrenada en 2014:', estreno2014);

// 5. Usando reduce: Calcular la duración total de todas las películas
/* Calculamos la suma de las duraciones de todas las películas. Reduce acumula el valor total, empezando desde 0. */
const duracionTotal = peliculas.reduce(
  (acum, p) => acum + p.duracion, 0
);
console.log('Duración total de todas las peliculas (minutos):', duracionTotal);
console.log('______________');