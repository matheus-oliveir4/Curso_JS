function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}horas`
    if(hora >= 0 && hora <12){
        img.src ='amanhecereditado.png'
        

    } 
    else if(hora >= 12 && hora < 18)
    {
        img.src='entardecereditado1.png'
    }else {
        img.src='noiteeditado.png'
        document.body.style.background = '#4C5250'

    }
}