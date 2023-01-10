function encriptarTexto(){
    var texto = document.getElementById("caja-normal").value;
    var textoeN = document.getElementById("caja-encriptada");
    var letra = [];
    var i;
    
    for( i=0;i<texto.length;i++){
        letra.push(texto.charAt(i).toLowerCase());         
    }    
    for(i=0;i<letra.length;i++){
        if(letra[i]=='a'){letra[i]= 'ai';}
        if(letra[i]=='e'){letra[i]= 'enter';}
        if(letra[i]=='i'){letra[i]= 'imes';}
        if(letra[i]=='o'){letra[i]= 'ober';}
        if(letra[i]=='u'){letra[i]= 'ufat';}
    }
    if(textoeN.value != ''){
        textoeN.value='';
    }
    
    for(i=0;i<letra.length;i++){
        textoeN.value+= letra[i];
    }
    
}

function desencriptarTexto(){
    var texto = document.getElementById("caja-normal").value;
    var textoEn = document.getElementById("caja-encriptada");
    let once = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let two = ['a', 'e', 'i', 'o', 'u'];
        for (let e = 0; e < once.length; e++) {
            texto = texto.replaceAll(once[e], two[e])
    }

    textoEn.value = texto;

    
}

function copyToClipBoard() {
    // Get the text field
    var copyText = document.getElementById("caja-encriptada");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    
  }

function limpiar(){
    var texto = document.getElementById("caja-normal");
    var textoEN = document.getElementById("caja-encriptada");
    texto.value='';
    textoEN.value='';
}