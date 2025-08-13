//DOM - evento que irá participar do DOM

const x = document.querySelector('#x')
    //procura na página html se existe algo com o nome 'x', 
    //se tiver o apelido agora é 'x'

const btneymar = document.querySelector('#btneymar')
const btcr7 = document.querySelector('#btcr7')
const btmessi = document.querySelector('#btmessi')

//EVENTOS - oque você faz para que aconteça algo

btneymar.addEventListener('click', neymar)
    //ao clicar no botão neymar acione a função neymar

btcr7.addEventListener('click', cr7)
btmessi.addEventListener('click', messi)

//FUNÇÃO - realiza a ação
function neymar(){
    x.src = 'images/ney.webp'

}

function cr7(){
    x.src = 'images/cr7.webp'
}


function messi(){
    x.src = 'images/messi.jpg'
}
