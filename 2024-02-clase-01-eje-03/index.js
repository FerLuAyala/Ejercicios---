let nota;
//contador
let contadorDesaprobado = 0, contadorAprobado = 0, contadorPromocionado = 0;
//acumulador
let acumuladorDesaprobado = 0, acumuladorAprobado = 0, acumuladorPromocionado = 0;
// valiables para nota max y min
let maxNota, letminNota;

do {

    let nota;
    let notaValida=true;
    do {
    
    nota = parseInt(prompt("Ingrese una nota de 1 a 10"));
    
    
    //validacion
    //Esto va a devolver 
    //numero entre 1 y 10
    //Numero menor a 1
    //numero mayor a 10
    //- Nan No numero
   
    //capturar los errores

    if (isNaN(nota)) {
        alert("ingrese una nota numerica");
        let notaValida=false;
    }
    else if (nota < 1){
        alert("La nota debe ser 1 o mas");
        let notaValida=false;
    }
    else if (nota > 10){
        alert("La nota NO debe ser mayor a 10");
        let notaValida=false;
    } else {
        let notaValida= true;
    }


    } while (!notaValida);
    
    
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