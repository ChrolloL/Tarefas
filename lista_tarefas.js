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
  
    //percorrer a lista de elementos h5 inseridos na página
    for (let i = 0; i < tarefas.length; i++) {
        tarefas[i].className = 'tarefa-selecionada'
    }
})