//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.


function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo !== '') {
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = nomeAmigo;
        listaAmigos.appendChild(li);
        inputAmigo.value = '';
    }
}


function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    const numAmigos = listaAmigos.length;

    if (numAmigos > 1) {
        const amigos = Array.from(listaAmigos).map(li => li.textContent);
        const amigosEmbaralhados = shuffleArray(amigos.slice()); 

        const resultado = document.getElementById('resultado');
        resultado.textContent = ''; 

        amigos.forEach((amigo, index) => {
            const sorteado = amigosEmbaralhados[index];
            const resultadoItem = document.createElement('li');
            resultadoItem.textContent = `${amigo} tirou ${sorteado}`;
            resultado.appendChild(resultadoItem);
        });
    } else {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
