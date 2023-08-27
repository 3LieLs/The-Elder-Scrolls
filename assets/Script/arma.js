/*----------------------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------ESCOLHA DA ARMA----------------------------------------------------------------------------------------------------*/
var escolhaArma = window.document.querySelector('p#mensagemArma')
var arma1 = window.document.querySelector('input#arma1'), arma2 = window.document.querySelector('input#arma2'), arma3 = window.document.querySelector('input#arma3')
var caracteristicaArma1 = window.document.querySelector('p#caracteristicaArma1'), caracteristicaArma2 = window.document.querySelector('p#caracteristicaArma2'), caracteristicaArma3 = window.document.querySelector('p#caracteristicaArma3')
var statsArma1 = window.document.querySelector('p#statsArma1'), statsArma2 = window.document.querySelector('p#statsArma2'), statsArma3 = window.document.querySelector('p#statsArma3')

var botaoVoltarArma = window.document.querySelector('input#voltarArma')
botaoVoltarArma.addEventListener('click', voltarArmaClick)
document.addEventListener('keypress', voltarArmaAtalho)

function voltarArmaClick() {
    classe.style.display = 'contents'
    arma.style.display = 'none'
    classeDisplay = true
    armaDisplay = false
}
function voltarArmaAtalho(atalho) {
    if (armaDisplay == true) {
        if (atalho.key == 'b') {
            botaoVoltarArma.click()
        }
    }
}
/*------------------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO---------ARMA 1 GUERREIRO--------------------------------------------------------------------------------------------------*/
function Arma() {
    classeDisplay = false
    armaDisplay = true
    if (classeVal == 'Guerreiro') {
        escolhaArma.innerHTML = `Escolha a sua arma de curto alcance.`

        var botaoArma1 = window.document.querySelector('input#arma1')
        botaoArma1.addEventListener('click', botaoArma1Click)
        botaoArma1.addEventListener('mouseover', botaoArma1Hover)
        botaoArma1.addEventListener('mouseout', botaoArma1Out)
        arma1.value = `Chicote`
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
        arma2.value = `Machado`
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
        arma3.value = `Lança`
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
        arma1.value = `Luvas mágicas`
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
        arma2.value = `Varinha mágica`
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
        arma3.value = `Cajado mágico`
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
        arma1.value = `Besta leve`
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
        arma2.value = `Arco Curvo`
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
        arma3.value = `Besta pesada`
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
