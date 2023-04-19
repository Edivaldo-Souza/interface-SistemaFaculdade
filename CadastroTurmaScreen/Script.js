
function validaForm(){
    let disciplina = document.getElementById("disciplina_campo").value;
    let horario = document.getElementById("horario_campo").value;
    let professor = document.getElementById("professor_campo").value;
    let local = document.getElementById("local_campo").value
    let senha = document.getElementById("senha_campo").value
    let senhaconfirmar = document.getElementById("confirma_senha_campo").value;
    let valido = true;
    if(!horario){
        alert("Informe seu horario");
        console.log("Nenhum horario foi informado");
        valido = false;
    }  
    if(!local){
        alert("Informe um local");
        console.log("Nenhum local foi informado");
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