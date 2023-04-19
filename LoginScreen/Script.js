function validaFormLogin(){
    let nome = document.getElementById("Login").value;
    let senha = document.getElementById("Senha").value;
    let valido = true;
    if(nome){
        alert("Informe seu Login");
        console.log("Nenhum login foi informado");
        valido = false;
    }
    if(!senha){
        alert("Informe sua Senha");
        console.log("Nenhuma senha foi informada");
        valido = false;
    }

    if(valido){
        console.log("Tudo OK!")
        window.location.href = "DadosAluno.html";
    } else {
        console.log("Deu ruim!")
    }
}

function validaFormCadastro(){
    let matricula = document.getElementById("Matricula").value;
    let nome = document.getElementById("Nome").value;
    let senha = document.getElementById("Senha").value;
    let senhaconfirmar = document.getElementById("SenhaConfirmar").value;
    let valido = true;
    if(!nome){
        alert("Informe seu Login");
        console.log("Nenhum login foi informado");
        valido = false;
    }
    if(!senha){
        alert("Informe sua Senha");
        console.log("Nenhuma senha foi informada");
        valido = false;
    }    
    if(!matricula){
        alert("Informe sua Matricula");
        console.log("Nenhuma matricula foi informado");
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