const Data = [
    {
        question: '8 X 7 = ?',
        a: '47',
        b: '56',
        c: '63',
        d: '49',
        correct_a: 'b',

    },
    {
        question: 'How many months are in 4 years ?',
        a: '46',
        b: '44',
        c: '48',
        d: '36',
        correct_a: 'c',

    },
    {
        question: 'How many hours are in 1 month ?',
        a: '654 Hours',
        b: '730 Hours',
        c: '812 Hours',
        d: 'none of the above',
        correct_a: 'b',

    },
    {
        question: 'how long is a tennis match ?',
        a: 'about 90 minutes',
        b: 'about 120 minutes',
        c: 'about 60 minutes',
        d: 'none of the above',
        correct_a: 'a',

    },
    {
        question: 'how long is the great pyramid ?',
        a: 'about 260 metres',
        b: 'about 280 metres',
        c: 'about 267 metres',
        d: 'about 230 metres',
        correct_a: 'd',

    },
];

const Question = document.getElementById("Question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const SubmitBtn = document.getElementById("submit");
const Quiz = document.getElementById("Quiz");
let currentQuizNum = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = Data[currentQuizNum];
    Question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answers = document.querySelectorAll(".answer");
    let ans = undefined;
    answers.forEach((answer) => {
        if (answer.checked) {
            ans = answer.id;
        }
    });
    return ans;
}

function deselect() {
    const answers = document.querySelectorAll(".answer");
    let ans = undefined;
    answers.forEach((answer) => {
        answer.checked = false;
    });

}

SubmitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === Data[currentQuizNum].correct_a) {
            score++;

        }
        currentQuizNum++;
        if (currentQuizNum < Data.length) {

            loadQuiz();
        }
        else if (score == Data.length) {

            Quiz.innerHTML = `<link rel="stylesheet" href="congrats.css" type="text/css"><h1>Congratulations ! <br> You answered all the questions correctly! <br> Score ${score} / ${Data.length}</h1> <button onClick="location.reload()"> Start Over ?</button>
            <audio id="audio1" >
            <source src="audio/rave.mp3" type="audio/mpeg">
            </audio>
            <audio id="audio2" >
            <source src="audio/rave_2.mp3" type="audio/mpeg">
            </audio>`;
            function playAudio() {
                var audio1 = document.getElementById('audio1');
                var audio2 = document.getElementById('audio2');
                setTimeout(audio2.play(), 5000);
            }
            playAudio();


        }
        else {
            Quiz.innerHTML = `<h1>Score ${score} / ${Data.length}</h1> <button onClick="location.reload()"> Try Again ?</button>`;
        }
    }
}
)
