const userLogado = JSON.parse(sessionStorage.getItem('userLogado'))

if(sessionStorage.getItem('token') == null ){ 
    alert('Logue em sua conta.')  
    window.location.href = "login.html" 
}

