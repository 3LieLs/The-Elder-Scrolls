/*----------------------------------------VARIÁVEIS----------------------------------------*/
var menuAbertoFechado = false
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------DISPLAY----------------------------------------*/
mainSafeZone.style.display = 'none', mainBotaoMenu.style.display = 'none', menu.style.display = 'none'
/*----------------------------------------------------------------------------------------------------*/

/*----------------------MENU---------------------MENU---------------------MENU---------------------MENU---------------------MENU---------------------------------------------------------------------------*/
var menuNomeVal = window.document.querySelector(`p#menuNome`)
var menuGeneroVal = window.document.querySelector(`p#menuGenero`)
var menuClasseVal = window.document.querySelector(`p#menuClasse`)

var menuVidaVal = window.document.querySelector(`p#menuVida`)
var menuEnergiaVal = window.document.querySelector(`p#menuEnergia`)
var menuManaVal = window.document.querySelector(`p#menuMana`)

var menuArmaVal = window.document.querySelector(`p#menuArma`)
var menuDanoVal = window.document.querySelector(`p#menuDano`)
var menuArmaduraVal = window.document.querySelector(`p#menuArmadura`)
var menuDefesaVal = window.document.querySelector(`p#menuDefesa`)

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
        menuArmaduraVal.innerHTML = `Armadura:<br>${armaduraVal}`
        menuDefesaVal.innerHTML = `Defesa: ${defesaVal}`
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

var botaoSafeZoneVal = window.document.querySelector('input#botaoSafeZone')
botaoSafeZoneVal.addEventListener('click', botaoSafeZoneClick)
botaoSafeZoneVal.addEventListener('mouseover', botaoSafeZoneHover)
botaoSafeZoneVal.addEventListener('mouseout', botaoSafeZoneOut)

function botaoSafeZoneClick() {
    mainSafeZone.style.display = 'none'
    definirEstatisticaUsuario()
    definirEstatisticaGolem()
    mainHud.style.display = 'contents'
    faseGolem = true
    mainFaseGolem.style.display = 'contents' 
}
function botaoSafeZoneHover() {
    botaoSafeZoneVal.style.cursor = 'pointer'
    botaoSafeZoneVal.style.background = 'orange'
    botaoSafeZoneVal.style.transition = '0.5s'
}
function botaoSafeZoneOut() {
    botaoSafeZoneVal.style.background = 'gray'
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/