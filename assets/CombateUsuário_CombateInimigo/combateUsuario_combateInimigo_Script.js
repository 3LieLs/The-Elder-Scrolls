/*----------------------------------------VARIÁVEIS----------------------------------------*/
var vidaCombateVal = 0, manaCombateVal = 0, energiaCombateVal = 0, danoCombateVal, defesaCombateVal
var faseGoblin = false, faseGolem = false, faseDragao = false, vezUsuario = true, mainHudDisplay = false

parseInt(vidaCombateVal), parseInt(manaCombateVal), parseInt(energiaCombateVal), parseInt(danoCombateVal), parseInt(defesaCombateVal)
parseInt(vidaVal), parseInt(manaVal), parseInt(energiaVal)

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function acaoIntervalo() {
    vezUsuario = true
}
/*----------ATAQUE BÁSICO---------------*/
var botaoAtaqueBasico = window.document.querySelector('input#ataqueBasico')

document.addEventListener(`keypress`, ataqueBasicoAtalho)
botaoAtaqueBasico.addEventListener('click', botaoAtaqueBasicoClick)
botaoAtaqueBasico.addEventListener('mouseover', botaoAtaqueBasicoHover)
botaoAtaqueBasico.addEventListener('mouseout', botaoAtaqueBasicoOut)

function ataqueBasicoTempo() {
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
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Básico<br>Dano causado: ${danoVal}<br>Energia gasta: ${energiaCustoVal}`
    energiaCombateVal = energiaCombateVal - energiaCustoVal
    manaCombateVal = manaCombateVal - manaCustoVal
    usuarioCombateView()
    inimigoCombateView()
}

function ataqueBasicoAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '1') {
            console.log("Ataque Básico usado");
            botaoAtaqueBasico.click()
        }
    }
}

function botaoAtaqueBasicoClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0 || energiaCombateVal - energiaCustoVal <= 0) {
            alert(`Você está sem energia o suficiente para fazer está ação`)
        }
        if (manaCombateVal <= 0 || manaCombateVal - manaCustoVal <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        } else {
            vezUsuario = false
            setTimeout(ataqueBasicoTempo, 500)
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
        console.log(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueBasicoHover() {
    if (vezUsuario == true) {
        ataqueBasico.style.cursor = 'pointer'
        ataqueBasico.style.background = 'purple'
        ataqueBasico.style.transition = '0.5s'
    } else {
        ataqueBasico.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueBasicoOut() {
    ataqueBasico.style.background = 'gray'
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------ATAQUE ESPECIAL---------------*/
var botaoAtaqueEspecial = window.document.querySelector('input#ataqueEspecial')

document.addEventListener(`keypress`, ataqueEspecialAtalho)
botaoAtaqueEspecial.addEventListener('click', botaoAtaqueEspecialClick)
botaoAtaqueEspecial.addEventListener('mouseover', botaoAtaqueEspecialHover)
botaoAtaqueEspecial.addEventListener('mouseout', botaoAtaqueEspecialOut)

function ataqueEspecialTempo() {
    if (goblinVidaCombateVal - parseInt((danoVal + (danoVal / 2))) < 0) {
        goblinVidaCombateVal = 0
    } else {
        goblinVidaCombateVal = goblinVidaCombateVal - parseInt((danoVal + (danoVal / 2)))
    }
    if (golemVidaCombateVal - parseInt((danoVal + (danoVal / 2))) < 0) {
        golemVidaCombateVal = 0
    } else {
        golemVidaCombateVal = golemVidaCombateVal - parseInt((danoVal + (danoVal / 2)))
    }
    if (dragaoVidaCombateVal - parseInt((danoVal + (danoVal / 2))) < 0) {
        dragaoVidaCombateVal = 0
    } else {
        dragaoVidaCombateVal = dragaoVidaCombateVal - parseInt((danoVal + (danoVal / 2)))
    }
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Ataque Especial<br>Dano causado: ${danoVal + (danoVal / 2)}<br>Energia gasta: ${energiaCustoVal + (energiaCustoVal / 2)}`
    energiaCombateVal = energiaCombateVal - parseInt((energiaCustoVal + (energiaCustoVal / 2)))
    manaCombateVal = manaCombateVal - parseInt((manaCustoVal + (manaCustoVal / 2)))
    usuarioCombateView()
    inimigoCombateView()
}

function ataqueEspecialAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '2') {
            console.log("Ataque Especial usado");
            botaoAtaqueEspecial.click()
        }
    }
}

function botaoAtaqueEspecialClick() {
    if (vezUsuario == true) {
        if (energiaCombateVal <= 0 || energiaCombateVal - parseInt((energiaCustoVal + (energiaCustoVal / 2))) <= 0) {
            alert(`Você está cansado demais para fazer está ação`)
        }
        if (manaCombateVal <= 0 || manaCombateVal - parseInt((manaCustoVal + (manaCustoVal / 2))) <= 0) {
            alert(`Você está sem mana o suficiente para fazer está ação`)
        } else {
            vezUsuario = false
            setTimeout(ataqueEspecialTempo, 500)
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
        console.log(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
    }
}

function botaoAtaqueEspecialHover() {
    if (vezUsuario == true) {
        ataqueEspecial.style.cursor = 'pointer'
        ataqueEspecial.style.background = 'purple'
        ataqueEspecial.style.transition = '0.5s'
    } else {
        ataqueEspecial.style.cursor = 'not-allowed'
    }
}

function botaoAtaqueEspecialOut() {
    ataqueEspecial.style.background = 'gray'
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------DEFENDER---------------*/
var botaoDefesa = window.document.querySelector('input#defesa')

document.addEventListener(`keypress`, defesaAtalho)
botaoDefesa.addEventListener('click', botaoDefesaClick)
botaoDefesa.addEventListener('mouseover', botaoDefesaHover)
botaoDefesa.addEventListener('mouseout', botaoDefesaOut)

function defesaTempo() {
    legendaView.innerHTML = `${nomeUsuarioVal} utilizou Defesa<br> Defesa aumentou para ${parseInt(defesaVal + (defesaVal / 2))}`
}

function defesaAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '3') {
            console.log("Defesa usado");
            botaoDefesa.click()
        }
    }
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
        console.log(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
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

document.addEventListener(`keypress`, descansarAtalho)
botaoDescansar.addEventListener('click', botaoDescansarClick)
botaoDescansar.addEventListener('mouseover', botaoDescansarHover)
botaoDescansar.addEventListener('mouseout', botaoDescansarOut)

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

function descansarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '4') {
            console.log("Descanso usado");
            botaoDescansar.click()
        }
    }
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
        console.log(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
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

document.addEventListener(`keypress`, focarAtalho)
botaoFocar.addEventListener('click', botaoFocarClick)
botaoFocar.addEventListener('mouseover', botaoFocarHover)
botaoFocar.addEventListener('mouseout', botaoFocarOut)

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

function focarAtalho(atalho) {
    if (mainHudDisplay == true) {
        if (atalho.key == '5') {
            console.log("Foco usado");
            botaoFocar.click()
        }
    }
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
        console.log(`Calma ${nomeUsuarioVal}, espera a sua vez.`)
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
