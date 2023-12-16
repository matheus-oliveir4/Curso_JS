function calcular(){
    var num = document.querySelector('input#txtnum')
    var res = document.querySelector('div#res')
    var tab = document.querySelector('select#seltab')
    let a = Number(num.value)
    tab.innerHTML=''
    for(c=0; c <= 10 ; c++){
    var soma = c*a
    let item = document.createElement('option')
    item.text += `${c} x ${a} = ${soma}`
    tab.appendChild(item)
    /*res.innerHTML += `${c} x ${a} = ${soma} <br>`*/ 
}}