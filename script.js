const startButton = document.getElementById('start-btn');
const quizElement = document.getElementById ('quiz');
const questionElement = document.getElementById ('question');
const answerButtonsElement = document.getElementById ('answer-buttons');
const nextButton = document.getElementById('next-btn');
const questionsAsked = [];


let shuffleQuestions;
let currentQuestion;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
});
// let timer;

function startGame () {
    // console.log('Started')
    startButton.classList.add('hide');
    // counterRender();
    // timer = setInterval(counterRender, 1000);
    shuffleQuestions = questions.sort(() => Math.random());
    // shuffleQuestions = (Math.floor(Math.random()*questions.length))
    // while (questionsAsked.includes(questions))
    // {
    //     shuffleQuestions = questions.sort(() => Math.random());
    // };
    // questionsAsked.push(questions)

    currentQuestion = 0;
    quizElement.classList.remove('hide');
    nextQuestion();


}

function nextQuestion() {
    resetState()
    showQuestion(shuffleQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}


function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffleQuestions.length > currentQuestion +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    // nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}



const questions = [
    {
        question: 'What is the end tag for <div>?',
        answers: [
            { text: '</div>', correct: true },
            { text: '<DIV>', correct: false},
            { text: '/div>', correct: false},
            { text: 'div', correct: false},
        ]
    },
    {
        question: 'How to attach an picture?',
        answers: [
            { text: '<link>', correct: false },
            { text: '<script>', correct: false},
            { text: '<img>', correct: true},
            { text: '<button>', correct: false},
        ]
    },
    {
        question: 'How many objects can be in an array?',
        answers: [
            { text: '5', correct: false },
            { text: '10', correct: false},
            { text: '4', correct: false},
            { text: 'All of the above', correct: true},
        ]
    },
    {
        question: 'Finding and fixing problems in code is?',
        answers: [
            { text: 'automating', correct: false },
            { text: 'programming', correct: false},
            { text: 'coding', correct: false},
            { text: 'debugging', correct: true},
        ]
    },
    {
        question: 'By default arrays start at an index of?',
        answers: [
            { text: '-1', correct: false },
            { text: '1', correct: false},
            { text: '0', correct: true},
            { text: '5', correct: false},
        ]
    },
]