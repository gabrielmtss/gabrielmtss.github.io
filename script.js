let botao = document.querySelector("#btn-evoluir"); 
const textoForma = document.querySelector("#forma"); 
const textoDesc = document.querySelector("#desc");
const imagem = document.querySelector("#imagem");

botao.addEventListener("click", function () { 
    if (botao.value == "forma01") {
        textoForma.innerText = "Charmilion";
        textoDesc.innerText = "Dragãozinho de fogo";
        imagem.src = "evo02_charmilion.jpg";
        botao.value = "forma02";
    } else if (botao.value == "forma02") {
        textoForma.innerText = "Charizard";
        textoDesc.innerText = "Dragãozão de fogo";
        imagem.src = "evo03_charizard.jpg";
        botao.value = "forma03";
    } else if (botao.value == "forma03") {
        textoForma.innerText = "Charmander";
        textoDesc.innerText = "Pequeno dragãozinho de fogo";
        imagem.src = "evo01_charmander.jpg";
        botao.value = "forma01";
    }
});