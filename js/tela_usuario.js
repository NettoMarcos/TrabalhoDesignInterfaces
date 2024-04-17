const userLogado = JSON.parse(sessionStorage.getItem('userLogado'))

if(sessionStorage.getItem('token') == null ){ 
    alert('Logue em sua conta.')  
    window.location.href = "login.html" 
}


const modal = document.querySelector('.modal-container')
const sTitulo = document.querySelector('#titulo-filme')
const sAno = document.querySelector('#ano')
const sGenero = document.querySelector('#genero')
const sDiretor = document.querySelector('#diretor')
const corpo = document.querySelector('#filmes')

function insertFilme(filme, index){
    
    corpo.innerHTML += `
    <div class="filme">
        <div class="picture">
            <img src="Images/Logo_fundo_vermelho.png" alt="">
        </div>
        <div class="info">
            <h3>${filme.titulo}</h3>
        </div>
        
        <div class="info">
            <p>Ano: ${filme.ano}</p>
        </div>
        <div class="info">
            <p>Gênero: ${filme.genero}</p>
        </div>
        <div class="info">
            <p>Diretor: ${filme.diretor}</p>
        </div>
        <div class="infobtn">
            <button onclick="deleteFilme(${index})">Deletar</button>
        </div>
    </div>
    `
}



function deleteFilme(index){
    let filmes = JSON.parse(localStorage.getItem(`${userLogado}Filmes`)) || [];
    filmes.splice(index, 1);
    localStorage.setItem(`${userLogado}Filmes`, JSON.stringify(filmes));
    loadFilmes(); 
}

function openModal(){
    modal.setAttribute('style', 'visibility: visible')
    
    this.titulo.value = ''
    this.ano.value = ''
    this.genero.value = ''
    this.diretor.value = ''
    
}
function adicionar(){
    let listaFilmes = JSON.parse(localStorage.getItem(`${userLogado}Filmes`) || '[]')

    if(sTitulo.value === '' || sAno === '' || sGenero === '' || sDiretor === ''){
        return
    }

    listaFilmes.push({
        titulo: sTitulo.value,
        ano: sAno.value,
        genero: sGenero.value,
        diretor: sDiretor.value
    })

    localStorage.setItem(`${userLogado}Filmes`, JSON.stringify(listaFilmes))

  loadFilmes()
  modal.setAttribute('style', 'visibility: hidden')
}
function cancelar(){
    modal.setAttribute('style', 'visibility: hidden')
}

function loadFilmes() {
    filmes =  JSON.parse(localStorage.getItem(`${userLogado}Filmes`))
    corpo.innerHTML = ''
    filmes.forEach((filmes, index) =>{
        insertFilme(filmes, index)
    })
   console.log(filmes)
}

loadFilmes()
