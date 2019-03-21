function conversor(tipo, cantidad) {
    divisas={dolar:1.14, libra:0.87, yen:125.98};

    document.getElementById("outputEuros").innerHTML = cantidad/divisas[tipo];
}

function contar(){
    document.getElementById("cantidadPs").innerHTML = document.getElementsByTagName("p").length;
    document.getElementById("cantidadAs").innerHTML = document.getElementsByTagName("a").length;
    document.getElementById("cantidadULs").innerHTML = document.getElementsByTagName("ul").length;
}
function reset(){
    document.getElementById("cantidadPs").innerHTML = null;
    document.getElementById("cantidadAs").innerHTML = null;
    document.getElementById("cantidadULs").innerHTML = null;
}

function tpv(){
    precios={leche:1.25, yogures:0.74, lentejas:1.49, cebollas:1.25, melocotones:1.79};
    var temp = 0;

    temp += precios['leche'] * document.getElementById("inputLeche").value;
    temp += precios['yogures'] * document.getElementById("inputYogures").value;
    temp += precios['lentejas'] * document.getElementById("inputLentejas").value;
    temp += precios['cebollas'] * document.getElementById("inputCebollas").value;
    temp += precios['melocotones'] * document.getElementById("inputMelocotones").value;
    temp += (0.065 * temp); // 6,5% IGIC general (desde el 01/01/2019)
    document.getElementById("outputCuenta").innerHTML = temp+" euros";
}
