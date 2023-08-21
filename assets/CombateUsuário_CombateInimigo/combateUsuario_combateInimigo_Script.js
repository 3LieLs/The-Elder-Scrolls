/*----------------------------------------VARIÁVEIS----------------------------------------*/
var vidaCombateVal = 0, manaCombateVal = 0, energiaCombateVal = 0, danoCombateVal, defesaCombateVal
var faseGolem = false, faseDragao = false, vezUsuario = true
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/

/*----------------------------------------------------------------------------------------------------*/

var acaoAtaqueAView = window.document.querySelector('p#ataqueA')
var acaoAtaqueBView = window.document.querySelector('p#ataqueB')
var acaoDefesaView = window.document.querySelector('p#defesa')
var acaoDescansarView = window.document.querySelector('p#descansar')
var acaoFugirView = window.document.querySelector('p#fugir')

acaoAtaqueAView.innerHTML = `Ataque Básico`
acaoAtaqueBView.innerHTML = `Ataque Especial`
acaoDefesaView.innerHTML = `Defender`
acaoDescansarView.innerHTML = `Descansar`
acaoFugirView.innerHTML = `Fugir`

function acaoIntervalo() {
    vezUsuario = true
}

/*----------ATAQUE BÁSICO---------------*/
var botaoAtaqueA = window.document.querySelector('input#ataqueA')

function ataqueATempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Básico<br>Dano causado: ${danoVal}<br>Energia gasta: ${energiaCustoVal}<br> Mana gasta: ${manaCustoVal}`
    golemVidaVal = golemVidaVal - danoVal
    energiaCombateVal = energiaCombateVal - energiaCustoVal
    manaCombateVal = manaCombateVal - manaCustoVal
}

function botaoAtaqueAClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        if (manaCombateVal <= 0) {
            alert(`Você está sem mana fazer está ação`)
        }
        else {
            vezUsuario = false
            setTimeout(ataqueATempo, 500)
            setTimeout(definirEstatisticaUsuario, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGolem == true) {
                setTimeout(definirEstatisticaGolem, 500)
                setTimeout(ataqueGolem, 2500)
                setTimeout(definirEstatisticaUsuario, 2500)
                setTimeout(definirEstatisticaGolem, 2500)
            }
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueAHover() {
    if (vezUsuario == true) {
        ataqueA.style.cursor = 'pointer'
        ataqueA.style.background = 'purple'
        ataqueA.style.transition = '0.5s'
    } else {
        ataqueA.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueAOut() {
    ataqueA.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------ATAQUE ESPECIAL---------------*/
var botaoAtaqueB = window.document.querySelector('input#ataqueB')

function ataqueBTempo() {
    golemVidaCombateVal = golemVidaCombateVal - (danoVal + (danoVal / 2))
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Especial<br>Dano causado: ${danoVal + (danoVal / 2)}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    energiaCombateVal = energiaCombateVal - (energiaCustoVal + (energiaCustoVal / 2))
    manaCombateVal = manaCombateVal - (manaCustoVal + (manaCustoVal / 2))
}

function botaoAtaqueBClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        if (manaCombateVal <= 0) {
            alert(`Você está sem mana fazer está ação`)
        }
        else {
            vezUsuario = false
            setTimeout(ataqueBTempo, 500)
            setTimeout(definirEstatisticaUsuario, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGolem == true) {
                setTimeout(definirEstatisticaGolem, 500)
                setTimeout(ataqueGolem, 2500)
                setTimeout(definirEstatisticaUsuario, 2500)
                setTimeout(definirEstatisticaGolem, 2500)
            }
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueBHover() {
    if (vezUsuario == true) {
        ataqueB.style.cursor = 'pointer'
        ataqueB.style.background = 'purple'
        ataqueB.style.transition = '0.5s'
    } else {
        ataqueB.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueBOut() {
    ataqueB.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------DEFENDER---------------*/
var botaoDefesa = window.document.querySelector('input#defesa')

function defesaTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Defesa<br> Defesa aumentou para ${defesaVal + (defesaVal / 2)}`
}

function botaoDefesaClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(defesaTempo, 500)
        setTimeout(definirEstatisticaUsuario, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGolem == true) {
            setTimeout(definirEstatisticaGolem, 500)
            setTimeout(ataqueGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
            setTimeout(definirEstatisticaGolem, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoDefesaHover() {
    if (vezUsuario == true) {
        defesa.style.cursor = 'pointer'
        defesa.style.background = 'purple'
        defesa.style.transition = '0.5s'
    } else {
        defesa.style.cursor = 'not-allowed'
    }
}

function botaoDefesaOut() {
    defesa.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------DESCANSAR---------------*/
var botaoDescansar = window.document.querySelector('input#descansar')

function descansarTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Descanso<br>Energia recuperada: ${energiaRecuperacaoVal}`
    energiaCombateVal = energiaCombateVal + energiaRecuperacaoVal
}

function botaoDescansarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(descansarTempo, 500)
        setTimeout(definirEstatisticaUsuario, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGolem == true) {
            setTimeout(definirEstatisticaGolem, 500)
            setTimeout(ataqueGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
            setTimeout(definirEstatisticaGolem, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoDescansarHover() {
    if (vezUsuario == true) {
        descansar.style.cursor = 'pointer'
        descansar.style.background = 'purple'
        descansar.style.transition = '0.5s'
    } else {
        descansar.style.cursor = 'not-allowed'
    }
}

function botaoDescansarOut() {
    descansar.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------FOCAR---------------*/
var botaoFocar = window.document.querySelector('input#focar')

function focarTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Foco<br>Mana recuperada: ${manaRecuperacaoVal}`
    manaCombateVal = manaCombateVal + manaRecuperacaoVal
}

function botaoFocarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(focarTempo, 500)
        setTimeout(definirEstatisticaUsuario, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGolem == true) {
            setTimeout(definirEstatisticaGolem, 500)
            setTimeout(ataqueGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
            setTimeout(definirEstatisticaGolem, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoFocarHover() {
    if (vezUsuario == true) {
        focar.style.cursor = 'pointer'
        focar.style.background = 'purple'
        focar.style.transition = '0.5s'
    } else {
        focar.style.cursor = 'not-allowed'
    }
}

function botaoFocarOut() {
    focar.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------GOLEM---------------*/
function ataqueGolem() {
    danoGolem = Math.round(Math.random() * (100 - 0) + 0);
    if (danoGolem <= 75) {
        legendaView.innerHTML = `Golem utilizou ataque básico<br>Dano causado: ${danoGolemA}<br>Energia usada: ${energiaGastoGolemA}`
        vidaCombateVal = vidaCombateVal - danoGolemA
        golemEnergiaCombateVal = golemEnergiaCombateVal - energiaGastoGolemA
    } else {
        legendaView.innerHTML = `Golem utilizou ataque especial<br>Dano causado: ${danoGolemB}<br>Energia usada: ${energiaGastoGolemB}`
        vidaCombateVal = vidaCombateVal - danoGolemB
        golemEnergiaCombateVal = golemEnergiaCombateVal - energiaGastoGolemB
    }
}
/*-----------------------------------------*/



