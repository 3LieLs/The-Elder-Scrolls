/*----------------------------------------ESCOLHA DA CLASSE----------------------------------------*/
var enviarUsuario
var escolhaClasse = window.document.querySelector('p#mensagemClasse')
function Classe() {
    enviarUsuario = window.document.querySelector('input#nomeUsuario')
    nomeUsuarioVal = String(enviarUsuario.value)
    if (generoVal == 'Homem') {
        escolhaClasse.innerHTML = `Olá <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-lo.<br>Escolha a sua classe`
    }
    if(generoVal == 'Mulher') {
        escolhaClasse.innerHTML = `Olá, <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-la.<br>Escolha a sua classe`
    }
}
var botaoClasseGuerreiro = window.document.querySelector('input#guerreiro')
botaoClasseGuerreiro.addEventListener('mouseover', botaoClasseGuerreiroHover)
botaoClasseGuerreiro.addEventListener('mouseout', botaoClasseGuerreiroOut)

function botaoClasseGuerreiroClick() {
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

var botaoClasseMago = window.document.querySelector('input#mago')
botaoClasseMago.addEventListener('click', botaoClasseMagoClick)
botaoClasseMago.addEventListener('mouseover', botaoClasseMagoHover)
botaoClasseMago.addEventListener('mouseout', botaoClasseMagoOut)

function botaoClasseMagoClick() {
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

var botaoClasseArqueiro = window.document.querySelector('input#arqueiro')
botaoClasseArqueiro.addEventListener('click', botaoClasseArqueiroClick)
botaoClasseArqueiro.addEventListener('mouseover', botaoClasseArqueiroHover)
botaoClasseArqueiro.addEventListener('mouseout', botaoClasseArqueiroOut)

function botaoClasseArqueiroClick() {
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
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------ESCOLHA DA ARMA----------------------------------------*/
var escolhaArma = window.document.querySelector('p#mensagemArma')
var arma1 = window.document.querySelector('input#arma1'), arma2 = window.document.querySelector('input#arma2'), arma3 = window.document.querySelector('input#arma3')
var caracteristicaArma1 = window.document.querySelector('p#caracteristicaArma1'), caracteristicaArma2 = window.document.querySelector('p#caracteristicaArma2'), caracteristicaArma3 = window.document.querySelector('p#caracteristicaArma3')
var statsArma1 = window.document.querySelector('p#statsArma1'), statsArma2 = window.document.querySelector('p#statsArma2'), statsArma3 = window.document.querySelector('p#statsArma3')

function Arma() {
    if (classeVal == 'Guerreiro') {
        escolhaArma.innerHTML = `Escolha a sua arma.`
        /*----------ARMA 1 GUERREIRO---------------*/
        var botaoArma1 = window.document.querySelector('input#arma1')
        botaoArma1.addEventListener('click', botaoArma1Click)
        botaoArma1.addEventListener('mouseover', botaoArma1Hover)
        botaoArma1.addEventListener('mouseout', botaoArma1Out)
        arma1.innerHTML = `Espada`
        caracteristicaArma1.innerHTML = `Espadas são armas de uma mão com um custo baixa de energia e baixo dano ao inimigo.`
        statsArma1.innerHTML = `Dano: 3 / Energia custo: 4 / Mana Custo: 10`
        function botaoArma1Click() {
            danoVal = 3
            energiaCustoVal = 4
            manaCustoVal = 10
            armaVal = 'Espada'
            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }
        function botaoArma1Hover() {
            arma1.style.cursor = 'pointer'
            arma1.style.background = 'green'
            arma1.style.transition = '0.5s'
        }
        function botaoArma1Out() {
            arma1.style.background = 'black'
        }
        /*-----------------------------------------*/
        /*----------ARMA 2 GUERREIRO---------------*/
        var botaoArma2 = window.document.querySelector('input#arma2')
        botaoArma2.addEventListener('click', botaoArma2Click)
        botaoArma2.addEventListener('mouseover', botaoArma2Hover)
        botaoArma2.addEventListener('mouseout', botaoArma2Out)
        arma2.innerHTML = `Espada`
        caracteristicaArma2.innerHTML = `Machados são armas de uma mão com um custo médio de energia e médio dano ao inimigo.`
        statsArma2.innerHTML = `Dano: 4 / Energia custo: 6 / Mana Custo: 10`
        function botaoArma2Click() {
            danoVal = 4
            energiaCustoVal = 6
            manaCustoVal = 10
            armaVal = 'Machado'
            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }
        function botaoArma2Hover() {
            arma2.style.cursor = 'pointer'
            arma2.style.background = 'yellow'
            arma2.style.transition = '0.5s'
        }
        function botaoArma2Out() {
            arma2.style.background = 'black'
        }
        /*-----------------------------------------*/

        /*----------ARMA 3 GUERREIRO---------------*/
        var botaoArma3 = window.document.querySelector('input#arma3')
        botaoArma3.addEventListener('click', botaoArma3Click)
        botaoArma3.addEventListener('mouseover', botaoArma3Hover)
        botaoArma3.addEventListener('mouseout', botaoArma3Out)
        arma3.innerHTML = `Espada`
        caracteristicaArma3.innerHTML = `Clavas são armas de uma mão com um custo alto de energia e alto dano ao inimigo.`
        statsArma3.innerHTML = `Dano: 5 / Energia custo: 8 / Mana Custo: 10`
        function botaoArma3Click() {
            danoVal = 5
            energiaCustoVal = 8
            manaCustoVal = 10
            armaVal = 'Clava'
            arma.style.display = 'none'
            armadura.style.display = 'contents'
            Armadura()
        }
        function botaoArma3Hover() {
            arma3.style.cursor = 'pointer'
            arma3.style.background = 'red'
            arma3.style.transition = '0.5s'
        }
        function botaoArma3Out() {
            arma3.style.background = 'black'
        }
        /*-----------------------------------------*/
    }
    if (classeVal == 'Mago') {
        escolhaArma.innerHTML = `Então você resolveu escolher ${classeVal}.`
    }
    if (classeVal == 'Arqueiro') {
        escolhaArma.innerHTML = `Então você resolveu escolher ${classeVal}.`
    }
}

/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------ESCOLHA DA ARMADURA----------------------------------------*/
var escolhaArmadura = window.document.querySelector('p#mensagemArmadura')
var armadura1 = window.document.querySelector('input#armadura1'), armadura2 = window.document.querySelector('input#armadura2'), armadura3 = window.document.querySelector('input#armadura3')
var caracteristicaArmadura1 = window.document.querySelector('p#caracteristicaArmadura1'), caracteristicaArmadura2 = window.document.querySelector('p#caracteristicaArmadura2'), caracteristicaArmadura3 = window.document.querySelector('p#caracteristicaArmadura3')
var statsArmadura1 = window.document.querySelector('p#statsArmadura1'), statsArmadura2 = window.document.querySelector('p#statsArmadura2'), statsArmadura3 = window.document.querySelector('p#statsArmadura3')

function Armadura() {
    if (classeVal == 'Guerreiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`
        /*----------ARMADURA 1 GUERREIRO---------------*/
        var botaoArmadura1 = window.document.querySelector('input#armadura1')
        botaoArmadura1.addEventListener('click', botaoArmadura1Click)
        botaoArmadura1.addEventListener('mouseover', botaoArmadura1Hover)
        botaoArmadura1.addEventListener('mouseout', botaoArmadura1Out)
        armadura1.innerHTML = `Armadura de bronze`
        caracteristicaArmadura1.innerHTML = `Armadura de bronze fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmadura1.innerHTML = `Defesa: 3 / Energia recuperação: 17`
        function botaoArmadura1Click() {
            armaduraVal = 'Armadura de bronze'
            defesaVal = 3
            energiaRecuperacaoVal = 17
            manaRecuperacaoVal = 5
            armadura.style.display = 'none'
            tutorial.style.display = 'contents'
        }
        function botaoArmadura1Hover() {
            armadura1.style.cursor = 'pointer'
            armadura1.style.background = 'green'
            armadura1.style.transition = '0.5s'
        }
        function botaoArmadura1Out() {
            armadura1.style.background = 'black'
        }
        /*-----------------------------------------*/
        /*----------ARMADURA 2 GUERREIRO---------------*/
        var botaoArmadura2 = window.document.querySelector('input#armadura2')
        botaoArmadura2.addEventListener('click', botaoArmadura2Click)
        botaoArmadura2.addEventListener('mouseover', botaoArmadura2Hover)
        botaoArmadura2.addEventListener('mouseout', botaoArmadura2Out)
        armadura2.innerHTML = `Armadura de ferro`
        caracteristicaArmadura2.innerHTML = `Armadura de ferro fornece uma defesa e recuperação de energia média.`
        statsArmadura2.innerHTML = `Defesa: 5 / Energia recuperação: 14`
        function botaoArmadura2Click() {
            armaduraVal = 'Armadura de ferro'
            defesaVal = 5
            energiaRecuperacaoVal = 14
            manaRecuperacaoVal = 5
            armadura.style.display = 'none'
            tutorial.style.display = 'contents'
        }
        function botaoArmadura2Hover() {
            armadura2.style.cursor = 'pointer'
            armadura2.style.background = 'yellow'
            armadura2.style.transition = '0.5s'
        }
        function botaoArmadura2Out() {
            armadura2.style.background = 'black'
        }
        /*-----------------------------------------*/

        /*----------ARMADURA 3 GUERREIRO---------------*/
        var botaoArmadura3 = window.document.querySelector('input#armadura3')
        botaoArmadura3.addEventListener('click', botaoArmadura3Click)
        botaoArmadura3.addEventListener('mouseover', botaoArmadura3Hover)
        botaoArmadura3.addEventListener('mouseout', botaoArmadura3Out)
        armadura3.innerHTML = `Armadura de Aço`
        caracteristicaArmadura3.innerHTML = `Armadura de Aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmadura3.innerHTML = `Defesa: 7 / Energia recuperação: 11`
        function botaoArmadura3Click() {
            armaduraVal = 'Armadura de Aço'
            defesaVal = 7
            energiaRecuperacaoVal = 11
            manaRecuperacaoVal = 5  
            armadura.style.display = 'none'
            tutorial.style.display = 'contents'
        }
        function botaoArmadura3Hover() {
            armadura3.style.cursor = 'pointer'
            armadura3.style.background = 'red'
            armadura3.style.transition = '0.5s'
        }
        function botaoArmadura3Out() {
            armadura3.style.background = 'black'
        }
        /*-----------------------------------------*/
    }
    if (classeVal == 'Mago') {
        
    }
    if (classeVal == 'Arqueiro') {
        
    }
}

/*----------------------------------------------------------------------------------------------------*/

