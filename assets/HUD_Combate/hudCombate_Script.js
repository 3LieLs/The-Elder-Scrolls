/*----------------------------------------DISPLAY----------------------------------------*/
mainHud.style.display = 'none'
mainFaseGoblin.style.display = 'none', mainFaseGolem.style.display = 'none', mainFaseDragao.style.display = 'none'
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

var legendaView = window.document.querySelector('p#mensagemLegenda')

/*------------------------------Usuário HUD------------------------------*/
var estatisticaVidaView = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergiaView = window.document.querySelector('p#estatisticaEnergia')
var estatisticaManaView = window.document.querySelector('p#estatisticaMana')
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------------------------------------------------------------------*/
var goblinVidaVal = 25, goblinEnergiaVal = 15
var goblinVidaCombateVal = 25, goblinEnergiaCombateVal = 15, energiaRecuperacaoGoblin = 0
var danoGoblinA = 2, energiaGastoGoblinA = 2, danoGoblinB = 5, energiaGastoGoblinB = 5, danoGoblin

parseInt(goblinVidaVal), parseInt(goblinEnergiaVal)
parseInt(goblinVidaCombateVal), parseInt(goblinEnergiaCombateVal), parseInt(energiaRecuperacaoGoblin)

var goblinVidaView = window.document.querySelector('p#goblinVida')
var goblinEnergiaView = window.document.querySelector('p#goblinEnergia')
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD---------------------------------------------------------------------------*/
var golemVidaVal = 50, golemEnergiaVal = 30
var golemVidaCombateVal = 50, golemEnergiaCombateVal = 30, energiaRecuperacaoGolem = 0
var danoGolemA = 3, energiaGastoGolemA = 5, danoGolemB = 6, energiaGastoGolemB = 10, danoGolem

parseInt(golemVidaVal), parseInt(golemEnergiaVal)
parseInt(golemVidaCombateVal), parseInt(golemEnergiaCombateVal), parseInt(energiaRecuperacaoGolem)

var golemVidaView = window.document.querySelector('p#golemVida')
var golemEnergiaView = window.document.querySelector('p#golemEnergia')
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------------------------------------------------------------------*/
var dragaoVidaVal = 100, dragaoManaVal = 60
var dragaoVidaCombateVal = 100, dragaoManaCombateVal = 60, manaRecuperacaoDragao = 0
var danoDragaoA = 15, manaGastoDragaoA = 15, danoDragaoB = 20, manaGastoDragaoB = 25, danoDragao

parseInt(dragaoVidaVal), parseInt(dragaoManaVal)
parseInt(dragaoVidaCombateVal), parseInt(dragaoManaCombateVal), parseInt(manaRecuperacaoDragao)

var dragaoVidaView = window.document.querySelector('p#dragaoVida')
var dragaoManaView = window.document.querySelector('p#dragaoMana')
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function usuarioCombateView() {
    estatisticaVidaView.innerHTML = `Vida: ${vidaCombateVal}`
    estatisticaEnergiaView.innerHTML = `Energia: ${energiaCombateVal}`
    estatisticaManaView.innerHTML = `Mana: ${manaCombateVal}`
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function inimigoCombateView() {
    if (faseGoblin == true) {
        goblinVidaView.innerHTML = `Vida: ${goblinVidaCombateVal}`
        goblinEnergiaView.innerHTML = `Energia: ${goblinEnergiaCombateVal}`
    }

    if (faseGolem == true) {
        golemVidaView.innerHTML = `Vida: ${golemVidaCombateVal}`
        golemEnergiaView.innerHTML = `Energia: ${golemEnergiaCombateVal}`
    }

    if (faseDragao == true) {
        dragaoVidaView.innerHTML = `Vida: ${dragaoVidaCombateVal}`
        dragaoManaView.innerHTML = `Mana: ${dragaoManaCombateVal}`
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function inimigoDerrotado() {
    if (faseGoblin == true && goblinVidaCombateVal <= 0) {
        faseGoblin = false
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGoblin.style.display = 'none'
        mainSafeZone.style.display = 'contents'
    }
    if (faseGolem == true && golemVidaCombateVal <= 0) {
        faseGolem = false
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseGolem.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        definirEstatisticaGeral()
    }
    if (faseDragao == true && dragaoVidaCombateVal <= 0) {
        faseDragao = false
        mainHudDisplay = false
        mainHud.style.display = 'none'
        mainFaseDragao.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        definirEstatisticaGeral()
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function definirEstatisticaGeral() {
    legendaView.innerHTML = ``

    vidaCombateVal = vidaVal, energiaCombateVal = energiaVal, manaCombateVal = manaVal

    goblinVidaCombateVal = goblinVidaVal, goblinEnergiaCombateVal = goblinEnergiaVal

    golemVidaCombateVal = golemVidaVal, golemEnergiaCombateVal = golemEnergiaVal

    dragaoVidaCombateVal = dragaoVidaVal, dragaoManaCombateVal = dragaoManaVal
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
