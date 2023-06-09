// EJERCICIO 1:
var nombre = "Matias Rodriguez"
var profesion = "Desarrollador"
var edad = "25 años"

console.log(nombre + " " + profesion + " " + edad) //--------> CONCATENO LOS DATOS DE LAS VARIABLES FORMANDO UNA ORACION

// EJERCICIO 2:
if (edad == "25 años") { //-------------------------------------------> CONDICION
    console.log("“El usuario tiene 25 años") //-----------------------> QUE HACER SI SE CUMPLE
} else {
    console.log("El usuario no coincide con la edad ingresada") //----> QUE HACER SI NO SE CUMPLE
}

// EJERCICIO 3:
var infoUsuario = document.getElementById("container").innerHTML = ("Nombre: " + nombre + " " + "Profesion: " + profesion + " " + "Edad: " + edad + " ")

//EJERCICIO 4:
const producto = "Chocolates";

const valorCaja = 100; // -------------> VALOR DE LA CAJA DE CHOCOLATES

const iva = valorCaja * 0.16; // ------> CALCULO DEL IVA

const total = valorCaja + iva; // -----> TOTAL A PAGAR (VALOR DEL CHOCOLATE + EL IVA)

console.log("El total a pagar es: $" + total);

//EJERCICIO 5:
var numero = 8 //------------------------> ACA SE ESCRIBE EL NUMERO QUE QUEREMOS SABER SI ES PAR O IMPAR 

function numeroParOImpar(numero) { //----> ACA DETERMINO LA FUNCION PARA DESPUES PODER CONSOLE LOGEARLA
  if (numero % 2 == 0) { //------------> SI ES DIVISIBLE POR 2, DEVUELVO "PAR"
    return "Par";
  } else {
    return "Impar"; //-----------------> SINO DEVUELVO "IMPAR"
  }
}

var resultado = numeroParOImpar(numero) //----> CREO LA VARIABLE "RESULTADO" QUE ME ALMACENE MI FUNCION
console.log(resultado) //---------------------> CONSOLE LOGEO EL RESULTADO

// EJERCICIO 6:

// EJERCICIO 7:
for (var i = 1; i <= 20; i++) { //--------------> COMIENZO EN 1; RECORRO LOS NUMEROS DEL 1 AL 20; INCREMENTO EN 1 SU VALOR
  if (i % 3 == 0 & i % 5 == 0) { //-----------> SI EL NUMERO ES DIVISIBLE POR LOS 2 NUMEROS MUESTRO "FIZZBUZZ" Y SALGO DEL FOR, SINO PRUEBO CON LA SIGUIENTE CONDICION
    console.log("FizzBuzz");
  } else if (i % 3 == 0) { //-----------------> SI EL NUMERO ES DIVISIBLE POR 3 MUESTRO "FIZZ" Y SALGO DEL FOR, SINO PRUEBO CON LA SIGUIENTE CONDICION
    console.log("Fizz");
  } else if (i % 5 == 0) { //-----------------> SI EL NUMERO ES DIVISIBLE POR 5 MUESTRO "BUZZ" Y SALGO DEL FOR, SINO YA NO QUEDAN CONDICIONES A CUMPLIR ASI QUE CAIGO EN EL ELSE
    console.log("Buzz");
  } else {
    console.log(i); //------------------------> SI NINGUNA CONDICION SE CUMPLE MUESTRO I (OSEA EL NUMERO)
  }
}

// EJERCICIO 8:
var suma = 0 //-------------------------> ESTA VARIABLE ME ALMACENA EL VALOR ACTUAL DE LA SUMA

for (var i = 1; i <= 100; i++) { //-----> ACA HAGO QUE VAYA SUMANDO NUMERO POR NUMERO (ARRANCANDO EN 1 Y TERMINANDO EN 100)
  suma += i; //-------------------------> ESTO ME SUMA EL NUMERO QUE VA ACTUALMENTE EN EL RECORRIDO A LA SUMA; Y VUELVE A INICIAR EL FOR CON EL SIGUENTE NUMERO
}

console.log("Suma: " + suma);

// EJERCICIO 9:
var arrayNumeros = [1, 2, 3, 200, 0]; //-------------> CREO MI ARRAY DE NUMEROS

for (let i = 0; i < arrayNumeros.length; i++) { //---> RECORRO EL ARRAY CON EL .LENGTH (ARRANCANDO EN EL INDICE 0 Y ITERANDO DE A 1)
  console.log(arrayNumeros[i]); //-------------------> ACA MUESTRO EN CONSOLA EL NUMERO SOBRE EL QUE ESTA PARADO [I] EN EL INDICE DE MI ARRAY DE NUMEROS
}

// EJERCICIO 10:

function contadorDeCaracteres(arrayPalabras) { //-------------------------------> ESTA FUNCION VA A CREAR UN CONTADOR EN BASE AL ARRAY DE PALABRAS
  var totalCaracteres = 0; //---------------------------------------------------> ESTA VARIABLE ME ALMACENARA EL TOTAL DE CARACTERES 

  for (var i = 0; i < arrayPalabras.length; i++) { //---------------------------> CON ESTO RECORRO EL ARRAY DE PALABRAS EN BASE AL INDICE DE CADA LETRA
    totalCaracteres += arrayPalabras[i].length; //------------------------------> ACA SE SUMAN LOS CARACTERES CON EL [I] A TRAVES DE TODO LA LONGITUD DEL ARRAY DE PALABRAS
  }

  return totalCaracteres; //----------------------------------------------------> ESTO ME DEVUELVE EL NUEVO VALOR DE LA PRIMER VARIABLE; QUE NOS ALMACENABA EL TOTAL DE CARACTERES
}

var palabrasAContar = ["Hola", "me llamo", "Osvaldo", "y estoy haciendo el curso de js"]; //-----------------------> ACA HAY QUE PONER LAS PALABRAS QUE QUEREMOS CONTAR SUS CARACTERES
var cantidadDeCaracteres = contadorDeCaracteres(palabrasAContar); //------------> ACA ALMACENAMOS EL VALOR DEL RESULTADO EN UNA VARIABLE; (EL RESULTADO VA A SER... EL USO DE LA FUNCION QUE CREAMOS, SOBRE LA FUNCION QUE HICIMOS PARA ALMACENAR LAS PALABRAS QUE QUEREMOS CONTAR LOS CARACTERES)
console.log("La cantidad total de caracteres es:", cantidadDeCaracteres); //----> CONSOLE LOGEA EL RESULTADO
