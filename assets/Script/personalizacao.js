/*----------------------------------------SELEÇÃO DE GÊNERO----------------------------------------*/
var botaoSelecaoVal_M = window.document.querySelector('input#botaoSelecao_M')
botaoSelecaoVal_M.addEventListener('click', botaoSelecaoClick_M)
botaoSelecaoVal_M.addEventListener('mouseover', botaoSelecaoHover_M) //Serve para deixar o html mais limpinho
botaoSelecaoVal_M.addEventListener('mouseout', botaoSelecaoOut_M)

function botaoSelecaoClick_M() {
    generoVal = 'Homem'
    selecao.style.display = 'none'
    usuario.style.display = 'contents'
}
function botaoSelecaoHover_M() {
    botaoSelecaoVal_M.style.cursor = 'pointer'
    botaoSelecaoVal_M.style.background = 'blue'
    botaoSelecaoVal_M.style.transition = '0.5s'
}
function botaoSelecaoOut_M() {
    botaoSelecaoVal_M.style.background = 'black'
}

var botaoSelecaoVal_F = window.document.querySelector('input#botaoSelecao_F')
botaoSelecaoVal_F.addEventListener('click', botaoSelecaoClick_F)
botaoSelecaoVal_F.addEventListener('mouseover', botaoSelecaoHover_F) //Serve para deixar o html mais limpinho
botaoSelecaoVal_F.addEventListener('mouseout', botaoSelecaoOut_F)

function botaoSelecaoClick_F() {
    generoVal = 'Mulher'
    selecao.style.display = 'none'
    usuario.style.display = 'contents'
}
function botaoSelecaoHover_F() {
    botaoSelecaoVal_F.style.cursor = 'pointer'
    botaoSelecaoVal_F.style.background = '#F005D0'
    botaoSelecaoVal_F.style.transition = '0.5s'
}
function botaoSelecaoOut_F() {
    botaoSelecaoVal_F.style.background = 'black'
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------SELEÇÃO DE NOME----------------------------------------*/
var enviarUsuarioVal = window.document.querySelector('input#enviarUsuario')
enviarUsuarioVal.addEventListener('click', enviarUsuarioClick)
enviarUsuarioVal.addEventListener('mouseover', enviarUsuarioHover) //Serve para deixar o html mais limpinho
enviarUsuarioVal.addEventListener('mouseout', enviarUsuarioOut)


function enviarUsuarioClick() {
    usuario.style.display = 'none'
    classe.style.display = 'contents'
    classeDisplay = true
}
function enviarUsuarioHover() {
    enviarUsuarioVal.style.cursor = 'pointer'
    enviarUsuarioVal.style.animation = 'botaoAnimacao 2s 0ms infinite running'//começa a animação
    enviarUsuarioVal.style.background = 'gray'
}
function enviarUsuarioOut() {
    enviarUsuarioVal.style.background = 'black'
    enviarUsuarioVal.style.transform = 'scale(1.0)'
    enviarUsuarioVal.style.animation = 'paused'//pausa a animação
}
/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
