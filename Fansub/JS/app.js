// Função para registrar o usuário (apenas um exemplo simples)
function registerUser() {
    const users = [
        {
            username: ' ',
            password: ' '
        }
    ];
    localStorage.setItem('users', JSON.stringify(users));
}

// Função para verificar o login
function checkLogin(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.username === username && user.password === password);
}

// Adiciona um evento de escuta ao formulário de login
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (checkLogin(username, password)) {
                localStorage.setItem('loggedIn', 'true');
                window.location.href = 'main.html';
            } else {
                document.getElementById('error-message').textContent = 'Username ou Password incorretos';
            }
        });
    }

    // Verifica se o usuário está logado
    if (window.location.pathname.includes('main.html') && localStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'index.html';
    }

    // Adiciona um evento de escuta ao botão de logout
    const logoutButton = document.getElementById('logout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            localStorage.removeItem('loggedIn');
            window.location.href = 'index.html';
        });
    }

    // Registra um usuário por padrão (para exemplo)
    if (!localStorage.getItem('users')) {
        registerUser();
    }
});
