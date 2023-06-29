

var empleados = ['juan', 'pablo', 'anabel', 'belen.', 'jesus'];

var salidat = empleados.slice(1, 4);

document.getElementById('salida_1').innerHTML = "El método <span> slice() </span> selecciona una parte del array y lo retorna, se han utilizado los parámetros 1 y 4 respectivamente para ejemplarizar el reetorno de datos:<br/>  <span>" + salidat + "</span>";

salidat = empleados.sort();

document.getElementById('salida_2').innerHTML = "El método <span> sort() </span> ordena los elementos de un array, alfabética o numeralmente, de manera que nuestro array quedaría de la siguiente manera:<br /> <span>" + salidat + "</span>";

var salidat = empleados.slice(1, 4);

document.getElementById('salida_1').innerHTML = "El método <span>slice()</span> selecciona una parte del array y lo retorna. Se han utilizado los parámetros 1 y 4 respectivamente para ejemplarizar el retorno de datos:<br/> <span>" + salidat + "</span>";

salidat = empleados.sort();

document.getElementById('salida_2').innerHTML = "El método <span>sort()</span> ordena los elementos de un array, alfabética o numeralmente. De esta manera, nuestro array quedaría de la siguiente manera:<br /> <span>" + salidat + "</span>";

var eliminados = empleados.splice(2, 1, 'maría', 'carlos');

document.getElementById('salida_3').innerHTML = "El método <span>splice()</span> añade o quita elementos de un array. En este caso, se ha quitado un elemento en la posición 2 y se han añadido 'maría' y 'carlos'. Los elementos eliminados son:<br /> <span>" + eliminados + "</span>";

var arrayString = empleados.toString();

document.getElementById('salida_4').innerHTML = "El método <span>toString()</span> convierte el array a un String. El array convertido a String sería:<br /> <span>" + arrayString + "</span>";

var nuevoTamanio = empleados.unshift('luis', 'ana');

document.getElementById('salida_5').innerHTML = "El método <span>unshift()</span> añade elementos al inicio del array y retorna el nuevo tamaño. Después de añadir 'luis' y 'ana', el nuevo tamaño del array es:<br /> <span>" + nuevoTamanio + "</span>";

var valorPrimitivo = empleados.valueOf();

document.getElementById('salida_6').innerHTML = "El método <span>valueOf()</span> retorna el valor primitivo de un array. El valor primitivo del array es:<br /> <span>" + valorPrimitivo + "</span>";

var empleadosConcat = empleados.concat(['pedro', 'laura']);

document.getElementById('salida_7').innerHTML = "El método <span>concat()</span> une dos o más arrays. Al unir el array original con ['pedro', 'laura'], el nuevo array resultante es: <br /> <span>" + empleadosConcat + "</span>";

var posicion = empleados.indexOf('anabel');

document.getElementById('salida_8').innerHTML = "El método <span>indexOf()</span> busca un elemento en el array y retorna su posición. La posición de 'anabel' en el array es:<br /> <span>" + posicion + "</span>";

var empleadosJoin = empleados.join('-');

document.getElementById('salida_9').innerHTML = "El método <span>join()</span> junta los elementos de un array en un String. Al unir los elementos del array con el separador '-', el resultado es:<br /> <span>" + empleadosJoin + "</span>";

var ultimaPosicion = empleados.lastIndexOf('jesus');

document.getElementById('salida_10').innerHTML = "El método <span>lastIndexOf()</span> busca la última aparición de un elemento en el array y retorna la posición. La última posición de 'jesus' en el array es:<br /> <span>" + ultimaPosicion + "</span>";

var ultimoElemento = empleados.pop();

document.getElementById('salida_11').innerHTML = "El método <span>pop()</span> quita el último elemento del array y lo retorna. El último elemento quitado del array es:<br /> <span>" + ultimoElemento + "</span>";

var nuevoTamanioPush = empleados.push('daniel');

document.getElementById('salida_12').innerHTML = "El método <span>push()</span> añade un nuevo elemento al final del array y retorna su tamaño. Después de añadir 'daniel', el nuevo tamaño del array es:<br /> <span>" + nuevoTamanioPush + "</span>";

empleados.reverse();

document.getElementById('salida_13').innerHTML = "El método <span>reverse()</span> invierte el orden de los elementos. Después de invertir el orden, el array queda:<br /> <span>" + empleados + "</span>";

var primerElemento = empleados.shift();

document.getElementById('salida_14').innerHTML = "El método <span>shift()</span> quita el primer elemento del array y lo retorna. El primer elemento quitado del array es:<br /> <span>" + primerElemento + "</span>";
