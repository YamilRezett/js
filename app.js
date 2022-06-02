let nombreUsuario = prompt("Ingresar nombre de usuario");

if((nombreUsuario == "YAMIL") || (nombreUsuario == "yamil")){
    alert("El nombre ingresaste es Yamil");
    }
else {
    alert("El nombre ingresado es incorecto");
}

let contraseña = prompt("Ingresa contraseña");

if(contraseña == " ") {
    alert("Contraseña Incorrecta");
}
else {
    alert("Contraseña Correcta");
}

let operacion = Number(prompt("Que operacion desea realizar? \n1 Suma \n2 Resta \n3 Multiplicación \n4 División \n5 Salir"))

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

}