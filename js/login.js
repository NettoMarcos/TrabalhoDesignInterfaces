
function conectar(){
    let userInput = document.querySelector('#user')
  
    let senhaInput = document.querySelector('#senha')
  
    let msg = document.querySelector('#msg')
    let listaUser = []
  
    if(userInput.value !== '' && senhaInput.value !== ''){
        let userValid = {
            user: '',
            senha: ''
        }
      
        listaUser = JSON.parse(localStorage.getItem('listaUser'))
      
        listaUser.forEach((item) => {
            if(userInput.value == item.user && senhaInput.value == item.senha){
           
                userValid = {
                    user: item.user,
                    senha: item.senha
                }
          
            }
        })
       
        if(userInput.value == userValid.user && senhaInput.value == userValid.senha){
            msg.setAttribute('style', 'display: block')
            msg.innerHTML = 'Conectando...'

            
            setTimeout(()=>{
                window.location.href = 'tela_usuario.html'
            }, 1000)
            let token = Math.random().toString(16).substring(2)
            sessionStorage.setItem('token', token)

            sessionStorage.setItem('userLogado', JSON.stringify(userValid.user))

        } else {   
            msg.setAttribute('style', 'display: block')
            msg.innerHTML = 'Usuário ou senha incorretos'
        }
    }else{
        msg.setAttribute('style', 'display: block')
        msg.innerHTML = 'Preencha todos os campos'    
    } 
}