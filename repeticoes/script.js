function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')

    /*var pass = Number(passo.value)
    var res = document.querySelector('input#cont')*/
    
    if(inicio.value.length == 0 || fim.value.length == 0 || 
        passo.value.length == 0 ){
            window.alert("[ERRO] Dados ausentes")
        } else{
            alert("Tudo OK")
        }
   /* for(c = Number(inicio.value); c <= Number(fim.value);c = c+pass ){
        
        res.innerHTML = `${c}`
    }*/
}