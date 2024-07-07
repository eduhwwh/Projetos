function mostrarResposta() {
    document.getElementById('resposta').style.display = 'block';
    document.getElementById('resposta').innerHTML = 'Sim! Eu aceito, meu amor. ❤️';
}

function mudarPosicao() {
    const buttonNao = document.getElementById('nao');
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}