const form = document.getElementById('form-agenda')
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    const nome = document.getElementById('nome-contato')
    const numero = document.getElementById('numero-contato')

    linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += `</tr>`

    linhas += linha
    

    const construirAgenda = document.getElementById('corpo-tbody')
    construirAgenda.innerHTML = linhas
})