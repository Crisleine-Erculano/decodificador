

// É usado visibility para exconder os elementos.
function criptografar() {
    document.getElementById("img").style.visibility= 'hidden';
    document.getElementById("imgs").style.visibility= 'hidden';
    document.getElementById("btn-copiar").style.display= 'block';
    // É passado o Id do campo de entrada e capturado seu valor, 
    var textoDigitado = document.getElementById("input").value;
    // é usado o replace para fazer a substituição das letras.
    var textoCriptografado = textoDigitado.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Pega o valor da saía e atribui o novo texto criptografado 
    document.getElementById("output").innerHTML = textoCriptografado ;
    
}

function descriptografar() {
    var textoRecebido = document.getElementById("output").value;
    var textoDescrip = document.getElementById("output").innerHTML
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");   
    
    document.getElementById("output").innerHTML = textoDescrip;
}
function copy(){
    var copyText = document.getElementById("output");
    copyText.select();
    document.execCommand("copy");
    alert("Texto copiado.");
    //Depois de clicar no alerta exibido na tela, o valor do input volta a ser uma string vazia, e é colocada o focus no input.
    input.value = '';
    input.focus();
    //Visibility volta a ser visível.
    document.getElementById("img").style.visibility= 'visible';
    document.getElementById("imgs").style.visibility= 'visible';
    // O botão de copiar fica escondido.
    document.getElementById("btn-copiar").style.display= 'none';
   
}




