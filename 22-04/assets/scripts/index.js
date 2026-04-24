let currentQuestionIndex = 0;

const questions = document.querySelectorAll(".card-pergunta");
//console.log(questions)

function activateQuestion() {
  //acessa a pergunta atual dentro da lista (questions[currentQuestionIndex])
  //classList.add("active") adiciona classe active
  //essa classe faz a pergunta aparecer na tela via css
  questions[currentQuestionIndex].classList.add("active");
}

function answer(isCorrect) {
  if (isCorrect) {
    questions[currentQuestionIndex].classList.remove("active");

    currentQuestionIndex = currentQuestionIndex + 1;

    activateQuestion();
  } else {
    console.log("errou");
  }
}

const buttons = document.querySelectorAll(".quiz-option");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const isCorrect = buttons[i].classList.contains("correct");
    console.log(isCorrect);
    answer(isCorrect);
  });
}

let pontos = 0;

const pontuar = document.getElementById("pontuar");
function somarPontos() {
  pontos++;
  pontuar.textContent = `Pontos: ${pontos}`;
}
//esse foreach percorre o array de botoes
//o add event é pra coisar o click, ai quando clica puxa a função(‾◡◝)
buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    if (buttons.classList.contains("correct")) {
      somarPontos();
    }
  });
});
