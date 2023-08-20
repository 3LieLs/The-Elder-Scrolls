var tutorialMensagemVal = window.document.querySelector('p#mensagemTutorial')
tutorialMensagemVal.innerHTML = `Muito bem, ${nomeUsuarioVal}, aqui terminamos a nossa personalização<br>As regras são simples. Tente manusear bem os gastos da sua energia e mana, e obviamente, NÃO MORRA.`

var botaoComecarAventura = window.document.querySelector('input#comecarAventura')
botaoComecarAventura.addEventListener('click', botaoComecarAventuraClick)
botaoComecarAventura.addEventListener('mouseover', botaoComecarAventuraHover)
botaoComecarAventura.addEventListener('mouseout', botaoComecarAventuraOut)

function botaoComecarAventuraClick() {
    tutorial.style.display = 'none'
    definirEstatisticaUsuario()
    definirEstatisticaGolem()
    mainHud.style.display = 'contents'
    faseGolem = true
    mainFaseGolem.style.display = 'contents'
}
function botaoComecarAventuraHover() {
    botaoComecarAventura.style.cursor = 'pointer'
    botaoComecarAventura.style.background = 'orange'
    botaoComecarAventura.style.transition = '0.5s'
}
function botaoComecarAventuraOut() {
    botaoComecarAventura.style.background = 'gray'
}