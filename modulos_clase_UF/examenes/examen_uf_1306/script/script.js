function calcula_f() {

    salida = " "

    var d = document.getElementById("recorrido_f").value;


    var p = parseFloat(document.getElementById("pendiente").value / 100);

    var f = 0.7;

    var calc = d * (f + p / 100);

    var v = 15.9 * Math.sqrt(calc);

    document.getElementById("salida").innerHTML = v.toFixed(2) + " Km/ h.";

}




function imprime() {
    var nombre = document.getElementById("nombre").value;
    var edad = parseInt(document.getElementById("edad").value);
    var e_civil = document.getElementById("e_civil").value;
    var ocupacion = document.getElementById("ocupacion").checked;
    var salida = "Hola " + nombre;

    if (ocupacion) {
        salida += "<br /> Parece que estás en paro.<br /> ";
    } else {
        salida += "<br /> Suerte tienes de trabajar con la que está cayendo.<br /> ";
    }


    if (edad >= 16 && edad <= 65) {
        salida += "<br /> Pues estás en edad de trabajar.<br /> ";
    } else {
        salida += "<br /> Pues NO estás en edad de trabajar.<br /> ";
    }



    switch (e_civil) {
        case "1":
            salida += "<br/> Cuando llegues a casa, ponte a jugar a la play.<br /> ";
            break;
        case "2":
            salida += "<br/> Cuando llegues a casa, mira una peli con tu pareja.<br /> ";
            break;
        default:
            salida += "<br/> Cuando llegues a casa, saluda a quien encuentres.<br /> ";
            break;
    }

    salida += "<br>El recorrido numerico de tu edad ha sido:<br> ";


    if (edad >= 120) {
        salida += "Mira aqui tenemos a...." + nombre.toUpperCase() + " EL INVENCIBLE! (va anda.. pon una edad normal.)";
    } else {
        for (let i = 1; i < edad + 1; i++) {
            if (i === edad) {
                salida += i + ".";
            } else {
                salida += i + ", ";
            }
        }

    }

    document.getElementById("salida").innerHTML = salida;
}
