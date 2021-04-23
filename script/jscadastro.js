const name = document.getElementById('nomeCompleto')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const form = document.getElementById('formCadastro')
 
form.addEventListener("submit", (valida) =>{
    let contador = 0
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
 
    // NOME
    if(name.value == '' || name.value == null){
        document.getElementById('erroNome').innerText = '*Campo obrigatório*'
        contador++
    }
 
    if(name.value != '')
    document.getElementById('erroNome').innerText = ''
 
    // SENHA
    if(senha.value == '' || senha.value == null){
        document.getElementById('erroSenha').innerText = '*Campo obrigatório*'
        contador++
    }
 
    else if(senha.value != '')
    document.getElementById('erroSenha').innerText = ''

    // E-MAIL
 
    if(!regexEmail.test(email.value)){
        document.getElementById('erroEmail').innerText = '*E-mail inválido*'
        contador++
    }
 
    else if(regexEmail.test(email.value))
    document.getElementById('erroEmail').innerText = ''
 
    // PREVENT DEFAULT
    if(contador >0){
        valida.preventDefault()
    }
})