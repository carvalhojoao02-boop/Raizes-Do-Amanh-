/* ========================= */
/* MENSAGEM DE BOAS-VINDAS */
/* ========================= */
window.onload = function(){
    console.log("Raízes do Amanhã carregado com sucesso!");
};

/* ========================= */
/* BOTÃO PRINCIPAL */
/* ========================= */
function mostrarMensagem(){
    alert("Campo e cidade estão conectados por uma jornada de trabalho, inovação, tecnologia e sustentabilidade que transforma vidas todos os dias.");
}

/* ========================= */
/* CURIOSIDADES */
/* ========================= */
function mostrarCuriosidade(){
    const curiosidades = [
        "O Brasil está entre os maiores produtores agrícolas do mundo.",
        "Drones ajudam agricultores a monitorar plantações com mais precisão.",
        "Grande parte dos alimentos consumidos nas cidades vem diretamente do campo.",
        "A agricultura moderna utiliza GPS e sensores para aumentar a produtividade.",
        "A agricultura familiar é responsável por grande parte dos alimentos consumidos no país.",
        "Tecnologias sustentáveis ajudam a preservar recursos naturais para as próximas gerações.",
        "A conexão entre campo e cidade movimenta a economia e gera milhões de empregos."
    ];

    let sorteio = Math.floor(Math.random() * curiosidades.length);
    document.getElementById("textoCuriosidade").innerHTML = curiosidades[sorteio];
}

/* ========================= */
/* CONTADORES ANIMADOS */
/* ========================= */
let produtores = 0;
let familias = 0;
let projetos = 0;

const contador = setInterval(() => {
    if(produtores < 1200){ produtores += 10; }
    if(familias < 5000){ familias += 25; }
    if(projetos < 350){ projetos += 2; }

    const produtoresElemento = document.getElementById("produtores");
    const familiasElemento = document.getElementById("familias");
    const projetosElemento = document.getElementById("projetos");

    if(produtoresElemento){ produtoresElemento.innerHTML = produtores + "+"; }
    if(familiasElemento){ familiasElemento.innerHTML = familias + "+"; }
    if(projetosElemento){ projetosElemento.innerHTML = projetos + "+"; }

    if(produtores >= 1200 && familias >= 5000 && projetos >= 350){
        clearInterval(contador);
    }
}, 30);

/* ========================= */
/* VOLTAR AO TOPO */
/* ========================= */
function voltarTopo(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

/* ========================= */
/* QUIZ PROFISSIONAL */
/* ========================= */
const perguntas = [
    {
        pergunta: "Qual prática ajuda a preservar os recursos naturais?",
        opcoes: ["Uso consciente da água", "Desmatamento ilegal", "Desperdício de recursos"],
        correta: 0
    },
    {
        pergunta: "Qual tecnologia é utilizada para monitorar plantações?",
        opcoes: ["Máquina de escrever", "Drone", "Telefone fixo"],
        correta: 1
    },
    {
        pergunta: "O que significa sustentabilidade?",
        opcoes: ["Produzir sem pensar no futuro", "Equilibrar desenvolvimento e preservação", "Utilizar recursos sem limites"],
        correta: 1
    },
    {
        pergunta: "Quem produz grande parte dos alimentos consumidos no Brasil?",
        opcoes: ["Agricultura Familiar", "Indústria Automobilística", "Empresas de Tecnologia"],
        correta: 0
    },
    {
        pergunta: "Qual é um benefício da tecnologia no campo?",
        opcoes: ["Maior desperdício", "Redução da produtividade", "Maior eficiência na produção"],
        correta: 2
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

/* ========================= */
/* INICIAR QUIZ */
/* ========================= */
function iniciarQuiz(){
    perguntaAtual = 0;
    pontuacao = 0;
    document.getElementById("resultadoQuiz").innerHTML = "";
    document.getElementById("pontuacaoQuiz").innerHTML = "";
    carregarPergunta();
}

/* ========================= */
/* CARREGAR PERGUNTA */
/* ========================= */
function carregarPergunta(){
    const pergunta = perguntas[perguntaAtual];
    document.getElementById("perguntaQuiz").innerHTML = pergunta.pergunta;

    let html = "";
    pergunta.opcoes.forEach((opcao, indice) => {
        html += `<button onclick="responder(${indice})">${opcao}</button>`;
    });

    document.getElementById("opcoesQuiz").innerHTML = html;
}

/* ========================= */
/* RESPONDER */
/* ========================= */
function responder(indice){
    if(indice === perguntas[perguntaAtual].correta){
        pontuacao++;
    }

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){
        carregarPergunta();
    }else{
        finalizarQuiz();
    }
}

/* ========================= */
/* FINALIZAR QUIZ */
/* ========================= */
function finalizarQuiz(){
    document.getElementById("opcoesQuiz").innerHTML = "";
    document.getElementById("perguntaQuiz").innerHTML = "Quiz Finalizado!";
    document.getElementById("pontuacaoQuiz").innerHTML = `Pontuação: ${pontuacao} de ${perguntas.length}`;

    let mensagem = "";
    if(pontuacao === 5){
        mensagem = "🏆 Excelente! Você domina o tema sustentabilidade.";
    } else if(pontuacao >= 3){
        mensagem = "🌱 Muito bem! Você possui bons conhecimentos sobre o tema.";
    } else {
        mensagem = "📚 Continue estudando para aprender ainda mais sobre sustentabilidade.";
    }

    document.getElementById("resultadoQuiz").innerHTML = mensagem;
}