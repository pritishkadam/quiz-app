const quizData = [
    {
        question: "Q. Which is the largest planet in the solar system?",
        a1: "Earth",
        a2: "Pluto",
        a3: "Jupiter",
        a4: "Mars",
        rightAnswer: "a3",
    },
    {
        question: "Q. How many Olympic rings are there?",
        a1: "2",
        a2: "5",
        a3: "1",
        a4: "None of the above",
        rightAnswer: "a2",
    },
    {
        question: "Q. Which color is an emerald?",
        a1: "Green",
        a2: "Blue",
        a3: "Red",
        a4: "None of the above",
        rightAnswer: "a1",
    },
    {
        question: "Q. What do bees produce?",
        a1: "Sugar",
        a2: "Caviar",
        a3: "Milk",
        a4: "Honey",
        rightAnswer: "a4",
    },
    {
        question: "Q. Who wrote Romeo Juliet?",
        a1: "Robert De' Niro",
        a2: "Jack Jason",
        a3: "Paulo Coelho",
        a4: "None of the above",
        rightAnswer: "a4",
    }
];

const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const btn = document.getElementById('submit');
const container = document.getElementById('container');

let quizIndex = 0;
let score = 0;

const quizDataSize = quizData.length;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[quizIndex];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a1;
    b_text.innerText = currentQuizData.a2;
    c_text.innerText = currentQuizData.a3;
    d_text.innerText = currentQuizData.a4;
};

const getSelected = () => {
    const answers = document.querySelectorAll('.answer');
    let result = undefined;
    answers.forEach((answer)=> {
        if(answer.checked) {
            answer.checked = false;
            result = answer.id;
        }
    });
    return result;
};

btn.addEventListener('click', ()=>{
   const checked = getSelected();
   if(checked){
        if(checked === quizData[quizIndex].rightAnswer)
        {
            score++;
        }
        quizIndex++;
        if(quizIndex < quizDataSize) { 
            loadQuiz();
        } else {
            container.innerHTML = `<div>
                <h2 id="result">You scored ${score} out of ${quizDataSize} questions.</h2>
                <button onClick=location.reload() id="submit">Reload</button>
                </div>
                `
        }
   } 
});

