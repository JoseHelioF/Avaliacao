function alteratipo(){
    let tipo = document.getElementsByClassName("tipo") 
    console.log(tipo);   
    
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
