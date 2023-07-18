// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición, refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".


// let email = prompt("Por favor, ingresa tu dirección de correo electrónico:")

// let resultadoDevalidar = ""

// contieneArroba(email)

// function contieneArroba(email) {
    
//     for (let i = 0; i < email.length; i++) {
//         if (email[i] === "@") {
//             resultadoDevalidar = "correo valido"
//             break
//         }else{
//             resultadoDevalidar = "correo invalido no contiene @"
//         }
//     } 
    
// }


// alert(resultadoDevalidar)

// 2) Se precisa un algoritmo que pida a través de un prompt el teléfono celular del usuario (ej: 1123456789 ) y que verifique, mediante un bucle, si este contiene 10 caracteres. Se necesitará una variable acumuladora que sume 1 cada vez que el bucle recorra cada uno de los valores de este dato. Luego de utilizar este valor, se deberá realizar una estructura que valide si el teléfono del usuario tiene 10 caracteres, si es así, se deberá mostrar una alerta que diga: "Su teléfono ingresado es válido", en caso contrario, se deberá mostrar una alerta que diga: "Su teléfono ingresado es inválido".


function validarTelefono() {
    const telefono = prompt("Por favor, ingresa tu número de teléfono celular (ej: 1123456789):")
    
    let contador = 0
    
    for (let i = 0; i < telefono.length; i++) {
        contador += 1
    }
    
    if (contador === 10) {
        alert("Su teléfono ingresado es válido.")
    } else {
        alert("Su teléfono ingresado es inválido.")
    }
}
validarTelefono()