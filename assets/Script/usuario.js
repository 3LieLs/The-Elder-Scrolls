var legendaView = window.document.querySelector('p#mensagemLegenda')

/*------------------------------Usuário HUD------------------------------*/
var estatisticaVidaView = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergiaView = window.document.querySelector('p#estatisticaEnergia')
var estatisticaManaView = window.document.querySelector('p#estatisticaMana')
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function usuarioCombateView() {
    estatisticaVidaView.innerHTML = `Vida: ${vidaCombateVal}`
    estatisticaEnergiaView.innerHTML = `Energia: ${energiaCombateVal}`
    estatisticaManaView.innerHTML = `Mana: ${manaCombateVal}`
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
