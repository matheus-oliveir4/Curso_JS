function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 0
    if(hora >= 6 && hora <12){
        img.src ='amanhecereditado.png'
        document.body.style.background = '#F3D667'
        msg.innerHTML = `Agora são ${ hora } horas tenha um otimo dia`

    } 
    else if(hora >= 12 && hora < 18)
    {
        img.src='entardecereditado1.png'
        document.body.style.background = '#E5470F'
        msg.innerHTML = `Agora são ${ hora } horas tenha uma otima tarde`
    }else {
        img.src='noiteeditado.png'
        document.body.style.background = '#4C5250'
        msg.innerHTML = `Agora são ${ hora } horas tenha uma otima noite`

    }
}