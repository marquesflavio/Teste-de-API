const resAPI1 = document.querySelector(".resAPI1")
const resAPI2 = document.querySelector(".resAPI2")
const resAPI3 = document.querySelector(".resAPI3")
const resAPI4 = document.querySelector(".resAPI4")
const resAPI5 = document.querySelector(".resAPI5")
const resAPI6 = document.querySelector(".resAPI6")

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        //resAPI1.innerHTML = "Está funcionando!";
        const imgOK = document.createElement('img')
        imgOK.src = 'imagem/check-img.jpg'
        resAPI1.appendChild(imgOK)
    })
    .catch(error => {
        //resAPI1.innerHTML = "Não está funcionando!";
        const imgNOK = document.createElement('img')
        imgNOK.src = 'imagem/erro-img.png'
        resAPI1.appendChild(imgNOK)
    })

fetch('https:')
    .then(response => {
        //resAPI2.innerHTML = "Está funcionando!";
        const imgOK = document.createElement('img')
        imgOK.src = 'imagem/check-img.jpg'
        resAPI2.appendChild(imgOK)
    })
    .catch(error => {
        //resAPI2.innerHTML = "Não está funcionando!";
        const imgNOK = document.createElement('img')
        imgNOK.src = 'imagem/erro-img.png'
        resAPI2.appendChild(imgNOK)
    })


    // const resAPI1 = document.querySelector(".resAPI1");
    // const resAPI2 = document.querySelector(".resAPI2");
    // const resAPI3 = document.querySelector(".resAPI3");
    // const resAPI4 = document.querySelector(".resAPI4");
    // const resAPI5 = document.querySelector(".resAPI5");
    // const resAPI6 = document.querySelector(".resAPI6");

    // async function fetchData() {
    //     try {
    //         const response = await fetch('https:');  
    //         //resAPI1.innerHTML = "Está funcionando!";
            
    //         const imgOK = document.createElement('img');
    //         imgOK.src = 'imagem/check-img.jpg';
    //         resAPI1.appendChild(imgOK);
    //     } catch (error) {
    //         //resAPI1.innerHTML = "Não está funcionando!";
            
    //         const imgNOK = document.createElement('img');
    //         imgNOK.src = 'imagem/erro-img.png';
    //         resAPI1.appendChild(imgNOK);
    //     }
    // }
    
    // fetchData();
    

