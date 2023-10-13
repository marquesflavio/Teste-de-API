const listaDeApi = [
    'https://pokeapi.co/api/v2/pokemon/ditto', 
    'https://pokeapi.co/api/v2/pokemon/ditto', 
    'https://',
    'https://pokeapi.co/api/v2/pokemon/ditto', 
    'https://pokeapi.co/api/v2/pokemon/ditto', 
    'https://',
];

// Função para fazer uma solicitação Fetch e atualizar o elemento HTML correspondente
function fetchAndDisplayData(apiUrl, resElement) {
    fetch(apiUrl)
        .then(response => {
            const imgOK = document.createElement('img');
            imgOK.src = 'imagem/ok.png';
            resElement.appendChild(imgOK);
        })
        .catch(error => {
            const imgNOK = document.createElement('img');
            imgNOK.src = 'imagem/erro.png';
            resElement.appendChild(imgNOK);
        });
}

// Usando map para percorrer a lista de URLs e fazer solicitações Fetch
listaDeApi.map((url, index) => {
    const resElement = document.querySelector(`.resAPI${index + 1}`);
    fetchAndDisplayData(url, resElement);
});

