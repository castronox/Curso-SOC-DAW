function calcula_f() {

    var d = document.getElementById("recorrido_f").value;


    var p = parseFloat(document.getElementById("pendiente").value / 100);

    var f = 0.7;

    var calc = d * (f + p / 100);

    var v = 15.9 * Math.sqrt(calc);

    document.getElementById("salida").innerHTML = v.toFixed(2);

}




function imprime() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var e_civil = document.getElementById("e_civil").value;
    var ocupacion = document.getElementById("ocupacion").checked;
    var salida = "Hola " + nombre;

    if (ocupacion) {
        salida += "<br /> Parece que estás en paro.";
    } else {
        salida += "<br /> Suerte tienes de trabajar con la que está cayendo.";
    }


if (edad >= 16 && edad <= 65) {
    salida += "<br /> Pues estás en edad de trabajar.";
} else {
    salida += "<br /> Pues NO estás en edad de trabajar.";
}

    

    switch (e_civil) {
        case "1":
            salida += "<br/> Cuando llegues a casa, ponte a jugar a la play.";
            break;
        case "2":
            salida += "<br/> Cuando llegues a casa, mira una peli con tu pareja.";
            break;
        default:
            salida += "<br/> Cuando llegues a casa, saluda a quien encuentres.";
            break;
    }

    document.getElementById("salida").innerHTML = salida;
}
