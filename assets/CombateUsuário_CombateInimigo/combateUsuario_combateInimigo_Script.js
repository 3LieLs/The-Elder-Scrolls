/*----------------------------------------VARIÁVEIS----------------------------------------*/
var vidaCombateVal = 0, manaCombateVal = 0, energiaCombateVal = 0, danoCombateVal, defesaCombateVal
var faseGoblin = false, faseGolem = false, faseDragao = false, vezUsuario = true
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function acaoIntervalo() {
    vezUsuario = true
}

/*----------ATAQUE BÁSICO---------------*/
var botaoAtaqueA = window.document.querySelector('input#ataqueA')

function ataqueATempo() {
    if (goblinVidaCombateVal - danoVal < 0) {
        goblinVidaCombateVal = 0
    } else {
        goblinVidaCombateVal = goblinVidaCombateVal - danoVal
    }
    if (golemVidaCombateVal - danoVal < 0) {
        golemVidaCombateVal = 0
    } else {
        golemVidaCombateVal = golemVidaCombateVal - danoVal
    }
    if (dragaoVidaCombateVal - danoVal < 0) {
        dragaoVidaCombateVal = 0
    } else {
        dragaoVidaCombateVal = dragaoVidaCombateVal - danoVal
    }
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Especial<br>Dano causado: ${danoVal + (danoVal / 2)}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    energiaCombateVal = energiaCombateVal - energiaCustoVal
    manaCombateVal = manaCombateVal - manaCustoVal
    usuarioCombateView()
    inimigoCombateView()
}

function botaoAtaqueAClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0 || energiaCombateVal - energiaCustoVal <= 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }
        if (manaCombateVal <= 0 || manaCombateVal - manaCustoVal <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        } else {
            vezUsuario = false
            setTimeout(ataqueATempo, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGoblin == true) {
                setTimeout(ataqueGoblin, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
            }
            if (faseGolem == true) {
                setTimeout(ataqueGolem, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
            }
            if (faseDragao == true) {
                setTimeout(ataqueDragao, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
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
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------ATAQUE ESPECIAL---------------*/
var botaoAtaqueB = window.document.querySelector('input#ataqueB')

function ataqueBTempo() {
    if (goblinVidaCombateVal - (danoVal + (danoVal / 2)) < 0) {
        goblinVidaCombateVal = 0
    } else {
        goblinVidaCombateVal = goblinVidaCombateVal - (danoVal + (danoVal / 2))
    }
    if (golemVidaCombateVal - (danoVal + (danoVal / 2)) < 0) {
        golemVidaCombateVal = 0
    } else {
        golemVidaCombateVal = golemVidaCombateVal - (danoVal + (danoVal / 2))
    }
    if (dragaoVidaCombateVal - (danoVal + (danoVal / 2)) < 0) {
        dragaoVidaCombateVal = 0
    } else {
        dragaoVidaCombateVal = dragaoVidaCombateVal - (danoVal + (danoVal / 2))
    }
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Especial<br>Dano causado: ${danoVal + (danoVal / 2)}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    energiaCombateVal = energiaCombateVal - (energiaCustoVal + (energiaCustoVal / 2))
    manaCombateVal = manaCombateVal - (manaCustoVal + (manaCustoVal / 2))
    usuarioCombateView()
    inimigoCombateView()
}

function botaoAtaqueBClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0 || energiaCombateVal - (energiaCustoVal + (energiaCustoVal / 2)) <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        if (manaCombateVal <= 0 || manaCombateVal - (manaCustoVal + (manaCustoVal / 2)) <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        } else {
            vezUsuario = false
            setTimeout(ataqueBTempo, 500)
            setTimeout(acaoIntervalo, 2500)
            if (faseGoblin == true) {
                setTimeout(ataqueGoblin, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
            }
            if (faseGolem == true) {
                setTimeout(ataqueGolem, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
            }
            if (faseDragao == true) {
                setTimeout(ataqueDragao, 2500)
                setTimeout(usuarioCombateView, 2500)
                setTimeout(inimigoCombateView, 2500)
                setTimeout(inimigoDerrotado, 2500)
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
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------DEFENDER---------------*/
var botaoDefesa = window.document.querySelector('input#defesa')

function defesaTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Defesa<br> Defesa aumentou para ${defesaVal + (defesaVal / 2)}`
}

function botaoDefesaClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(defesaTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGoblin == true) {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseGolem == true) {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseDragao == true) {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
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
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------DESCANSAR---------------*/
var botaoDescansar = window.document.querySelector('input#descansar')

function descansarTempo() {
    if (energiaCombateVal + energiaRecuperacaoVal > energiaVal) {
        energiaCombateVal = energiaVal
    } else {
        energiaCombateVal = energiaCombateVal + energiaRecuperacaoVal
    }
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Descanso<br>Energia recuperado: ${energiaRecuperacaoVal}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    usuarioCombateView()
    inimigoCombateView()
}

function botaoDescansarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(descansarTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGoblin == true) {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseGolem == true) {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseDragao == true) {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
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
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------FOCAR---------------*/
var botaoFocar = window.document.querySelector('input#focar')

function focarTempo() {
    if (manaCombateVal + manaRecuperacaoVal > manaVal) {
        manaCombateVal = manaVal
    } else {
        manaCombateVal = manaCombateVal + manaRecuperacaoVal
    }
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Focar<br>Mana recuperado: ${manaRecuperacaoVal}`
    usuarioCombateView()
    inimigoCombateView()
}

function botaoFocarClick() {
    if (vezUsuario == true) {
        vezUsuario = false
        setTimeout(focarTempo, 500)
        setTimeout(acaoIntervalo, 2500)
        if (faseGoblin == true) {
            setTimeout(ataqueGoblin, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseGolem == true) {
            setTimeout(ataqueGolem, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
        }
        if (faseDragao == true) {
            setTimeout(ataqueDragao, 2500)
            setTimeout(usuarioCombateView, 2500)
            setTimeout(inimigoCombateView, 2500)
            setTimeout(inimigoDerrotado, 2500)
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
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD----------------GOLEM HUD---------------------------------------------------------------------------*/
function ataqueGoblin() {
    if (goblinVidaCombateVal > 0) {
        if (goblinEnergiaCombateVal > 0) {
            danoGoblin = Math.round(Math.random() * (100 - 0) + 0);
            if (danoGoblin <= 60) {
                legendaView.innerHTML = `Goblin utilizou ataque básico<br>Dano causado: ${danoGoblinA}<br>Energia usada: ${energiaGastoGoblinA}`
                vidaCombateVal = vidaCombateVal - danoGoblinA
                goblinEnergiaCombateVal = goblinEnergiaCombateVal - energiaGastoGoblinA
            } else {
                legendaView.innerHTML = `Goblin utilizou ataque especial<br>Dano causado: ${danoGoblinB}<br>Energia usada: ${energiaGastoGoblinB}`
                vidaCombateVal = vidaCombateVal - danoGoblinB
                goblinEnergiaCombateVal = goblinEnergiaCombateVal - energiaGastoGoblinB
            }
        } else {
            energiaRecuperacaoGoblin = Math.round(Math.random() * (6 - 3) + 3);
            goblinEnergiaCombateVal = goblinEnergiaCombateVal + energiaRecuperacaoGoblin
            legendaView.innerHTML = `Goblin utilizou descanso<br>Energia recuperada: ${energiaRecuperacaoGoblin}`
        }
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------GOBLIN HUD---------------------------------------------------------------------------*/
function ataqueGolem() {
    if (golemEnergiaCombateVal > 0) {
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
    } else {
        energiaRecuperacaoGolem = Math.round(Math.random() * (15 - 10) + 10);
        golemEnergiaCombateVal = golemEnergiaCombateVal + energiaRecuperacaoGolem
        legendaView.innerHTML = `Golem utilizou descanso<br>Energia recuperada: ${energiaRecuperacaoGolem}`
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------DRAGÃO HUD---------------------------------------------------------------------------*/
function ataqueDragao() {
    if (dragaoManaCombateVal > 0) {
        danoDragao = Math.round(Math.random() * (100 - 0) + 0);
        if (danoDragao <= 80) {
            legendaView.innerHTML = `Dragao utilizou ataque básico<br>Dano causado: ${danoDragaoA}<br>Mana usada: ${manaGastoDragaoA}`
            vidaCombateVal = vidaCombateVal - danoDragaoA
            dragaoManaCombateVal = dragaoManaCombateVal - manaGastoDragaoA
        } else {
            legendaView.innerHTML = `Dragao utilizou ataque especial<br>Dano causado: ${danoDragaoB}<br>Mana usada: ${manaGastoDragaoB}`
            vidaCombateVal = vidaCombateVal - danoDragaoB
            dragaoManaCombateVal = dragaoManaCombateVal - manaGastoDragaoB
        }
    } else {
        manaRecuperacaoDragao = Math.round(Math.random() * (40 - 20) + 20);
        dragaoManaCombateVal = dragaoManaCombateVal + manaRecuperacaoDragao
        legendaView.innerHTML = `Dragao utilizou focar<br>Mana recuperada: ${manaRecuperacaoDragao}`
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
