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
