/*
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
*/

let numero= null
const ComenzarJuego =()=>{
    numero = Math.floor(Math.random() * 10) + 1
    console.log(numero)
}

const compararNumero =()=>{
 const numeroIngresado = parseInt(document.getElementById("numeroIngresado").value);

    if(numeroIngresado===numero){
        alert("Adivinaste el numero")
    }else if(numeroIngresado<numero){
        alert("El numero es menor")
    }else{
        alert("El numero es mayor")
    }
}

const BotonEmpezar = document.getElementById("btnGenerarNumero")

const BotonComparar = document.getElementById("botonEnviar")

BotonEmpezar.addEventListener("click", ComenzarJuego)

BotonComparar.addEventListener("click", compararNumero)

// TE FALTA HACER QUE SE PUEDE JUGAR VARIAS VECES Y NO SE RECARGE
// Y QUE MUESTRE SI ESTA CERCA O LEJOR DEL NRO
