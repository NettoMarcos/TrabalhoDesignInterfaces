
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
        } else {   
            msg.setAttribute('style', 'display: block')
            msg.innerHTML = 'Usuário ou senha incorretos'
        }
    }else{
        msg.setAttribute('style', 'display: block')
        msg.innerHTML = 'Preencha todos os campos'    
    } 
}