//Ingreso con alerta 

/* let nombreUsuario = prompt("Ingresar nombre de usuario");

if((nombreUsuario == "YAMIL") || (nombreUsuario == "yamil")){
    alert("El nombre ingresaste es Yamil");
    }
else {
    alert("El nombre ingresado es incorecto");
}

let contraseña = prompt("Ingresa contraseña");

if(contraseña == "js") {
    alert("Contraseña correcta");
}
else {
    alert("Contraseña Incorrecta");
} */

//Calculadora 

/* let operacion = Number(prompt("Que operacion desea realizar? \n1 Suma \n2 Resta \n3 Multiplicación \n4 División \n5 Salir"))

while (operacion != 5) {
    let numero_Uno = parseFloat(prompt("Ingrese su primer numero"));
    let numero_Dos =  parseFloat(prompt("Ingrese su segundo numero"));
    switch(operacion) {
        case 1:
            alert(`La suma de la operacio es de ${numero_Uno + numero_Dos}`)
            break
        case 2:
            alert(`La resta de la operacion es de ${numero_Uno - numero_Dos}`)
            break
        case 3:
            alert(`La multiplicacion de la operacion es de ${numero_Uno * numero_Dos}`)
            break
        case 4:
            alert(`La division de la operacion es de ${numero_Uno / numero_Dos}`)
            break
    }
    operacion = Number(prompt("Que operacion desea realizar? \n1 Suma \n2 Resta \n3 Multiplicación \n4 División \n5 Salir"))

} */

//Precio de producto 

/* const suma = (a,b) => a + b
const resta = (a,b) => a - b

const iva = valor => valor * 0.21
let precioProducto = 500
let descuento = 50

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio) */

//DESAFIO CON ARRAYS

const ProdutosEnStock = ["BOTINES", "BOLSO", "PELOA", "CAMISETA", "CAMPERA"];
let eliminados = [];

const eliminar = (producto) => {
    let index = ProdutosEnStock.indexOf(producto)

    if (index != -1 ) {
        eliminados.push(ProdutosEnStock.splice(index, 1));
    }
}
eliminar("BOTINES");
console.log(ProdutosEnStock.length);
console.log(eliminados);

