/*----------------------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA------ESCOLHA DA ARMADURA---------------------------------------------------------------------------*/
var escolhaArmadura = window.document.querySelector('p#mensagemArmadura')
var armadura1 = window.document.querySelector('input#armadura1'), armadura2 = window.document.querySelector('input#armadura2'), armadura3 = window.document.querySelector('input#armadura3')
var caracteristicaArmadura1 = window.document.querySelector('p#caracteristicaArmadura1'), caracteristicaArmadura2 = window.document.querySelector('p#caracteristicaArmadura2'), caracteristicaArmadura3 = window.document.querySelector('p#caracteristicaArmadura3')
var statsArmadura1 = window.document.querySelector('p#statsArmadura1'), statsArmadura2 = window.document.querySelector('p#statsArmadura2'), statsArmadura3 = window.document.querySelector('p#statsArmadura3')

var botaoVoltarArmadura = window.document.querySelector('input#voltarArmadura')
botaoVoltarArmadura.addEventListener('click', voltarArmaduraClick)
document.addEventListener('keypress', voltarArmaduraAtalho)

function voltarArmaduraClick() {
    arma.style.display = 'contents'
    armadura.style.display = 'none'
    armaDisplay = true
    armaduraDisplay = false
}
function voltarArmaduraAtalho(atalho) {
    if (armaduraDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarArmadura.click()
        }
    }
}
function sairArmadura() {
    armadura.style.display = 'none'
    mainBotaoMenu.style.display = 'contents'
    mainSafeZone.style.display = 'contents'
    armaduraDisplay = false
    safeZone = true
}
/*--------------ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO-----ARMADURA 1 GUERREIRO------------------------------------------------------------------------------------------------------------------*/
function Armadura() {
    armaDisplay = false
    armaduraDisplay = true
    if (classeVal == 'Guerreiro') {
        escolhaArmadura.innerHTML = `Escolha a sua armadura.`

        var botaoArmadura1 = window.document.querySelector('input#armadura1')
        botaoArmadura1.addEventListener('click', botaoArmadura1Click)
        botaoArmadura1.addEventListener('mouseover', botaoArmadura1Hover)
        botaoArmadura1.addEventListener('mouseout', botaoArmadura1Out)
        armadura1.value = `Armadura de bronze`
        caracteristicaArmadura1.innerHTML = `Armadura de bronze fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmadura1.innerHTML = `Defesa: 3 / Energia recuperação: 17`

        function botaoArmadura1Click() {
            armaduraVal = 'Armadura de bronze'
            defesaVal = 3
            energiaRecuperacaoVal = 17
            manaRecuperacaoVal = 5
            sairArmadura()
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
        armadura2.value = `Armadura de ferro`
        caracteristicaArmadura2.innerHTML = `Armadura de ferro fornece uma defesa e recuperação de energia média.`
        statsArmadura2.innerHTML = `Defesa: 5 / Energia recuperação: 14`

        function botaoArmadura2Click() {
            armaduraVal = 'Armadura de ferro'
            defesaVal = 5
            energiaRecuperacaoVal = 14
            manaRecuperacaoVal = 5
            sairArmadura()
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
        armadura3.value = `Armadura de Aço`
        caracteristicaArmadura3.innerHTML = `Armadura de Aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmadura3.innerHTML = `Defesa: 7 / Energia recuperação: 11`

        function botaoArmadura3Click() {
            armaduraVal = 'Armadura de Aço'
            defesaVal = 7
            energiaRecuperacaoVal = 11
            manaRecuperacaoVal = 5
            sairArmadura()
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
        armadura1.value = `Túnica leve`
        caracteristicaArmadura1.innerHTML = `Túnica leve fornece uma defesa baixa, porém uma alta recuperação de mana.`
        statsArmadura1.innerHTML = `Defesa: 2 / Mana recuperação: 17`

        function botaoArmadura1Click() {
            armaduraVal = 'Túnica leve'
            defesaVal = 2
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 17
            sairArmadura()
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
        armadura2.value = `Túnica média`
        caracteristicaArmadura2.innerHTML = `Túnica média fornece uma defesa e recuperação de mana média.`
        statsArmadura2.innerHTML = `Defesa: 3 / Mana recuperação: 15`

        function botaoArmadura2Click() {
            armaduraVal = 'Túnica média'
            defesaVal = 3
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 15
            sairArmadura()
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
        armadura3.value = `Túnica pesada`
        caracteristicaArmadura3.innerHTML = `Túnica pesada fornece uma defesa alta, porém uma baixa recuperação de mana `
        statsArmadura3.innerHTML = `Defesa: 4 / Mana recuperação: 13`

        function botaoArmadura3Click() {
            armaduraVal = 'Armadura de Aço'
            defesaVal = 4
            energiaRecuperacaoVal = 10
            manaRecuperacaoVal = 13
            sairArmadura()
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
        armadura1.value = `Armadura de couro`
        caracteristicaArmadura1.innerHTML = `Armadura de couro fornece uma defesa baixa, porém uma alta recuperação de energia.`
        statsArmadura1.innerHTML = `Defesa: 2 / Energia recuperação: 18`

        function botaoArmadura1Click() {
            safeZone = true
            armaduraVal = 'Armadura de couro'
            defesaVal = 2
            energiaRecuperacaoVal = 18
            manaRecuperacaoVal = 7
            sairArmadura()
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
        armadura2.value = `Armadura de escamas`
        caracteristicaArmadura2.innerHTML = `Armadura de escamas fornece uma defesa e recuperação de energia média.`
        statsArmadura2.innerHTML = `Defesa: 3 / Energia recuperação: 16`

        function botaoArmadura2Click() {
            safeZone = true
            armaduraVal = 'Armadura de escamas'
            defesaVal = 3
            energiaRecuperacaoVal = 16
            manaRecuperacaoVal = 7
            sairArmadura()
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
        armadura3.value = `Armadura de escamas de aço`
        caracteristicaArmadura3.innerHTML = `Armadura de escamas de aço fornece uma defesa alta, porém uma baixa recuperação de energia `
        statsArmadura3.innerHTML = `Defesa: 5 / Energia recuperação: 13`

        function botaoArmadura3Click() {
            safeZone = true
            armaduraVal = 'Armadura de escamas de aço'
            defesaVal = 5
            energiaRecuperacaoVal = 13
            manaRecuperacaoVal = 7
            sairArmadura()
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
