function reset() {
    document.getElementById("inputDolares").value = null;
    document.getElementById("inputLibras").value = null;
    document.getElementById("inputYenes").value = null;
    document.getElementById("outputEuros").innerHTML = null;

    document.getElementById("inputLeche").value = null;
    document.getElementById("inputYogures").value = null;
    document.getElementById("inputLentejas").value = null;
    document.getElementById("inputCebollas").value = null;
    document.getElementById("inputMelocotones").value = null;
    document.getElementById("outputCuenta").innerHTML = null;

    document.getElementById("cantidadPs").innerHTML = null;
    document.getElementById("cantidadAs").innerHTML = null;
    document.getElementById("cantidadULs").innerHTML = null;
}

function conversor(tipo, cantidad) {
    divisas={dolar:1.14, libra:0.87, yen:125.98};

    document.getElementById("outputEuros").innerHTML = cantidad/divisas[tipo];
}

function tpv(){
    precios={leche:1.25, yogures:0.74, lentejas:1.49, cebollas:1.25, melocotones:1.79};
    var temp = 0;

    temp += precios['leche'] * document.getElementById("inputLeche").value;
    temp += precios['yogures'] * document.getElementById("inputYogures").value;
    temp += precios['lentejas'] * document.getElementById("inputLentejas").value;
    temp += precios['cebollas'] * document.getElementById("inputCebollas").value;
    temp += precios['melocotones'] * document.getElementById("inputMelocotones").value;
    temp += (0.065 * temp); // 6,5% I.G.I.C. general
    document.getElementById("outputCuenta").innerHTML = temp+" euros";
}

function contar(){
    document.getElementById("cantidadPs").innerHTML = document.getElementsByTagName("p").length;
    document.getElementById("cantidadAs").innerHTML = document.getElementsByTagName("a").length;
    document.getElementById("cantidadULs").innerHTML = document.getElementsByTagName("ul").length;
}

$('body').onload(reset());
