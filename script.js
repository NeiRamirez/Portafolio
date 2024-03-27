const textArea=document.querySelector(".texto-aencriptar");
const textoTraducido=document.querySelector(".mensaje-encriptado");
const terminoss= document.querySelector(".terminos")


function btnEncriptar(){
    if(textArea.value=="")
    {
        alert("No hay texto a encriptar,introduce texto");
    }
    else
    {    
    const textoencriptado=encriptar(textArea.value);
    textoTraducido.value=textoencriptado;
    
    terminoss.innerHTML = "Texto traducido correctamente";
    
    }
}

function encriptar(texto){    
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    texto=texto.toLowerCase();
    console.log(texto);
    texto= texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    console.log(texto);


    for(let i=0; i<matrizCodigo.length;i++){
        if(texto.includes(matrizCodigo[i][0])){
            texto=texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
        }        
     }
    return texto;
}

function btnDesencriptar(){
    if(textoTraducido.value=="")
    {
        alert("No hay texto a desencriptar, introduce texto");
    }
    else{    
    const textoencriptado=Desencriptar(textArea.value);
    textoTraducido.value=textoencriptado;
    /*textArea.value="";*/
    }
}

function Desencriptar(texto){    
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"] ];
    texto=texto.toLowerCase();
    for(let i=0; i<matrizCodigo.length;i++){
        if(texto.includes(matrizCodigo[i][1])){
            texto=texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); 
        }        
     }
    return texto;
}

function borrar(){
    terminoss.innerHTML = "Introduce solo letras minuscuas y sin acentos";
    textArea.value="";
    //textoTraducido.value=""
}

/*function copiarcontenido(){
    
    document.querySelector('.copiar').addEventListener('click', function(){
        let copyText = document.querySelector('.mensaje-encriptado').value;
        navigator.clipboard.writeText(copyText).then(()=>{            
        
        })
    })     
}*/
function copiarcontenido(){
    var copiado=document.querySelector(".mensaje-encriptado");
    copiado.select();
    document.execCommand("Copy");  
}



