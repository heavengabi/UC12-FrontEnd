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
    console.log(isCorrect)
    answer(isCorrect);
  });
}
