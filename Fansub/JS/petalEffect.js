document.addEventListener("DOMContentLoaded", function() {
    // Duração da animação das pétalas (ajuste conforme necessário)
    const animationDuration = 5000;

    // Mostra o conteúdo principal após a duração da animação
    setTimeout(() => {
        document.getElementById('petalContainer').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, animationDuration);
});