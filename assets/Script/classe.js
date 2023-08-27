/*----------------------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE------------------------------------------------------------------------------------------------------*/
var enviarUsuario
var escolhaClasse = window.document.querySelector('p#mensagemClasse')

function Classe() {
    enviarUsuario = window.document.querySelector('input#nomeUsuario')
    nomeUsuarioVal = String(enviarUsuario.value)
    if (generoVal == 'Homem') {
        escolhaClasse.innerHTML = `Escolha a sua classe`
    }
    if (generoVal == 'Mulher') {
        escolhaClasse.innerHTML = `Escolha a sua classe`
    }
}

var botaoVoltarClasse = window.document.querySelector('input#voltarClasse')
botaoVoltarClasse.addEventListener('click', voltarClasseClick)
document.addEventListener('keypress', voltarClasseAtalho)

function voltarClasseClick() {
    usuario.style.display = 'contents'
    classe.style.display = 'none'
    classeDisplay = false
}
function voltarClasseAtalho(atalho) {
    if (classeDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarClasse.click()
        }
    }
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------ESCOLHA DA CLASSE--------ESCOLHA DA CLASSE--------ESCOLHA DA CLASSE--------ESCOLHA DA CLASSE--------ESCOLHA DA CLASSE----------------------------------------------------------------------------------------------------------*/

/*----------------------GUERREIRO----------------GUERREIRO----------------GUERREIRO----------------GUERREIRO----------------GUERREIRO--------------------------------------------------------------------------------------------------------------------*/
var botaoClasseGuerreiro = window.document.querySelector('input#guerreiro')
botaoClasseGuerreiro.addEventListener('mouseover', botaoClasseGuerreiroHover)
botaoClasseGuerreiro.addEventListener('mouseout', botaoClasseGuerreiroOut)

function botaoClasseGuerreiroClick() {
    vidaCombateVal = 20, manaCombateVal = 10, energiaCombateVal = 15
    vidaVal = 20, manaVal = 10, energiaVal = 15
    classeVal = 'Guerreiro'
    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseGuerreiroHover() {
    botaoClasseGuerreiro.style.cursor = 'pointer'
    botaoClasseGuerreiro.style.background = 'red'
    botaoClasseGuerreiro.style.transition = '0.5s'
}

function botaoClasseGuerreiroOut() {
    botaoClasseGuerreiro.style.background = 'black'
}

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------MAGO-------------------------MAGO-----------------MAGO---------------------MAGO---------------------MAGO---------------------------------------------------------*/
var botaoClasseMago = window.document.querySelector('input#mago')
botaoClasseMago.addEventListener('click', botaoClasseMagoClick)
botaoClasseMago.addEventListener('mouseover', botaoClasseMagoHover)
botaoClasseMago.addEventListener('mouseout', botaoClasseMagoOut)

function botaoClasseMagoClick() {
    vidaCombateVal = 15, manaCombateVal = 20, energiaCombateVal = 10
    vidaVal = 15, manaVal = 20, energiaVal = 10
    classeVal = 'Mago'
    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseMagoHover() {
    botaoClasseMago.style.cursor = 'pointer'
    botaoClasseMago.style.background = 'blue'
    botaoClasseMago.style.transition = '0.5s'
}

function botaoClasseMagoOut() {
    botaoClasseMago.style.background = 'black'
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------ARQUEIRO-----------------ARQUEIRO-----------------ARQUEIRO-----------------ARQUEIRO-----------------ARQUEIRO-------------------------------------------------------------------------*/
var botaoClasseArqueiro = window.document.querySelector('input#arqueiro')
botaoClasseArqueiro.addEventListener('click', botaoClasseArqueiroClick)
botaoClasseArqueiro.addEventListener('mouseover', botaoClasseArqueiroHover)
botaoClasseArqueiro.addEventListener('mouseout', botaoClasseArqueiroOut)

function botaoClasseArqueiroClick() {
    vidaCombateVal = 15, manaCombateVal = 10, energiaCombateVal = 20
    vidaVal = 15, manaVal = 10, energiaVal = 20
    classeVal = 'Arqueiro'
    classe.style.display = 'none'
    arma.style.display = 'contents'
    Arma()
}

function botaoClasseArqueiroHover() {
    botaoClasseArqueiro.style.cursor = 'pointer'
    botaoClasseArqueiro.style.background = 'green'
    botaoClasseArqueiro.style.transition = '0.5s'
}

function botaoClasseArqueiroOut() {
    botaoClasseArqueiro.style.background = 'black'
}
/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
