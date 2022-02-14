const CHAVE =   "ChaveBanco"

function gravarBD(){
    localStorage.setItem(CHAVE, JSON.stringify(registro) )
}

function gravaregistro(){
    registro.nome = document.getElementsByTagName('input')[0].value
    registro.cpf = document.getElementsByTagName('input')[3].value
    registro.cnpj = document.getElementsByTagName('input')[4].value
    registro.rg = document.getElementsByTagName('input')[5].value
    registro.ie = document.getElementsByTagName('input')[6].value
    registro.tel = document.getElementsByTagName('input')[7].value
    console.log(registro);
    gravarBD()
}


function alteratipo(){
    let tipo = document.getElementsByClassName("tipo") 
       
   if(tipo[0].checked){
   document.getElementsByClassName("cnpj")[0].classList.add("esconde")
   document.getElementsByClassName("cnpj")[1].classList.add("esconde")
   document.getElementsByClassName("cpf")[0].classList.remove("esconde")
   document.getElementsByClassName("cpf")[1].classList.remove("esconde")
   }

   if(tipo[1].checked){   
   document.getElementsByClassName("cnpj")[0].classList.remove("esconde")
   document.getElementsByClassName("cnpj")[1].classList.remove("esconde")
   document.getElementsByClassName("cpf")[0].classList.add("esconde")
   document.getElementsByClassName("cpf")[1].classList.add("esconde")
   }
}

var registro = {
    nome:0,
    cpf:0,
    cnpj:0,
    rg:0,
    ie:0,
    tel:0
}

window.addEventListener('load', lerBD())