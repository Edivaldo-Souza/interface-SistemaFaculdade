function validaForm(){
    
    let cod = document.getElementById("codigo_campo").value;
    let nome = document.getElementById("nome_campo").value;
    let passou = true;
    
    if((!nome) || (!cod)){
        alert("Existem campos vazios");
        console.log("Existem campos vazios");
        passou = false;
        if(cod.length != 6){
            alert("Código inválido, deve possuir 6 caracteres");
            console.log("Código inválido, deve possuir 6 caracteres");
            passou = false;
        }
    }
    
    passou = validaSenha();

    if(passou){
        alert("Cadastro concluido.");
        window.location.href='../disciplinaScreen/index.html';
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