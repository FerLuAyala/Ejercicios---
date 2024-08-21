let nota;
//contador
let contadorDesaprobado = 0, contadorAprobado = 0, contadorPromocionado = 0;
//acumulador
let acumuladorDesaprobado = 0, acumuladorAprobado = 0, acumuladorPromocionado = 0;

do {
    //lo que se repite al menos 1 vez
    nota = parseInt(prompt("Ingrese una nota de 0 a 10"));

    // empiezo a preguntar

    if (nota < 4) {

        //desaprobado
        contadorDesaprobado = contadorDesaprobado + 1;
        acumuladorDesaprobado = acumuladorDesaprobado + nota;

    } else {

        //aprobados
        contadorAprobado++;
        acumuladorAprobado += nota;

        //pregunto si promociono
        if (nota >= 7) {

            //promocionados
            contadorPromocionado++;
            acumuladorPromocionado += nota;
        }
    }

} while (confirm("desea cargar otra nota?"));

alert(`Hubo ${contadorDesaprobado} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobado /
    contadorDesaprobado).toFixed(1)}`);
alert(`Hubo ${contadorAprobado} alumnos aprobados y su nota promedio fue de ${(acumuladorAprobado /
    contadorAprobado).toFixed(1)}`);
alert(`Hubo ${contadorPromocionado} alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionado /
    contadorPromocionado).toFixed(1)}`);