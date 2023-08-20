var acaoAtaqueAView = window.document.querySelector('p#ataqueA')
var acaoAtaqueBView = window.document.querySelector('p#ataqueB')
var acaoDefesaView = window.document.querySelector('p#defesa')
var acaoDescansarView = window.document.querySelector('p#descansar')
var acaoFugirView = window.document.querySelector('p#fugir')

acaoAtaqueAView.innerHTML = `Ataque Básico`
acaoAtaqueBView.innerHTML = `Ataque Básico`
acaoDefesaView.innerHTML = `Defender`
acaoDescansarView.innerHTML = `Descansar`
acaoFugirView.innerHTML = `Fugir`

function acaoIntervalo() {
    vezUsuario = true
}

/*----------ATAQUE BÁSICO---------------*/
var botaoAtaqueA = window.document.querySelector('input#ataqueA')

function ataqueATempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Básico<br>Dano causado: ${danoVal}<br>Energia gasta: ${energiaCustoVal}`
    golemVidaVal = golemVidaVal - danoVal
    energiaVal = energiaVal - energiaCustoVal
}

function botaoAtaqueAClick() {
    if (vezUsuario == true) {
        if (energiaVal <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        else {
            vezUsuario = false
            setTimeout(ataqueATempo, 500)
            setTimeout(definirEstatisticaUsuario, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGolem == true) {
                setTimeout(definirEstatisticaGolem, 500)
                setTimeout(ataqueAGolem, 2500)
                setTimeout(definirEstatisticaUsuario, 2500)
            }
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueAHover() {
    ataqueA.style.cursor = 'pointer'
    ataqueA.style.background = 'purple'
    ataqueA.style.transition = '0.5s'
}

function botaoAtaqueAOut() {
    ataqueA.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------ATAQUE ESPECIAL---------------*/
var botaoAtaqueB = window.document.querySelector('input#ataqueB')

function ataqueBTempo() {
    golemVidaVal = golemVidaVal - (danoVal + (danoVal / 2))
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Especial<br>Dano causado: ${danoVal + (danoVal / 2)}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    energiaVal = energiaVal - (energiaCustoVal + (energiaCustoVal / 2))
}

function botaoAtaqueBClick() {
    if (vezUsuario == true) {
        if (energiaVal <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        else {
            vezUsuario = false
            setTimeout(ataqueBTempo, 500)
            setTimeout(definirEstatisticaUsuario, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGolem == true) {
                setTimeout(definirEstatisticaGolem, 500)
                setTimeout(ataqueBGolem, 2500)
                setTimeout(definirEstatisticaUsuario, 2500)
            }
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueBHover() {
    ataqueB.style.cursor = 'pointer'
    ataqueB.style.background = 'purple'
    ataqueB.style.transition = '0.5s'
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
            setTimeout(ataqueAGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoDefesaHover() {
    defesa.style.cursor = 'pointer'
    defesa.style.background = 'purple'
    defesa.style.transition = '0.5s'
}

function botaoDefesaOut() {
    defesa.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------DESCANSAR---------------*/
var botaoDescansar = window.document.querySelector('input#descansar')

function descansarTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Descanso<br>Energia recuperada: ${energiaRecuperacaoVal}`
    energiaVal = energiaVal + energiaRecuperacaoVal
}

function botaoDescansarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(descansarTempo, 500)
        setTimeout(definirEstatisticaUsuario, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGolem == true) {
            setTimeout(definirEstatisticaGolem, 500)
            setTimeout(ataqueAGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoDescansarHover() {
    descansar.style.cursor = 'pointer'
    descansar.style.background = 'purple'
    descansar.style.transition = '0.5s'
}

function botaoDescansarOut() {
    descansar.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------FOCAR---------------*/
var botaoFocar = window.document.querySelector('input#focar')

function focarTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Foco<br>Mana recuperada: ${manaRecuperacaoVal}`
    manaVal = manaVal + manaRecuperacaoVal
}

function botaoFocarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(focarTempo, 500)
        setTimeout(definirEstatisticaUsuario, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGolem == true) {
            setTimeout(definirEstatisticaGolem, 500)
            setTimeout(ataqueAGolem, 2500)
            setTimeout(definirEstatisticaUsuario, 2500)
        }
    } else {
        alert(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoFocarHover() {
    focar.style.cursor = 'pointer'
    focar.style.background = 'purple'
    focar.style.transition = '0.5s'
}

function botaoFocarOut() {
    focar.style.background = 'gray'
}
/*-----------------------------------------*/




/*----------GOLEM---------------*/
function ataqueAGolem() {
    let danoGolem = 3
    vidaVal = vidaVal - danoGolem
    legendaView.innerHTML = `Golem utilizou ataque básico`
}

function ataqueBGolem() {
    let danoGolem = 6
    vidaVal = vidaVal - danoGolem
    legendaView.innerHTML = `Golem utilizou ataque especial`
}
/*-----------------------------------------*/



