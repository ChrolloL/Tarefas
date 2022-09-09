const frm = document.querySelector('form')
const dvQuadro = document.getElementById('divQuadro')

frm.addEventListener('submit', (e) => {

    e.preventDefault() // evita o envio do formulário
    const tarefa = frm.inTarefa.value //obtem o conteúdo digitado
    console.log(tarefa)
    const h5 = document.createElement('h5')
    const texto = document.createTextNode(tarefa)
    h5.appendChild(texto) //define que o texto será filho de h5
    dvQuadro.appendChild(h5) //define que h5 será filho da divQuadro

    frm.inTarefa.value = ''
    frm.inTarefa.focus()

})

frm.btnSelecionar.addEventListener('click', () => {
    
    const tarefas = document.querySelectorAll('h5') //pega todos os h5 que estão no form e armazena numa lista
    if (tarefas.length == 0) {
        alert('Não há tarefas para selecionar!!')
        return
    }

    let cont = -1

    for (let i = 0; i < tarefas.length; i++) {
       
        
       if (tarefas[i].className == 'tarefa-selecionada') {
            tarefas[i].className = 'tarefa-normal'
            cont = i
            break
       }
    }
    
    if (cont == tarefas.length - 1) {
        cont = -1
    }
    tarefas[cont + 1].className = 'tarefa-selecionada' //muda o estilo da próxima linha

    
})

frm.btnRetirar.addEventListener('click', () => {
    
    const tarefas = document.querySelectorAll('h5') //pega todos os h5 que estão no form e armazena numa lista
    
    let aux = 0

    for (let i = 0; i < tarefas.length; i++) {
       
        
       if (tarefas[i].className == 'tarefa-selecionada') {
         tarefas.Splice(i)
         aux = 1
         return
       }  
    }

    if (aux == 0) {
        alert('Selecione uma tarefa para removê-la')
        return
    }
    

})

    
    

    
