
let botaoAtivo = null;

function exibirImagem(opcao,botao) {

    let imagem = document.getElementById("imagem");
    let texto = document.getElementById("texto");


    if (opcao === 'sol') {
        imagem.src = "sol.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu o Sol! Uma estrela que ilumina o nosso dia.";
    } else if (opcao === 'lua') {
        imagem.src = "lua.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Lua! Ela brilha durante a noite.";
    } else if (opcao === 'estrela') {
        imagem.src = "estrela.png";
        imagem.style.display = "block";
        texto.innerText = "Você escolheu a Estrela! Um dos pontos nrilhantes no céu noturno.";
}  else if (opcao === 'eclipse') {
    imagem.src = "eclipse.png";
    imagem.style.display = "block";
    texto.innerText = "Você escolheu o Eclipse! Um fenômeno interessante entre a lua e o sol.";
} else if (opcao === 'Saturno') {
    imagem.src = "saturno.png";
    imagem.style.display = "block";
    texto.innerText = "Você escolheu o Saturno! Um planeta com anéis.";
}


if (botaoAtivo) {
    botaoAtivo.classList.add('active');
    botaoAtivo = botao;
}
}