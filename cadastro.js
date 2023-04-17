/*
    Esse monte de funções fazendo a mesma coisa pra páginas similares me deixa agoniado, 
    mas tô sem ideias de como melhorar, então vai ficar assim por enquanto.
*/ 

//Professor e aluno tem um form similar, talvez desse pra reaproveitar essa função pra os dois
function validaFormAluno(){
    let matricula = document.getElementById("matricula").value;
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let valido = true;

    if(matricula.length != 11){
        alert("Chefia, a matricula deve conter 11 caracteres");
        console.log("Número de caracteres encontrados é invalido");
        valido = false;
    }
    if(!nome){
        alert("Pô meu nobre, tem que ter nome");
        console.log("Nenhum nome foi informado");
        valido = false;
    }
    if(!endereco){
        alert("Precisamos saber onde tu mora, pae");
        console.log("Nenhum endereço foi informado");
        valido = false;
    }

    valido = validaSenha();

    if(valido){
        console.log("Tudo OK!")
        alert("Aluno cadastrado com sucesso!\nClique em \"Mostrar alunos\" pra ver os alunos cadastrados ou siga adicionando.")
        habilitaVisualizacao();
    } else {
        console.log("Deu ruim!")
    }
}

function validaFormProfessor(){
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;
    let endereco = document.getElementById("endereco").value;
    let valido = true;

    if(cpf.length != 11){
        alert("Chefia, o cpf deve conter 11 caracteres");
        console.log("Número de caracteres encontrados é invalido");
        valido = false;
    }
    if(!nome){
        alert("Pô meu nobre, tem que ter nome");
        console.log("Nenhum nome foi informado");
        valido = false;
    }
    if(!endereco){
        alert("Precisamos saber onde tu mora, pae");
        console.log("Nenhum endereço foi informado");
        valido = false;
    }

    valido = validaSenha();

    if(valido){
        console.log("Tudo OK!")
        alert("Professor cadastrado com sucesso!\nClique em \"Mostrar professores\" pra ver os professores cadastrados ou siga adicionando.")
        habilitaVisualizacao();
    } else {
        console.log("Deu ruim!")
    }

}

function validaFormDisciplina(){
    let disciplina = document.getElementById("disciplina").value;
    let codigo = document.getElementById("codigo").value;
    let valido = true;

    if(!disciplina){
        alert("Pô meu nobre, cadê o nome da disciplina?");
        console.log("Nenhum nome de disciplina foi informado");
        valido = false;
    }
    if(codigo.length != 7){
        alert("Chefia, o código deve conter 7 caracteres");
        console.log("Número de caracteres encontrados é invalido pra regra de negócios.");
        valido = false;
    }

    if(valido){
        console.log("Tudo OK!")
        alert("Disciplina cadastrada com sucesso!\nClique em \"Mostrar disciplinas\" pra ver as disciplinas cadastradas ou siga adicionando.")
        habilitaVisualizacao();
    } else {
        console.log("Deu ruim!")
    }
}

function validaFormTurma(){
    let local = document.getElementById("local").value;
    let horario = document.getElementById("horario").value;
    let valido = true;
    
    /*
        Como o único caso que não haveria nenhuma opção selecionada seria se não houvesse professores cadastrados,
        creio que verificar se algo foi selecionado é irrelevante, uma vez que dá pra barrar isso antes de entrar
        na página.

        let disciplina = document.getElementById("disciplinas");
        let selecionadoD = disciplina.options[disciplina.selectedIndex].value; 
        let professores = document.getElementById("professores");
        let selecionadoP = professores.options[professores.selectedIndex].value; 
    */
   

    if(horario.length < 5){
        alert("Ei seu buxa, horario das aulas tem que ter pelo menos 5 horarios");
        //Dá pra usar outro tipo de input pra esse campo e isso pode ser mudado
        console.log("Pelo padrão usado, horario deve conter pelo menos 5 caracteres");
        valido = false;
    }
    if(!local){
        alert("Ei paezão, tem que informar o local");
        console.log("Nenhum local foi informado");
        valido = false;
    }
    valido = validaSenha();

    if(valido){
        console.log("Tudo OK!")
        alert("Turma cadastrada com sucesso!\nRedirecionando pra o cadastro de alunos na turma.")
    } else {
        console.log("Deu ruim!")
    }
}


function validaSelecaoAlunos(){
    let selecao = document.querySelector('input[name=aluno]:checked')?.value;
    let valido = true;
    
    if(!selecao){
        //Futuramente, talvez coloquemos um mínimo de alunos pra fechar a turma
        alert("Coé menó, tem que selecionar algum aluno");
        console.log("Nenhum aluno foi selecionado");
        valido = false;
    }

    if(valido){
        console.log("Tudo OK!")
        alert("Alunos cadastrados com sucesso!\nClique em \"Mostrar turmas\" pra ver alunos adicionados.")
        habilitaVisualizacao();
    } else {
        console.log("Deu ruim!")
    }
}

function validaSenha(){
    let senha = document.getElementById("senhausuario").value;
    let confirmasenha = document.getElementById("confirmasenhausuario").value;

    if(senha.length < 8 || confirmasenha.length < 8){
        alert("Seguinte parceiro, senha de no minimo 8 caracteres")
        console.log("Senha inválida pra regra de negócio.")
        return false;
    } else if(senha != confirmasenha){
        alert("As senhas não batem, patrão")
        console.log("Senhas não coincidem.")
        return false;
    }

    return true;
}

function habilitaVisualizacao(){
    document.getElementById("visualizacaobtn").disabled = false;
}

/*  A ideia é que haja uma função deixando o botão de envio desativado até que todos os dados estejam
*   devidamente preenchidos. Por enquanto isso é só um esboço de uma possivel futura implementação.
function bloqueiaEnvio(valido){
    if(valido){
        document.getElementById("botao").disabled = false;
    } else {
        document.getElementById("botao").disabled = true;
    }
}
*/