function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente ")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade <12){
                img.setAttribute('src', 'img/crianca.jpg')
            } else if(idade >=12 && idade < 18 ){
                img.setAttribute('src', 'img/adolescente.jpg')
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', 'img/adulto.jpg')
            }
            else if(idade >= 60){
                img.setAttribute('src', 'img/idoso.jpg')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos`
        res.appendChild(img)
    }

    
}