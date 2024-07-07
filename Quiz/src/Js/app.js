const questions = [
    {
        question: "Qual é o nome completo do líder do BTS?",
        options: ["Kim Jongin", "Kim Namjoon", "Kim Taehyung", "Park Jimin"],
        answer: "Kim Namjoon"
    },
    {
        question: "Qual é o nome do primeiro álbum de estúdio do BTS?",
        options: ["Love Yourself: Tear", " Wings", "Dark & Wild", "The Most Beautiful Moment in Life: Young Forever"],
        answer: "Dark & Wild"
    },
    {
        question: "Em que ano o BTS debutou?",
        options: ["2012", "2013", "2014", "2015"],
        answer: "2013"
    },
    {
        question: "Qual é o fandom oficial do BTS?",
        options: ["Army", "Blink", "Exo-l"," Once"],
        answer: "Army"
    },
    {
        question: "Qual música do BTS alcançou o número 1 na parada Billboard Hot 100 pela primeira vez?",
        options: ["DNA", "Boy With Luv", "Dynamite", "Blood Sweat & Tears"],
        answer: "Dynamite"
    },
    {
        question: "Qual foi o primeiro programa de variedades de TV sul-coreano no qual o BTS apareceu?",
        options: ["Running Man", "Weekly Ido", "Knowing Bros (Ask Us Anything)", "Infinite Challenge"],
        answer: "Weekly Ido"
    },
    {
        question: "Qual música do BTS foi lançada como um presente para os fãs em 2020 durante a pandemia de COVID-19?",
        options: ["Black Swan", "Life Goes On", "Spring Day", "Fire"],
        answer: "Life Goes On"
    }
];

let currentQuestion = 0;
let score = 0;

// Função para exibir a próxima pergunta
function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = "";

    questions[currentQuestion].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });
}

// Função para verificar a resposta do jogador
function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // Exibe a pontuação final
        const scoreContainer = document.getElementById("score-container");
        const finalScore = document.getElementById("final-score");
        finalScore.textContent = `Você fez ${score} pontos de um total de ${questions.length}.`;
        scoreContainer.style.display = "block";

        // Esconde o contêiner de perguntas e opções
        document.getElementById("question-container").style.display = "none";
        document.getElementById("next-btn").style.display = "none";
    }
}
function restarQuiz(){
    currentQuestion = 0;
    score = 0;
    showQuestion();
    document.getElementById("score-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("next-btn").style.display = "block";
}

// Iniciar o quiz quando a página carregar
document.addEventListener("DOMContentLoaded", function() {
    
    document.getElementById("restart-btn").addEventListener("click", restarQuiz);

    // Iniciar o quiz quando a página carregar
    showQuestion();
});
