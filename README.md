Verificar se um servidor está ativo e respondendo. 

O "ping" nesse contexto se refere a enviar uma solicitação de rede para o servidor e aguardar por uma resposta. 

Se o servidor estiver funcionando corretamente, ele responderá ao ping; caso contrário, ocorrerá um erro de timeout ou outro tipo de erro.

## Ex de código em Node.js:

const express = require('express');
const app = express();
const http = require('http');

app.get('/ping', (req, res) => {
    const serverToPing = 'http://endereco-do-seu-servidor.com';
    
    http.get(serverToPing, (response) => {
        if (response.statusCode === 200) {
            res.send('Ping bem-sucedido! O servidor está no ar.');
        } else {
            res.status(500).send('Erro ao pingar o servidor.');
        }
    }).on('error', (error) => {
        res.status(500).send('Erro ao pingar o servidor: ' + error.message);
    });
});

app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
});


