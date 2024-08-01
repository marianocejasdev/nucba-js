// E1: Condicionales, Ciclos y Funciones 

// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

function esParOImpar(numero) {

  if (numero % 2 === 0) {
    console.log(`El numero ${numero} es par`);
  } else {
    console.log(`El numero ${numero} es impar`)
  }
}

esParOImpar(1)
esParOImpar(2)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales. 

function compararNumeros(numeroA, numeroB) {
  if (numeroA > numeroB) {
    console.log(`El numero ${numeroA} es mayor que ${numeroB}`);
  } else if (numeroA < numeroB) {
    console.log(`El numero ${numeroA} es menor que ${numeroB}`);
  } else {
    console.log(`Los numeros ${numeroA} y ${numeroB} son iguales`);
  }
}

compararNumeros(1, 2);
compararNumeros(2, 2);
compararNumeros(3, 2);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5. 

function esMultiploDe5(numero) {
  if (numero % 5 === 0) {
    console.log(`El numero ${numero} es múltiplo de 5.`);
  } else {
    console.log(`El numero ${numero} no es múltiplo de 5.`);
  }
}

esMultiploDe5(15);
esMultiploDe5(24);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

function imprimirHastaNumero(numero) {
  for (let i = 0; i <= numero; i++) {
    console.log(i);
  }
}

imprimirHastaNumero(5);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

function imprimirPalabra(palabra, cantidad) {
  for (let i = 0; i < cantidad; i++) {
    console.log(palabra);
  }
}

imprimirPalabra('Nucba', 10)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array. 

function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Ejemplos de uso:
imprimirArray([1, 2, 3, 4, 5]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0". 

function imprimirArraySinQuintoElemento(array) {
  for (let i = 0; i < array.length; i++) {
    if (i !== 4) {
      console.log(array[i]);
    }
  }
}

imprimirArraySinQuintoElemento([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro. 

function multiplicarArrayPorNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * numero);
  }
}

multiplicarArrayPorNumero([1, 2, 3, 4], 5);
