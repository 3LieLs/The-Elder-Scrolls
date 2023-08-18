
/*----------------------------------------ESCOLHA DA CLASSE----------------------------------------*/
var enviarUsuario, nomeUsuarioVal
var escolhaClasse = window.document.getElementById('mensagemClasse')
function transform() {
    enviarUsuario = window.document.querySelector('input#nomeUsuario')
    nomeUsuarioVal = String(enviarUsuario.value)
    if(H_M == 1){
        escolhaClasse.innerHTML = `Olá <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-lo.<br>Escolha a sua classe`
    }
    else{
        escolhaClasse.innerHTML = `Olá, <strong>${nomeUsuarioVal}</strong>. É um prazer conhece-la.<br>Escolha a sua classe`
    }
}



/*----------------------------------------------------------------------------------------------------*/
