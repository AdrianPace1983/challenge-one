
//e --> enter
//o --> ober
//i -->imes
//a -->ai
//u -->ufat


function encriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    // i es para que afecte tanto mayus como minus tanto para e o E
    // g sirve para toda la linea o racion
    // m es para que afecte multiples lineas
    var txtCifrado = texto.replace(/e/igm, "enter");
    txtCifrado = txtCifrado.replace(/o/igm, "ober");
    txtCifrado = txtCifrado.replace(/i/igm, "imes");
    txtCifrado = txtCifrado.replace(/a/igm, "ai");
    txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgmuñe").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
}

function desencriptar() {
    var texto = document.getElementById("inputtexto").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm, "e");
    txtCifrado = txtCifrado.replace(/ober/igm, "o");
    txtCifrado = txtCifrado.replace(/imes/igm, "i");
    txtCifrado = txtCifrado.replace(/ai/igm, "a");
    txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgmuñe").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.getElementById("texto2");
    contenido.select ();
    document.execCommand("copy");
    alert("se ha copiado el texto");

    //var range = document.createRange();
    //range.selectNode(contenido);
   // window.getSelection().removeAllRanges();
    //window.getSelection().addRange(range);
    //navigator.clipboard ="Copiado"
    //window.getSelection().removeAllRanges();
    //alert("Texto copiado");

}