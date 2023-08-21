/*----------------------------------------DISPLAY----------------------------------------*/
mainHud.style.display = 'none', mainFaseGolem.style.display = 'none'
/*----------------------------------------------------------------------------------------------------*/

var legendaView = window.document.querySelector('p#mensagemLegenda')

/*------------------------------Usuário HUD------------------------------*/
var estatisticaVidaView = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergiaView = window.document.querySelector('p#estatisticaEnergia')
var estatisticaManaView = window.document.querySelector('p#estatisticaMana')

function definirEstatisticaUsuario() {
    estatisticaVidaView.innerHTML = `Vida: ${vidaCombateVal}`
    estatisticaEnergiaView.innerHTML = `Energia: ${energiaCombateVal}`
    estatisticaManaView.innerHTML = `Mana: ${manaCombateVal}`
}
/*-----------------------------------------------------------------------*/

/*------------------------------GOLEM HUD------------------------------*/
var golemVidaVal = 50, golemEnergiaVal = 30
var golemVidaCombateVal = 50, golemEnergiaCombateVal = 30
var danoGolemA = 3, energiaGastoGolemA = 5, danoGolemB = 6, energiaGastoGolemB = 10, danoGolem

var golemVidaView = window.document.querySelector('p#golemVida')
var golemEnergiaView = window.document.querySelector('p#golemEnergia')
var golemManaView = window.document.querySelector('p#golemMana')


function definirEstatisticaGolem() {
    golemVidaView.innerHTML = `Vida: ${golemVidaCombateVal}`
    golemEnergiaView.innerHTML = `Energia: ${golemEnergiaCombateVal}`
    if (golemVidaCombateVal <= 0) {
        mainHud.style.display = 'none'
        mainFaseGolem.style.display = 'none'
        mainSafeZone.style.display = 'contents'
        vidaCombateVal = vidaVal, energiaCombateVal = energiaVal, manaCombateVal = manaVal
        golemVidaCombateVal = golemVidaVal, golemEnergiaCombateVal = golemEnergiaVal
    }
}
/*-----------------------------------------------------------------------*/
