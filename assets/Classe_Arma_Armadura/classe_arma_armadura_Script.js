/*----------------------------------------VARIÁVEIS----------------------------------------*/
var vidaVal = 0, manaVal = 0, manaCustoVal, manaRecuperacaoVal, energiaVal = 0, energiaCustoVal, energiaRecuperacaoVal
var danoVal, defesaVal, classeVal, armaVal, armaduraVal
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/
classe.style.display = 'none', arma.style.display = 'none', armadura.style.display = 'none'
/*----------------------------------------------------------------------------------------------------*/

/*----------------------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE----------MENSAGEM CLASSE------------------------------------------------------------------------------------------------------*/
var enviarUsuario
var escolhaClasse = window.document.querySelector('p#mensagemClasse')

function Classe() {
    enviarUsuario = window.document.querySelector('input#nomeUsuario')
    nomeUsuarioVal = String(enviarUsuario.value)
    if (generoVal == 'Homem') {
        escolhaClasse.innerHTML = `Olá <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-lo.<br>Escolha a sua classe`
    }
    if (generoVal == 'Mulher') {
        escolhaClasse.innerHTML = `Olá, <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-la.<br>Escolha a sua classe`
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



/*----------------------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------------------------------------------------------------------------------------------------*/


var escolhaArma = window.document.querySelector('p#mensagemArma')
var arma1 = window.document.querySelector('input#arma1'), arma2 = window.document.querySelector('input#arma2'), arma3 = window.document.querySelector('input#arma3')
var caracteristicaArma1 = window.document.querySelector('p#caracteristicaArma1'), caracteristicaArma2 = window.document.querySelector('p#caracteristicaArma2'), caracteristicaArma3 = window.document.querySelector('p#caracteristicaArma3')
var statsArma1 = window.document.querySelector('p#statsArma1'), statsArma2 = window.document.querySelector('p#statsArma2'), statsArma3 = window.document.querySelector('p#statsArma3')

function Arma() {
    /*------------------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO--------------------------------------------------------------------------------------------------*/
    if (classeVal == 'Guerreiro') {
        escolhaArma.innerHTML = `Escolha a sua arma de curto alcance.`

        var botaoArma1 = window.document.querySelector('input#arma1')
        botaoArma1.addEventListener('click', botaoArma1Click)
        botaoArma1.addEventListener('mouseover', botaoArma1Hover)
        botaoArma1.addEventListener('mouseout', botaoArma1Out)
        arma1.innerHTML = `Chicote`
        caracteristicaArma1.innerHTML = `Chicotes são armas com um custo baixo de energia e baixo dano ao inimigo.`
        statsArma1.innerHTML = `Dano: 3 / Energia custo: 4 / Mana Custo: 0`

        function botaoArma1Click() {
            danoVal = 3
            energiaCustoVal = 4
            manaCustoVal = 0
            armaVal = 'Chicote'
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 2 GUERREIRO---------ARMA 2 GUERREIRO---------ARMA 2 GUERREIRO---------ARMA 2 GUERREIRO---------ARMA 2 GUERREIRO--------------------------------------------------------------------------------------------------*/
        var botaoArma2 = window.document.querySelector('input#arma2')
        botaoArma2.addEventListener('click', botaoArma2Click)
        botaoArma2.addEventListener('mouseover', botaoArma2Hover)
        botaoArma2.addEventListener('mouseout', botaoArma2Out)
        arma2.innerHTML = `Machado`
        caracteristicaArma2.innerHTML = `Machados são armas de uma mão com um custo médio de energia e médio dano ao inimigo.`
        statsArma2.innerHTML = `Dano: 4 / Energia custo: 6 / Mana Custo: 0`

        function botaoArma2Click() {
            danoVal = 4
            energiaCustoVal = 6
            manaCustoVal = 0
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 3 GUERREIRO---------ARMA 3 GUERREIRO---------ARMA 3 GUERREIRO---------ARMA 3 GUERREIRO---------ARMA 3 GUERREIRO--------------------------------------------------------------------------------------------------*/
        var botaoArma3 = window.document.querySelector('input#arma3')
        botaoArma3.addEventListener('click', botaoArma3Click)
        botaoArma3.addEventListener('mouseover', botaoArma3Hover)
        botaoArma3.addEventListener('mouseout', botaoArma3Out)
        arma3.innerHTML = `Lança`
        caracteristicaArma3.innerHTML = `Lanças são armas de duas mãos com um custo alto de energia e alto dano ao inimigo.`
        statsArma3.innerHTML = `Dano: 5 / Energia custo: 8 / Mana Custo: 0`

        function botaoArma3Click() {
            danoVal = 5
            energiaCustoVal = 8
            manaCustoVal = 0
            armaVal = 'Lança'
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
    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*--------------ARMA 1 MAGO--------------ARMA 1 MAGO--------------ARMA 1 MAGO--------------ARMA 1 MAGO--------------ARMA 1 MAGO------------------------------------------------------------------------------*/
    if (classeVal == 'Mago') {
        escolhaArma.innerHTML = `Escolha a sua arma mágica.`

        var botaoArma1 = window.document.querySelector('input#arma1')
        botaoArma1.addEventListener('click', botaoArma1Click)
        botaoArma1.addEventListener('mouseover', botaoArma1Hover)
        botaoArma1.addEventListener('mouseout', botaoArma1Out)
        arma1.innerHTML = `Luvas mágicas`
        caracteristicaArma1.innerHTML = `Luvas mágicas são armas mágicas com um custo baixa de mana e baixo dano ao inimigo.`
        statsArma1.innerHTML = `Dano: 6 / Energia custo: 0 / Mana Custo: 5`

        function botaoArma1Click() {
            danoVal = 6
            energiaCustoVal = 0
            manaCustoVal = 5
            armaVal = 'Luvas mágicas'
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 2 MAGO--------------ARMA 2 MAGO---------------------------------------ARMA 2 MAGO--------------ARMA 2 MAGO-------------------------------------------------------------------*/
        var botaoArma2 = window.document.querySelector('input#arma2')
        botaoArma2.addEventListener('click', botaoArma2Click)
        botaoArma2.addEventListener('mouseover', botaoArma2Hover)
        botaoArma2.addEventListener('mouseout', botaoArma2Out)
        arma2.innerHTML = `Varinha mágica`
        caracteristicaArma2.innerHTML = `Varinha mágica são armas mágicas com um custo médio de mana e médio dano ao inimigo.`
        statsArma2.innerHTML = `Dano: 8 / Energia custo: 0 / Mana Custo: 7`

        function botaoArma2Click() {
            danoVal = 8
            energiaCustoVal = 0
            manaCustoVal = 7
            armaVal = 'Varinha mágica'
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 3 MAGO--------------ARMA 3 MAGO--------------ARMA 3 MAGO--------------ARMA 3 MAGO--------------ARMA 3 MAGO------------------------------------------------------------------------------*/
        var botaoArma3 = window.document.querySelector('input#arma3')
        botaoArma3.addEventListener('click', botaoArma3Click)
        botaoArma3.addEventListener('mouseover', botaoArma3Hover)
        botaoArma3.addEventListener('mouseout', botaoArma3Out)
        arma3.innerHTML = `Cajado mágico`
        caracteristicaArma3.innerHTML = `Cajado mágico são armas mágicas com um custo alto de energia e alto dano ao inimigo.`
        statsArma3.innerHTML = `Dano: 10 / Energia custo: 0 / Mana Custo: 9`

        function botaoArma3Click() {
            danoVal = 10
            energiaCustoVal = 0
            manaCustoVal = 9
            armaVal = 'Cajado mágico'
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
    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*------------------ARMA 1 ARQUEIRO----------ARMA 1 ARQUEIRO----------ARMA 1 ARQUEIRO----------ARMA 1 ARQUEIRO----------ARMA 1 ARQUEIRO--------------------------------------------------------------------------------------------------*/
    if (classeVal == 'Arqueiro') {
        escolhaArma.innerHTML = `Escolha a sua arma de longo alcance.`

        var botaoArma1 = window.document.querySelector('input#arma1')
        botaoArma1.addEventListener('click', botaoArma1Click)
        botaoArma1.addEventListener('mouseover', botaoArma1Hover)
        botaoArma1.addEventListener('mouseout', botaoArma1Out)
        arma1.innerHTML = `Besta leve`
        caracteristicaArma1.innerHTML = `Besta leve é uma arma com um custo baixo de energia e baixo dano ao inimigo.`
        statsArma1.innerHTML = `Dano: 4 / Energia custo: 3 / Mana Custo: 0`

        function botaoArma1Click() {
            danoVal = 4
            energiaCustoVal = 3
            manaCustoVal = 0
            armaVal = 'Besta leve'
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 2 ARQUEIRO----------ARMA 2 ARQUEIRO----------ARMA 2 ARQUEIRO----------ARMA 2 ARQUEIRO----------ARMA 2 ARQUEIRO--------------------------------------------------------------------------------------------------*/
        var botaoArma2 = window.document.querySelector('input#arma2')
        botaoArma2.addEventListener('click', botaoArma2Click)
        botaoArma2.addEventListener('mouseover', botaoArma2Hover)
        botaoArma2.addEventListener('mouseout', botaoArma2Out)
        arma2.innerHTML = `Arco Curvo`
        caracteristicaArma2.innerHTML = `Arco Curvo é uma arma com um custo médio de energia e médio dano ao inimigo.`
        statsArma2.innerHTML = `Dano: 6 / Energia custo: 5 / Mana Custo: 0`

        function botaoArma2Click() {
            danoVal = 6
            energiaCustoVal = 5
            manaCustoVal = 0
            armaVal = 'Arco Curvo'
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
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMA 3 ARQUEIRO----------ARMA 3 ARQUEIRO----------ARMA 3 ARQUEIRO----------ARMA 3 ARQUEIRO----------ARMA 3 ARQUEIRO--------------------------------------------------------------------------------------------------*/
        var botaoArma3 = window.document.querySelector('input#arma3')
        botaoArma3.addEventListener('click', botaoArma3Click)
        botaoArma3.addEventListener('mouseover', botaoArma3Hover)
        botaoArma3.addEventListener('mouseout', botaoArma3Out)
        arma3.innerHTML = `Besta pesada`
        caracteristicaArma3.innerHTML = `Besta pesada é uma arma com um custo alto de energia e alto dano ao inimigo.`
        statsArma3.innerHTML = `Dano: 8 / Energia custo: 7 / Mana Custo: 0`

        function botaoArma3Click() {
            danoVal = 8
            energiaCustoVal = 7
            manaCustoVal = 0
            armaVal = 'Besta pesada'
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
    }
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA---------------------------------------------------------------------------*/
var escolhaArmadura = window.document.querySelector('p#mensagemArmadura')
var armadura1 = window.document.querySelector('input#armadura1'), armadura2 = window.document.querySelector('input#armadura2'), armadura3 = window.document.querySelector('input#armadura3')
var caracteristicaArmadura1 = window.document.querySelector('p#caracteristicaArmadura1'), caracteristicaArmadura2 = window.document.querySelector('p#caracteristicaArmadura2'), caracteristicaArmadura3 = window.document.querySelector('p#caracteristicaArmadura3')
var statsArmadura1 = window.document.querySelector('p#statsArmadura1'), statsArmadura2 = window.document.querySelector('p#statsArmadura2'), statsArmadura3 = window.document.querySelector('p#statsArmadura3')

function Armadura() {
    /*--------------ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO------------------------------------------------------------------------------------------------------------------*/
    if (classeVal == 'Guerreiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`

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
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura1Hover() {
            armadura1.style.cursor = 'pointer'
            armadura1.style.background = 'green'
            armadura1.style.transition = '0.5s'
        }

        function botaoArmadura1Out() {
            armadura1.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 2 GUERREIRO-----ARMADURA 2 GUERREIRO-----ARMADURA 2 GUERREIRO-----ARMADURA 2 GUERREIRO-----ARMADURA 2 GUERREIRO------------------------------------------------------------------------------------------------------------------*/
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
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura2Hover() {
            armadura2.style.cursor = 'pointer'
            armadura2.style.background = 'yellow'
            armadura2.style.transition = '0.5s'
        }

        function botaoArmadura2Out() {
            armadura2.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 3 GUERREIRO-----ARMADURA 3 GUERREIRO-----ARMADURA 3 GUERREIRO-----ARMADURA 3 GUERREIRO-----ARMADURA 3 GUERREIRO------------------------------------------------------------------------------------------------------------------*/
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
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura3Hover() {
            armadura3.style.cursor = 'pointer'
            armadura3.style.background = 'red'
            armadura3.style.transition = '0.5s'
        }

        function botaoArmadura3Out() {
            armadura3.style.background = 'black'
        }
    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*------------------ARMADURA 1 MAGO----------ARMADURA 1 MAGO----------ARMADURA 1 MAGO----------ARMADURA 1 MAGO----------ARMADURA 1 MAGO--------------------------------------------------------------------------------------------------------*/
    if (classeVal == 'Mago') {
        escolhaArmadura.innerHTML = `Escolha a sua Túnica.`

        var botaoArmadura1 = window.document.querySelector('input#armadura1')
        botaoArmadura1.addEventListener('click', botaoArmadura1Click)
        botaoArmadura1.addEventListener('mouseover', botaoArmadura1Hover)
        botaoArmadura1.addEventListener('mouseout', botaoArmadura1Out)
        armadura1.innerHTML = `Túnica leve`
        caracteristicaArmadura1.innerHTML = `Túnica leve fornece uma defesa baixa, porém uma alta recuperação de mana.`
        statsArmadura1.innerHTML = `Defesa: 2 / Mana recuperação: 17`

        function botaoArmadura1Click() {
            armaduraVal = 'Túnica leve'
            defesaVal = 2
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 17
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura1Hover() {
            armadura1.style.cursor = 'pointer'
            armadura1.style.background = 'green'
            armadura1.style.transition = '0.5s'
        }

        function botaoArmadura1Out() {
            armadura1.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 2 MAGO----------ARMADURA 2 MAGO----------ARMADURA 2 MAGO----------ARMADURA 2 MAGO----------ARMADURA 2 MAGO--------------------------------------------------------------------------------------------------------*/
        var botaoArmadura2 = window.document.querySelector('input#armadura2')
        botaoArmadura2.addEventListener('click', botaoArmadura2Click)
        botaoArmadura2.addEventListener('mouseover', botaoArmadura2Hover)
        botaoArmadura2.addEventListener('mouseout', botaoArmadura2Out)
        armadura2.innerHTML = `Túnica média`
        caracteristicaArmadura2.innerHTML = `Túnica média fornece uma defesa e recuperação de mana média.`
        statsArmadura2.innerHTML = `Defesa: 3 / Mana recuperação: 15`

        function botaoArmadura2Click() {
            armaduraVal = 'Túnica média'
            defesaVal = 3
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 15
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura2Hover() {
            armadura2.style.cursor = 'pointer'
            armadura2.style.background = 'yellow'
            armadura2.style.transition = '0.5s'
        }

        function botaoArmadura2Out() {
            armadura2.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 3 MAGO----------ARMADURA 3 MAGO----------ARMADURA 3 MAGO----------ARMADURA 3 MAGO----------ARMADURA 3 MAGO--------------------------------------------------------------------------------------------------------*/
        var botaoArmadura3 = window.document.querySelector('input#armadura3')
        botaoArmadura3.addEventListener('click', botaoArmadura3Click)
        botaoArmadura3.addEventListener('mouseover', botaoArmadura3Hover)
        botaoArmadura3.addEventListener('mouseout', botaoArmadura3Out)
        armadura3.innerHTML = `Túnica pesada`
        caracteristicaArmadura3.innerHTML = `Túnica pesada fornece uma defesa alta, porém uma baixa recuperação de mana `
        statsArmadura3.innerHTML = `Defesa: 4 / Mana recuperação: 13`

        function botaoArmadura3Click() {
            armaduraVal = 'Armadura de Aço'
            defesaVal = 4
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 13
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura3Hover() {
            armadura3.style.cursor = 'pointer'
            armadura3.style.background = 'red'
            armadura3.style.transition = '0.5s'
        }

        function botaoArmadura3Out() {
            armadura3.style.background = 'black'
        }
    }
    /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /*------------------ARMADURA 1 ARQUEIRO----------ARMADURA 1 ARQUEIRO----------ARMADURA 1 ARQUEIRO----------ARMADURA 1 ARQUEIRO----------ARMADURA 1 ARQUEIRO--------------------------------------------------------------------------------------------------------*/
    if (classeVal == 'Arqueiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`

        var botaoArmadura1 = window.document.querySelector('input#armadura1')
        botaoArmadura1.addEventListener('click', botaoArmadura1Click)
        botaoArmadura1.addEventListener('mouseover', botaoArmadura1Hover)
        botaoArmadura1.addEventListener('mouseout', botaoArmadura1Out)
        armadura1.innerHTML = `Armadura de couro`
        caracteristicaArmadura1.innerHTML = `Armadura de couro fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmadura1.innerHTML = `Defesa: 2 / Energia recuperação: 18`

        function botaoArmadura1Click() {
            armaduraVal = 'Armadura de couro'
            defesaVal = 2
            energiaRecuperacaoVal = 18
            manaRecuperacaoVal = 7
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura1Hover() {
            armadura1.style.cursor = 'pointer'
            armadura1.style.background = 'green'
            armadura1.style.transition = '0.5s'
        }

        function botaoArmadura1Out() {
            armadura1.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 2 ARQUEIRO-----ARMADURA 2 ARQUEIRO-----ARMADURA 2 ARQUEIRO-----ARMADURA 2 ARQUEIRO-----ARMADURA 2 ARQUEIRO------------------------------------------------------------------------------------------------------------------*/
        var botaoArmadura2 = window.document.querySelector('input#armadura2')
        botaoArmadura2.addEventListener('click', botaoArmadura2Click)
        botaoArmadura2.addEventListener('mouseover', botaoArmadura2Hover)
        botaoArmadura2.addEventListener('mouseout', botaoArmadura2Out)
        armadura2.innerHTML = `Armadura de escamas`
        caracteristicaArmadura2.innerHTML = `Armadura de escamas fornece uma defesa e recuperação de energia média.`
        statsArmadura2.innerHTML = `Defesa: 3 / Energia recuperação: 16`

        function botaoArmadura2Click() {
            armaduraVal = 'Armadura de escamas'
            defesaVal = 3
            energiaRecuperacaoVal = 16
            manaRecuperacaoVal = 7
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura2Hover() {
            armadura2.style.cursor = 'pointer'
            armadura2.style.background = 'yellow'
            armadura2.style.transition = '0.5s'
        }

        function botaoArmadura2Out() {
            armadura2.style.background = 'black'
        }
        /*--------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /*--------------ARMADURA 3 ARQUEIRO-----ARMADURA 3 ARQUEIRO-----ARMADURA 3 ARQUEIRO-----ARMADURA 3 ARQUEIRO-----ARMADURA 3 ARQUEIRO------------------------------------------------------------------------------------------------------------------*/
        var botaoArmadura3 = window.document.querySelector('input#armadura3')
        botaoArmadura3.addEventListener('click', botaoArmadura3Click)
        botaoArmadura3.addEventListener('mouseover', botaoArmadura3Hover)
        botaoArmadura3.addEventListener('mouseout', botaoArmadura3Out)
        armadura3.innerHTML = `Armadura de escamas de aço`
        caracteristicaArmadura3.innerHTML = `Armadura de escamas de aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmadura3.innerHTML = `Defesa: 5 / Energia recuperação: 13`

        function botaoArmadura3Click() {
            armaduraVal = 'Armadura de escamas de aço'
            defesaVal = 5
            energiaRecuperacaoVal = 13
            manaRecuperacaoVal = 7
            armadura.style.display = 'none'
            mainBotaoMenu.style.display = 'contents'
            mainSafeZone.style.display = 'contents'
        }

        function botaoArmadura3Hover() {
            armadura3.style.cursor = 'pointer'
            armadura3.style.background = 'red'
            armadura3.style.transition = '0.5s'
        }

        function botaoArmadura3Out() {
            armadura3.style.background = 'black'
        }
    }
}
/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
