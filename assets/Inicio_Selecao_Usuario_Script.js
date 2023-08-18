/*----------------------------------------INICIO----------------------------------------*/
selecao.style.display = 'none'
usuario.style.display = 'none'
classe.style.display = 'none'

var botaoInicioVal = window.document.querySelector('input#botaoInicio')
botaoInicioVal.addEventListener('click', botaoInicioClick)
botaoInicioVal.addEventListener('mouseover', botaoInicioHover) //Serve para deixar o html mais limpinho
botaoInicioVal.addEventListener('mouseout', botaoInicioOut)

function botaoInicioClick() {
    inicio.style.display = 'none'
    selecao.style.display = 'contents'
}
function botaoInicioHover() {
    botaoInicioVal.style.animation = 'botaoAnimacao 3s 0ms infinite running'//começa a animação
    botaoInicioVal.style.background = 'gray'
}
function botaoInicioOut() {
    botaoInicioVal.style.background = 'black'
    botaoInicioVal.style.transform = 'scale(1.0)'
    botaoInicioVal.style.animation = 'paused'//pausa a animação
}
//animation: name duration timing-function delay iteration-count direction fill-mode;
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------SELEÇÃO DE GÊNERO----------------------------------------*/
var H_M = 0

var botaoSelecaoVal_M = window.document.querySelector('input#botaoSelecao_M')
botaoSelecaoVal_M.addEventListener('click', botaoSelecaoClick_M)
botaoSelecaoVal_M.addEventListener('mouseover', botaoSelecaoHover_M) //Serve para deixar o html mais limpinho
botaoSelecaoVal_M.addEventListener('mouseout', botaoSelecaoOut_M)

function botaoSelecaoClick_M() {
    H_M = 1
    selecao.style.display = 'none'
    usuario.style.display = 'contents'
}
function botaoSelecaoHover_M() {
    botaoSelecaoVal_M.style.animation = 'botaoAnimacao_M 1s 0ms infinite running'//começa a animação
    botaoSelecaoVal_M.style.background = 'blue'
    botaoSelecaoVal_M.style.transition = '2s'
}
function botaoSelecaoOut_M() {
    botaoSelecaoVal_M.style.background = 'black'
}

var botaoSelecaoVal_F = window.document.querySelector('input#botaoSelecao_F')
botaoSelecaoVal_F.addEventListener('click', botaoSelecaoClick_F)
botaoSelecaoVal_F.addEventListener('mouseover', botaoSelecaoHover_F) //Serve para deixar o html mais limpinho
botaoSelecaoVal_F.addEventListener('mouseout', botaoSelecaoOut_F)

function botaoSelecaoClick_F() {
    H_M = 2
    selecao.style.display = 'none'
    usuario.style.display = 'contents'
}
function botaoSelecaoHover_F() {
    botaoSelecaoVal_F.style.animation = 'botaoAnimacao_F 1s 0ms infinite running'//começa a animação
    botaoSelecaoVal_F.style.background = 'pink'
    botaoSelecaoVal_F.style.transition = '2s'
}
function botaoSelecaoOut_F() {
    botaoSelecaoVal_F.style.background = 'black'
}
/*----------------------------------------------------------------------------------------------------*/

/*----------------------------------------SELEÇÃO DE NOME----------------------------------------*/

var enviarUsuarioVal = window.document.querySelector('input#enviarUsuario')
enviarUsuarioVal.addEventListener('click', enviarUsuarioClick)
enviarUsuarioVal.addEventListener('mouseover', enviarUsuarioHover) //Serve para deixar o html mais limpinho
enviarUsuarioVal.addEventListener('mouseout', enviarUsuarioOut)


function enviarUsuarioClick() {
    usuario.style.display = 'none'
    classe.style.display = 'contents'
}
function enviarUsuarioHover() {
    enviarUsuarioVal.style.animation = 'botaoAnimacao 2s 0ms infinite running'//começa a animação
    enviarUsuarioVal.style.background = 'gray'
}
function enviarUsuarioOut() {
    enviarUsuarioVal.style.background = 'black'
    enviarUsuarioVal.style.transform = 'scale(1.0)'
    enviarUsuarioVal.style.animation = 'paused'//pausa a animação
}
/*----------------------------------------------------------------------------------------------------*/

