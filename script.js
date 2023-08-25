const testButton = document.getElementById("testButton");
const responseContainer = document.getElementById("responseContainer");
//const URLAPI = 

testButton.addEventListener("click", async () => {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const data = await response.json();

        // Limpa o container de resposta antes de exibir a nova resposta
        responseContainer.innerHTML = "";

        // Exibe a resposta da API no container
        responseContainer.innerHTML = "Está funcionando!";
    } catch (error) {
        responseContainer.innerHTML = "Erro ao fazer a requisição.";
    }
});

