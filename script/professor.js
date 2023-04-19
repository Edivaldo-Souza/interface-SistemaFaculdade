var dados = document.getElementsByClassName("dados")

function consultar(){
    dados[0].setAttribute("value","Mariah")
    dados[0].setAttribute("readonly",true)
    dados[1].setAttribute("value","154.542.053-22")
    dados[1].setAttribute("readonly",true)
    dados[2].setAttribute("value","Rua")
    dados[2].setAttribute("readonly",true)
}

function editar(){
    dados[0].setAttribute("value","Mariah")
    dados[1].setAttribute("value","154.542.053-22")
    dados[2].setAttribute("value","Rua")
}

function novoProfessor(){
    dados[0].setAttribute("value","")
    dados[1].setAttribute("value","")
    dados[2].setAttribute("value","")
}

function salvar(){
    if(dados[0].getAttribute("value") == undefined || dados[0].getAttribute("value") == " "){
        alert("Nome não pode estar vazio")
    }
    if(dados[1].getAttribute("value") == undefined || dados[1].getAttribute("value") == " "){
        alert("CPF não pode estar vazio")
    }
    if(dados[2].getAttribute("value") == undefined || dados[2].getAttribute("value") == " "){
        alert("Endereco não pode estar vazio")
    }
}
