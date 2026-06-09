```javascript
/* ========================= */
/* BOTÃO PRINCIPAL */
/* ========================= */

function mostrarMensagem(){

    alert(
        "Campo e cidade estão conectados por uma jornada de trabalho, inovação, tecnologia e sustentabilidade que transforma vidas todos os dias."
    );

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

    let sorteio =
        Math.floor(Math.random() * curiosidades.length);

    document.getElementById(
        "textoCuriosidade"
    ).innerHTML = curiosidades[sorteio];

}

/* ========================= */
/* CONTADORES ANIMADOS */
/* ========================= */

let produtores = 0;
let familias = 0;
let projetos = 0;

const contador = setInterval(() => {

    if(produtores < 1200){

        produtores += 10;

    }

    if(familias < 5000){

        familias += 25;

    }

    if(projetos < 350){

        projetos += 2;

    }

    const produtoresElemento =
        document.getElementById("produtores");

    const familiasElemento =
        document.getElementById("familias");

    const projetosElemento =
        document.getElementById("projetos");

    if(produtoresElemento){

        produtoresElemento.innerHTML =
            produtores + "+";

    }

    if(familiasElemento){

        familiasElemento.innerHTML =
            familias + "+";

    }

    if(projetosElemento){

        projetosElemento.innerHTML =
            projetos + "+";

    }

    if(
        produtores >= 1200 &&
        familias >= 5000 &&
        projetos >= 350
    ){

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
/* MENSAGEM DE BOAS-VINDAS */
/* ========================= */

window.onload = function(){

    console.log(
        "Raízes do Amanhã carregado com sucesso!"
    );

};
```