function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')

    var res = document.querySelector('div#cont')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || 
        passo.value.length == 0 ){
            window.alert("[ERRO] Dados ausentes")
        } else{
            res.innerHTML = 'Contando.. '
            let i = Number(inicio.value)
            let f = Number(fim.value)
            let p = Number(passo.value)
            for(var c = i; c <= f;c += p ){
        
                res.innerHTML += ` ${c} \u{1F448}`
            }
        }
   
}