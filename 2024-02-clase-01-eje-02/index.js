let cat = parseInt(prompt("ingresecategoria (1 - 2 -3 ) para salarios usd 1000 , usd 1500 , usd 2000"));

let subcat = prompt("Elija la subcategoria (A - B - C) para multiplixadores de 1.5 , 2 y 2.5");

// asigno sueldo segun la categoria

let sueldo = 1000;

if (cat == 1) {
    sueldo = 1000;


} else if (cat == 2) {
    sueldo = 1500;


} else if (cat == 3) {
    sueldo = 2000;
}


//

//multiplicar segun la categoria

switch (subcat.toUpperCase()) {
    case "A":
        sueldo = sueldo * 1.5;
        break;

    case "B":
        sueldo = sueldo * 2;
        break;

    case "C":
        sueldo *= 2.5;
        //es lo mismo que sueldo=sueldo*2.5
        break;

    default:
        sueldo = 0;
        
        break;
}

// preguntar por rangos  
if (sueldo >= 1500 || sueldo <= 3000) {
    alert(`El sueldo es de ${sueldo}. Es de rango Inicial`);

} else if (sueldo > 3000 || sueldo <= 4000) {
    alert(`El sueldo es de ${sueldo}.Es de rango Intermedio`);

} else if (sueldo > 4000) {
    alert(`El sueldo es de ${sueldo}. Es de rango Avanzado`);
}
