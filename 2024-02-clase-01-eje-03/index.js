// Inicializar el array para  las notas
let notas = [];
let nota;
let continuar = true;

// Ingresar notas hasta que el usuario decida detenerse
while (continuar) {
    // Solicitar una nota al usuario
    nota = parseFloat(prompt("Ingrese una nota de 0 a 10"));

    // Verificar si el valor ingresado es un número válido
    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert("Por favor, ingrese una nota válida entre 0 y 10.");
        continue;
    }

    // Agregar la nota al array
    notas.push(nota);

    // Preguntar al usuario si desea ingresar otra nota
    continuar = confirm("¿Desea ingresar otra nota?");
}

//variables 
//cant de desa, apro, promo
let cantidadDesaprobados = 0;
let cantidadAprobados = 0;
let cantidadPromocionados = 0;

//entre las notas ingresadas buscar la min y la max
let minimaNota = Math.min(...notas);
let maximaNota = Math.max(...notas);

// Por cada nota verificar y contar

for (let i = 0; i < notas.length; i++) {
    let nota = notas[i];
    if (nota < 4) {
       
        cantidadDesaprobados++;
    } else {
       
        cantidadAprobados++;
        if (nota >= 7) {
           
            cantidadPromocionados++;
        }
    }
}



// Mostrar resultados
alert(`Promedio de alumnos desaprobados: ${cantidadDesaprobados}`);
alert(`Promedio de alumnos aprobados: ${cantidadAprobados}`);
alert(`Promedio de alumnos promocionados: ${cantidadPromocionados}`);
alert(`Nota mínima ingresada: ${minimaNota}`);
alert(`Nota máxima ingresada: ${maximaNota}`);
