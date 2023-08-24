/*----------------------------------------VARIÁVEIS----------------------------------------*/
var menuAbertoFechado = false, safeZone = false
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/
mainSafeZone.style.display = 'none', mainBotaoMenu.style.display = 'none', menu.style.display = 'none'
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------MENU---------------------MENU---------------------MENU---------------------MENU---------------------MENU---------------------------------------------------------------------------*/
var menuNomeVal = window.document.querySelector(`p#menuNome`)
var menuGeneroVal = window.document.querySelector(`p#menuGenero`)
var menuClasseVal = window.document.querySelector(`p#menuClasse`)

var menuVidaVal = window.document.querySelector(`p#menuVida`)
var menuEnergiaVal = window.document.querySelector(`p#menuEnergia`)
var menuManaVal = window.document.querySelector(`p#menuMana`)

var menuArmaVal = window.document.querySelector(`p#menuArma`)
var menuDanoVal = window.document.querySelector(`p#menuDano`)
var menuEnergiaCustoVal = window.document.querySelector(`p#menuEnergiaCusto`)
var menuManaCustoVal = window.document.querySelector(`p#menuManaCusto`)

var menuArmaduraVal = window.document.querySelector(`p#menuArmadura`)
var menuDefesaVal = window.document.querySelector(`p#menuDefesa`)
var menuEnergiaRecuperacaoVal = window.document.querySelector(`p#menuEnergiaRecuperacao`)
var menuManaRecuperacaoVal = window.document.querySelector(`p#menuManaRecuperacao`)

var menuBotaoVal = window.document.querySelector(`input#botaoMenu`)
document.addEventListener(`keypress`, menuAtalho)
menuBotaoVal.addEventListener('click', menuDisplay)

function menuAtalho(atalho) {
    if (safeZone == true) {
        if (atalho.key == 'b') {
            console.log("Menu aberto");
            menuBotaoVal.click()
        }
    }
}

function menuDisplay() {
    if (menuAbertoFechado == false) {
        menu.style.display = 'contents'

        menuNomeVal.innerHTML = `Nome: ${nomeUsuarioVal}`
        menuGeneroVal.innerHTML = `Gênero: ${generoVal}`
        menuClasseVal.innerHTML = `Classe: ${classeVal}`

        menuVidaVal.innerHTML = `Vida: ${vidaVal}`
        menuEnergiaVal.innerHTML = `Energia: ${energiaVal}`
        menuManaVal.innerHTML = `Mana: ${manaVal}`

        menuArmaVal.innerHTML = `Arma:<br>${armaVal}`
        menuDanoVal.innerHTML = `Dano: ${danoVal}`
        menuEnergiaCustoVal.innerHTML = `E custo: ${energiaCustoVal}`
        menuManaCustoVal.innerHTML = `M custo: ${manaCustoVal}`

        menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraVal}`
        menuDefesaVal.innerHTML = `Defesa: ${defesaVal}`
        menuEnergiaRecuperacaoVal.innerHTML = `E recuperação: ${energiaRecuperacaoVal}`
        menuManaRecuperacaoVal.innerHTML = `M recuperação: ${manaRecuperacaoVal}`
        
        menuAbertoFechado = true
    } else {
        menu.style.display = 'none'
        menuAbertoFechado = false
    }
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/
var mensagemSafeZoneVal = window.document.querySelector('p#mensagemSafeZone')
mensagemSafeZoneVal.innerHTML = ``

/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/
/*----------------------GOLEM--------------------GOLEM--------------------GOLEM--------------------GOLEM--------------------GOLEM---------------------------------------------------------------------------*/

var botaoGolemVal = window.document.querySelector('input#botaoGolem')
botaoGolemVal.addEventListener('click', botaoGolemClick)
botaoGolemVal.addEventListener('mouseover', botaoGolemHover)
botaoGolemVal.addEventListener('mouseout', botaoGolemOut)

function botaoGolemClick() {
    faseGolem = true
    mainHudDisplay = true
    safeZone = true
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseGolem.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
}
function botaoGolemHover() {
    botaoGolemVal.style.cursor = 'pointer'
    botaoGolemVal.style.background = 'orange'
    botaoGolemVal.style.transition = '0.5s'
}
function botaoGolemOut() {
    botaoGolemVal.style.background = 'gray'
}
/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/
/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/

var botaoGoblinVal = window.document.querySelector('input#botaoGoblin')
botaoGoblinVal.addEventListener('click', botaoGoblinClick)
botaoGoblinVal.addEventListener('mouseover', botaoGoblinHover)
botaoGoblinVal.addEventListener('mouseout', botaoGoblinOut)

function botaoGoblinClick() {
    faseGoblin = true
    mainHudDisplay = true
    safeZone = true
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseGoblin.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
}
function botaoGoblinHover() {
    botaoGoblinVal.style.cursor = 'pointer'
    botaoGoblinVal.style.background = 'orange'
    botaoGoblinVal.style.transition = '0.5s'
}
function botaoGoblinOut() {
    botaoGoblinVal.style.background = 'gray'
}
/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/
/*----------------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE----------------SAFE ZONE---------------------------------------------------------------------------*/

var botaoDragaoVal = window.document.querySelector('input#botaoDragao')
botaoDragaoVal.addEventListener('click', botaoDragaoClick)
botaoDragaoVal.addEventListener('mouseover', botaoDragaoHover)
botaoDragaoVal.addEventListener('mouseout', botaoDragaoOut)

function botaoDragaoClick() {
    faseDragao = true
    mainHudDisplay = true
    safeZone = true
    mainSafeZone.style.display = 'none'
    mainHud.style.display = 'contents'
    mainFaseDragao.style.display = 'contents'
    definirEstatisticaGeral()
    usuarioCombateView()
    inimigoCombateView()
}
function botaoDragaoHover() {
    botaoDragaoVal.style.cursor = 'pointer'
    botaoDragaoVal.style.background = 'orange'
    botaoDragaoVal.style.transition = '0.5s'
}
function botaoDragaoOut() {
    botaoDragaoVal.style.background = 'gray'
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
