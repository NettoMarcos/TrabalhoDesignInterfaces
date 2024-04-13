let userInput = document.querySelector("#user");
let labelUser = document.querySelector("#labelUser");
let validUser = false;

let senhaInput = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmaSenhaInput = document.querySelector("#confirmarSenha");
let labelConfirma = document.querySelector("#labelConfirma");
let validConfirma = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

userInput.addEventListener("keyup", () => {
    if (userInput.value.length <= 3) {
        labelUser.innerHTML = 'Usuário *mínimo 4 caracteres';
        userInput.style.borderColor = 'red';
        validUser = false;
    } else {
        labelUser.innerHTML = 'Usuário';
        userInput.style.borderColor = 'initial';
        validUser = true;
    }

});

senhaInput.addEventListener("keyup", () => {
    if (senhaInput.value.length <= 5) {
        labelSenha.innerHTML = 'Senha *mínimo 6 caracteres';
        senhaInput.style.borderColor = 'red';
        validSenha = false;
    } else {
        labelSenha.innerHTML = 'Senha';
        senhaInput.style.borderColor = 'initial';
        validSenha = true;
    }
 
});

confirmaSenhaInput.addEventListener("keyup", () => {
    if (confirmaSenhaInput.value != senhaInput.value) {
        labelConfirma.innerHTML = 'Confirmar Senha *Senhas diferentes';
        confirmaSenhaInput.style.borderColor = 'red';
        validConfirma = false;
    } else {
        labelConfirma.innerHTML = 'Confirmar Senha';
        confirmaSenhaInput.style.borderColor = 'initial';
        validConfirma = true;
    }
   
});

function cadastrar() {
    if (validUser && validSenha && validConfirma) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        if (listaUser.length > 0) {
            let usuarioExistente = listaUser.find(user => user.user === userInput.value);
            if (usuarioExistente) {
                msgError.style.display = 'block';
                msgError.innerHTML = 'Usuário já cadastrado';
                return;
            }
        }

        msgSuccess.style.display = 'block';
        msgSuccess.innerHTML = 'Cadastro bem sucedido...';
        msgError.style.display = 'none';
        msgError.innerHTML = '';

        listaUser.push({
            user: userInput.value,
            senha: senhaInput.value
        });

        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    } else{
        msgError.style.display = 'block';
        msgError.innerHTML = 'Preencher todos os campos corretamente.';
        msgSuccess.style.display = 'none';
        msgSuccess.innerHTML = '';
    }
}