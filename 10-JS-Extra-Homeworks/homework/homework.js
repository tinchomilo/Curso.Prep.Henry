// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var lista = [];
  for (clave in objeto) {
    lista.push([clave, objeto[clave]]);
  }
  return lista;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //   var obj = {};
  //   var array = string.split('');
  //   for (i = 0; i < array.length; i++) {
  //     var indices = [];
  //     var element = array[i];
  //     var idx = array.indexOf(element);
  //     while (idx != -1) {
  //       indices.push(idx);
  //       idx = array.indexOf(element, idx + 1);
  //     }
  //     obj[array[i]] = indices.length
  //   }
  //   return obj;
  // }
  var obj = {};
  var array = string.split('');
  for (var i = 0; i < array.length; i++) {
    if (!obj.hasOwnProperty(array[i]))
      obj[array[i]] = 0

    obj[array[i]] = obj[array[i]] + 1
  }

  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayus = [];
  var minus = [];
  var str = s.split('');
  str.forEach(function (elem, i) {
    if (str[i] === str[i].toUpperCase())
      mayus.push(str[i]);

    if (str[i] === str[i].toLowerCase())
      minus.push(str[i]);
  })
  return s = mayus.join('') + minus.join('');
}



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var array = str.split(' ');
  var mirror = [];
  for(var i = 0; i < array.length; i++) {
    mirror.push(array[i].split('').reverse().join(''))
  }
  return mirror.join(' ');
}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var num = numero.toString();
  if (num === num.split('').reverse().join(''))
    return 'Es capicua';
  return 'No es capicua'


}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var chain = cadena.split('');
  var newChain = [];
  if (!chain.includes('a') && !chain.includes('b') && !chain.includes('c')) {
    return cadena;
  }
  for (var i = 0; i < chain.length; i++) {
    if (chain[i] != 'a' && chain[i] != 'b' && chain[i] != 'c') {
      newChain.push(chain[i]);
    }
  }
  return newChain.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (a, b) {
    return a.length - b.length;
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var union = [];
  if (arreglo1.length >= arreglo2.length) {
    for (var i = 0; i < arreglo1.length; i++) {
      for (var j = 0; j < arreglo1.length; j++) {
        if (arreglo1[i] === arreglo2[j]) {
          union.push(arreglo1[i]);
        }
      }
    }
    return union;
  }
    for (var i = 0; i < arreglo2.length; i++) {
      for (var j = 0; j < arreglo2.length; j++) {
        if (arreglo2[i] === arreglo1[j]) {
          union.push(arreglo2[i]);
        }
      }
    }
  return union;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

