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
    } catch (error) {
        responseContainer.innerHTML = "Erro ao fazer a requisição.";
    }
});

