const questions=[
    {
        question: "Which is the largest animal in the world",
        answers:[
            { text:"Shark",correct: false},
            { text:"Bluewhale",correct: true},
            { text:"Elephant",correct: false},
            { text:"Giraffe",correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world",
        answers:[
            { text:"Australia",correct: true},
            { text:"Africa",correct: false},
            { text:"Asia",correct: false},
            { text:"Arctic",correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world",
        answers:[
            { text:"Kalahari",correct: false},
            { text:"Gobi",correct: false},
            { text:"Sahara",correct:false },
            { text:"Antarctica",correct: true},
        ]
    },
    {
        question: "Which is the smallest city in the world",
        answers:[
            { text:"Nepal City",correct: false},
            { text:"Vatican City",correct: true},
            { text:"Bhutan City",correct:false },
            { text:"Shri Lanka City",correct: false},
        ]
    },
    {
        question: "Which is the most populated  country in the world",
        answers:[
            { text:"Nigeria",correct: false},
            { text:"U.S.A",correct:false},
            { text:"Brazil",correct:false },
            { text:"China",correct: true},
        ]
    },
    {
        question: "Where do you go to when you need help in your code?",
        answers:[
            { text:"Github",correct: false},
            { text:"Stackoverflow",correct: true},
            { text:"Dribble",correct:false },
            { text:"Ruby",correct:false},
        ]
    },
    {
        question: "What app do UI/UX designers use?",
        answers:[
            { text:"Coreldraw",correct: false},
            { text:"Stackoverflow",correct: false},
            { text:"Adobe XD",correct:true },
            { text:"Pixellab",correct:false},
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
      showQuestions();
}

function showQuestions(){
    resetstate();
   let currentQuestion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

   currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer)
   });
}
function resetstate(){
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target
    const iscorrect  = selectBtn.dataset.correct === "true";
    if(iscorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
     if (button.dataset.correct === "true"){
        button.classList.add("correct");
     }
     button.disabled = true;
    });
   nextButton.style.display = "block";
}
 
 function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }

function    handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestions();
    }else{
        showScore();
    }
}


nextButton.addEventListener ("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();  
    }
});

startQuiz(); 

let audio = document.createElement('audio');
Audio.setAttribute('src', 'sound.mp3')
Audio.loop=true;
Audio.play();