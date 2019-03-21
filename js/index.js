function toEuros(cantidad, tipo) {
    if (tipo === "D")
    {
    	document.getElementById("outputEuros").innerHTML=cantidad/1.14;
    }
    else if (tipo === "L")
    {
    	document.getElementById("outputEuros").innerHTML=cantidad/0.87;
    }
    else
    {
    	document.getElementById("outputEuros").innerHTML=cantidad/125.98;
    }
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
