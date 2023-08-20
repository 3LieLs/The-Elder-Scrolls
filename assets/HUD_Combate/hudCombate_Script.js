var legendaView = window.document.querySelector('p#mensagemLegenda')

/*------------------------------Usuário HUD------------------------------*/
var estatisticaVidaView = window.document.querySelector('p#estatisticaVida')
var estatisticaEnergiaView = window.document.querySelector('p#estatisticaEnergia')
var estatisticaManaView = window.document.querySelector('p#estatisticaMana')

function definirEstatisticaUsuario() {
    estatisticaVidaView.innerHTML = `Vida: ${vidaVal}`
    estatisticaEnergiaView.innerHTML = `Energia: ${energiaVal}`
    estatisticaManaView.innerHTML = `Mana: ${manaVal}`
}
/*-----------------------------------------------------------------------*/

/*------------------------------GOLEM HUD------------------------------*/
var golemVidaVal = 50, golemEnergiaVal = 30, golemManaVal = 20
var golemVidaView = window.document.querySelector('p#golemVida')
var golemEnergiaView = window.document.querySelector('p#golemEnergia')
var golemManaView = window.document.querySelector('p#golemMana')


function definirEstatisticaGolem() {
    golemVidaView.innerHTML = `Vida: ${golemVidaVal}`
    golemEnergiaView.innerHTML = `Energia: ${golemEnergiaVal}`
    golemManaView.innerHTML = `Mana: ${golemManaVal}`
    if (golemVidaVal <= 0) {
       
    }
}
/*-----------------------------------------------------------------------*/
