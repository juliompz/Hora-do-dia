function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById("imagem")
    var horario = new Date()
    var horas = horario.getHours()
    var min = horario.getMinutes()
    msg.innerHTML= `Agora são ${horas}h${min}min.`
    if(horas>=0 && horas<12){
        img.src = '../img/manha.png'
        document.body.style.background = 'rgb(211, 195, 156)'
    }else if(horas<18){
        img.src = '../img/tarde.png'
        document.body.style.background = 'rgb(238, 155, 48)'
    }else{
        img.src = '../img/noite.png'
        document.body.style.background = 'rgba(45, 42, 42, 0.73)'
    }
}