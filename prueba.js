 var textoEn = "hoberlai";
 var enc=[];
 var letra = [];
 for( i=0;i<textoEn.length;i++){
    letra.push(textoEn.charAt(i).toLowerCase());         
}

enc= letra.slice(1,3);
alert(enc);