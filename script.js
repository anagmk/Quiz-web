// Step 1: Store all questions in the 'questions' array
let questions = [
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "What is 3 + 5?",
    options: ["7", "8", "9", "10"],
    answer: "8"
  }
];

let currentQuestionIndex = 0;
let selectedAnswer;

// Step 2: Get all option buttons
let buttons = [
  document.getElementById('option-1'),
  document.getElementById('option-2'),
  document.getElementById('option-3'),
  document.getElementById('option-4'),
];
let question_no = 1;

// Step 3: Display question and options
function showQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").innerText = currentQuestion.question;
  document.getElementById("qstn_no").innerText = question_no;
  buttons.forEach((btn, index) => {
    btn.innerText = currentQuestion.options[index];
    btn.onclick = () => {
      selectedAnswer = currentQuestion.options[index];
      if (selectedAnswer === currentQuestion.answer) {
        document.getElementById('result').innerHTML = "Right answer";
      } else {
        document.getElementById('result').innerHTML = "Wrong answer";
      }
    };
  });

  document.getElementById('result').innerText = ""; // clear previous result
}

// Step 4: Add event for "Next" button
document.getElementById("next").onclick = () => {
  currentQuestionIndex++;
  question_no++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz completed!";
    buttons.forEach(btn => btn.style.display = "none");
    document.getElementById('next').style.display = "none";
    document.getElementById('result').innerText = "";
  }
};

// Start the quiz
showQuestion();
