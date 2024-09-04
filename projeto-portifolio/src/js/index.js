//- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 
    //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //projeto que nao tem a classe ATIVO nao ira aparecer

    //Passo 2 - identificar o clique no botão
botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostraMaisProjetos();
    esconderBotao();

});
function esconderBotao() {
    //- Objetivo 2 - esconder o botão de mostrar mais 
    //Passo 1 - pegar o botão e esconder ele 
    botaoMostrarProjetos.classList.add("remover");
}

function mostraMaisProjetos() {
    //passo 3
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

