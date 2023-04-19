
function validaForm(){
    let CPF = document.getElementById("CPF_campo").value;
    let nome = document.getElementById("nome_campo").value;
    let endereco = document.getElementById("endereco_campo").value;
    let senha = document.getElementById("senha_campo").value
    let senhaconfirmar = document.getElementById("confirma_senha_campo").value;
    let valido = true;
    if(!nome){
        alert("Informe seu nome");
        console.log("Nenhum nome foi informado");
        valido = false;
    }
    if(!endereco){
        alert("Informe seu endereço");
        console.log("Nenhum endereço foi informado");
        valido = false;
    }    
    if(!CPF){
        alert("Informe seu CPF");
        console.log("Nenhuma matricula foi informado");
        valido = false;
    }
    if(!senha){
        alert("Informe sua Senha");
        console.log("Nenhuma senha foi informada");
        valido = false;
    }
    if(!senhaconfirmar){
        alert("Confirme sua Senha");
        console.log("Nenhuma senha de confirmação foi informada");
        valido = false;
    }

    if(!(senhaconfirmar == senha)) {
        alert("Senhas não conferem");
        console.log("Senhas não são iguais");
        valido = false;
    }
    if(valido){
        console.log("Tudo OK!")
        window.location.href = "DadosAluno.html";
    } else {
        console.log("Deu ruim!")
    }
}