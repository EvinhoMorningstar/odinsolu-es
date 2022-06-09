let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let x = 2 

/** 
function validarNome() {
    if (nome.value.length < x) {
        alert("Nome invalido! digite um nome com mais de 3 letras")
    }
}

function validarEmail() {
    let textEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf ("@")== -1 ) {
        alert("Email invalido! digite um email com @")
    }
}
**/
function validarNome() {
    let textNome = document.querySelector("#txtNome")
    if (nome.value.length < x) {
        textNome.innerHTML = "Nome Invalido"
        textNome.style.color  = "red"
    } else{
        textNome.innerHTML = "Nome valido"
        textNome.style.color  = "green"
      }
}

function validarEmail() {
    let textEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf ("@")== -1 ) {
        textEmail.innerHTML = "Digite um email valido"
        textEmail.style.color  = "blue"
    } else{
        textEmail.innerHTML = "Email valido"
        textEmail.style.color  = "green"
      }
}

function validarAssunto() {
    let textAssunto = document.querySelector("#txtAssunto") 
    if (assunto.value.length  < 100){
        textAssunto.innerHTML = "digite até 100 caracteres"
        textAssunto.style.color  = "red"
    } else {
        textAssunto.innerHTML = "assunto valido"
        textAssunto.style.color  = "green"
    }
}