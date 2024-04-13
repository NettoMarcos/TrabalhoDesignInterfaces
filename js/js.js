let emailInput = document.querySelector("#e-mail")
let labelEmail = document.querySelector("#labelEmail")
let validEmail = false

let userInput = document.querySelector("#user")
let LabelUser = document.querySelector("#labelUser")
let validUser = false
let userExistente = false

let senhaInput = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmaSenhaInput = document.querySelector("#confirmarSenha")
let labelConfirma = document.querySelector("#labelConfirma")
let validConfirma = false

let msgError = document.querySelector("#msgError")
let msgSucess = document.querySelector("#msgSuccess")



emailInput.addEventListener("keyup",() =>{
    if(!isEmailValid(emailInput.value)){
        labelEmail.innerHTML = 'E-mail *Invalido'
        emailInput.setAttribute('style', 'border-color: red')
        validEmail = false
    }
    else{
        labelEmail.innerHTML = 'E-mail'
        emailInput.setAttribute('style', 'border-color: none')
        validEmail = true
    }
    if(emailInput.value === ''){
        labelEmail.innerHTML = 'E-mail'
        validEmail = false
    }
})
userInput.addEventListener("keyup",() =>{
    if(userInput.value.length <= 3){
        labelUser.innerHTML = 'Usuário *minimo 4 caracteres'
        userInput.setAttribute('style', 'border-color: red')
        validUser = false
    }else{
        labelUser.innerHTML = 'Usuário'
        userInput.setAttribute('style', 'border-color: none')
        validUser = true
    }
    if(userInput.value === ''){
        labelUser.innerHTML = 'Usuário'
        validUser = false
    }

})
    
senhaInput.addEventListener("keyup",() =>{
    if(senhaInput.value.length <= 5){ 
        labelSenha.innerHTML = 'Senha *minimo 6 caracteres'
        senhaInput.setAttribute('style', 'border-color: red')
        validSenha = false
    }else{
        labelSenha.innerHTML = 'Senha'
        senhaInput.setAttribute('style', 'border-color: none')
        validSenha = true
    }
    if(senhaInput.value === ''){
        labelSenha.innerHTML = 'Senha'
        validSenha = false
    }
})

confirmaSenhaInput.addEventListener("keyup",() =>{
    if(confirmaSenhaInput.value != senhaInput.value){ 
        labelConfirma.innerHTML = 'Confirmar Senha *Senhas diferentes'
        confirmaSenhaInput.setAttribute('style', 'border-color: red')
        validConfirma = false
    }else{
        labelConfirma.innerHTML = 'Confirmar Senha'
        confirmaSenhaInput.setAttribute('style', 'border-color: none')
        validConfirma = true
    }
    if(confirmaSenhaInput.value === ''){
        labelConfirma.innerHTML = 'Confirmar Senha'
        confirmaSenhaInput.setAttribute('style', 'border-color: red')
        validConfirma = false
    }
})


function cadastrar(){
    if(validEmail && validUser && validSenha && validConfirma){
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        msgSucess.setAttribute('style', 'display: block')
        msgSucess.innerHTML = 'Cadastro bem sucedido...'
        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        listaUser.push({
            user: userInput.value,
            email: emailInput.value,
            senha: senhaInput.value
        })
        
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        setTimeout(()=>{
            window.location.href = 'index.html'
        }, 3000)
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Preencher todos os campos corretamente.'
        msgSucess.setAttribute('style', 'display: none')
        msgSucess.innerHTML = ''
    }
    
}

//Valida se o e-mail é valido ou não
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    )
    
    if(emailRegex.test(email)){
        return true
    }
    return false
}
