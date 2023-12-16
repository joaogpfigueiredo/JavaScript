function carregar() {
    var data = new Date()
    var hora = data.getHours()

    var horario = document.getElementById('horario')
    var imagem = document.getElementById('imagem')

    if(hora < 13) {
        horario.innerHTML = `Agora são ${hora} horas.`
        document.body.style.backgroundColor = '#e0ce8d'
        imagem.src = 'manha.jpg'
    } else if(hora < 20) {
        horario.innerHTML = `Agora são ${hora} horas.`
        document.body.style.backgroundColor = '#84a14e'
        imagem.src = 'tarde.jpg'
    }else {
        horario.innerHTML = `Agora são ${hora} horas.`
        document.body.style.backgroundColor = '#1c2e46'
        imagem.src = 'noite.jpg'
    }
}