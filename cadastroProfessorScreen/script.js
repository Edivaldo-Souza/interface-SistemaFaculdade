function validaForm(){
    let cpf = document.getElementById("cpf_campo").value;
    let nome = document.getElementById("nome_campo").value;
    let endereco = document.getElementById("endereco_campo").value;
    let passou = true;
    
    if(cpf.length != 11){
        alert("CPF deve conter 11 caracteres.");
        console.log("CPF deve conter 11 caracteres.");
        passou = false;
    }
    if((!nome) || (!endereco)){
        alert("Existem campos vazios\nNome:" + nome + "\nEndereço:" + endereco);
        console.log("Existem campos vazios\nNome:" + nome + "\nEndereço:" + endereco);
        passou = false;
    }

    passou = validaSenha();

    if(passou){
        alert("Cadastro concluido.");
        window.location.href='../professorScreen/index.html';
    } else {
        console.log("Não foi possível concluir cadastro.");
    }
}
function validaSenha(){
    let senha = document.getElementById("senha_campo").value;
    let c_senha = document.getElementById("confirma_senha_campo").value;
    if(senha.length < 8){
        alert("Senha(" + senha.length + ") deve ter pelo menos 8 caracteres\n");
        return false;
    }
    if(!(senha == c_senha)){
        alert("Senhas não correspondem");    
        return false;
    }
    return true;
    
}