// Practica en equipos


// function circulo(pi, radio, resultado){
//     var resultado = pi * (radio*radio);
//     alert(resultado);
//     }

// circulo(3.1416, 10);

// function rectangulo(base, altura, resultado){
//     var resultado = base * altura;
//     alert(resultado);
//     }
    
// rectangulo(3, 4);

// function triangulo(base, altura, resultado){
//         var resultado = (base * altura)/2;
//         alert(resultado);
//         }
        
// triangulo(3, 4);


// function areacuadrado(lado, resultado){
//     var lado = prompt("Ingresa la medida del lado del cuadrado, por favor")
//     var resultado = lado * lado;
//     alert('El área del cuadrado es: ' + resultado);
// }
// areacuadrado();

// function confirmacion() {
//     var pregunta = confirm("Quieres visitar google.com y buscar imágenes de perritos")
//     if (pregunta){
//             alert('Te enviare rapidamente')
//             window.location = "https:www.google.com";
//         }
//         else {
//             alert("Ok, nos vemos luego");
//         }
// }

//Get ElementbyId

// function color(nuevocolor){
//     var elem = document.getElementById("parrafo");
//    elem.style.color = nuevocolor;
// }

function Accion (Tipo){
    var elem = document.getElementById ("divbotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}