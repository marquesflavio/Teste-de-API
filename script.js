const testButton = document.getElementById("testButton");
const responseContainer = document.getElementById("responseContainer");

testButton.addEventListener("click", async () => {
    const URLAPI = document.querySelector('.urlapi')
    const LinkApi = URLAPI.value

    try {
        const response = await fetch(LinkApi);
        const data = await response.json();

        // Limpa o container de resposta antes de exibir a nova resposta
        responseContainer.innerHTML = "";

        // Exibe a resposta da API no container
        responseContainer.innerHTML = "Está funcionando!";
        const imagemElement = document.createElement("img");
        imagemElement.src = "sucess.jpg";
        responseContainer.appendChild(imagemElement);
    } catch (error) {
        responseContainer.innerHTML = "Erro ao fazer a requisição.";
        const imagemElement = document.createElement("img");
        imagemElement.src = "fail.jpg";
        responseContainer.appendChild(imagemElement);
    }
});

