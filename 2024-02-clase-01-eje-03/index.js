let nota;
//contador
let contadorDesaprobado = 0, contadorAprobado = 0, contadorPromocionado = 0;
//acumulador
let acumuladorDesaprobado = 0, acumuladorAprobado = 0, acumuladorPromocionado = 0;
// valiables para nota max y min
let maxN0ta, letminNota;

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

//pregunto si la nueva nota es mayor a la anterior

if (nota>maxNota) {
    // si es asi , encontre un nuevo maximo
    maxNota = nota;
}
if (nota<minNota) {
    // si es asi , encontre un nuevo minimo
    minNota = nota;
}



} while (confirm("desea cargar otra nota?"));

alert(`Hubo ${contadorDesaprobado} alumnos desaprobados y su nota promedio fue de ${(acumuladorDesaprobado /
    contadorDesaprobado).toFixed(1)}`);
alert(`Hubo ${contadorAprobado} alumnos aprobados y su nota promedio fue de ${(acumuladorAprobado /
    contadorAprobado).toFixed(1)}`);
alert(`Hubo ${contadorPromocionado} alumnos promocionados y su nota promedio fue de ${(acumuladorPromocionado /
    contadorPromocionado).toFixed(1)}`);

    alert(`La nota maxima ${maxNota}`);
    alert(`La nota minima ${minNota}`);