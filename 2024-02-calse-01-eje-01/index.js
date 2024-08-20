const max = parseInt(prompt("ingrese el maximo para comparar"));
const min = parseInt(prompt("ingrese el minimo para comparar"));

// pido numero para comprar

const num =  parseInt(prompt("ingrese el num a para comparar"));

//verifico si el numero esta en rango 
if (num>=min && num<=max) {
    //entro axa slo si el num estaentre el max y el min
    alert("El numero esta en rango");
    
} else {
    alert("El numero esta fuera rango");
}

//preguntar si es par

if (num % 2 ==1){
    //es impar porq el resto fue 1
    alert("El numero es impar");

}
else {
    //es impar porque el resto fue 0
    alert("El numero es par"); 
}