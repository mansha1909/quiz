const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Tool Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript framework?",
    options: ["Python Script", "React", "Angular", "Vue"],
    answer: "Python Script"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "**"],
    answer: "//"
  },
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Object Management", "Digital Ordinance Model", "Desktop Oriented Mode"],
    answer: "Document Object Model"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('nextBtn');

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(option, q.answer);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(selected, correct) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "#c8e6c9"; // green for correct
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "#ffcdd2"; // red for wrong
    }
  });

  if (selected === correct) score++;

  scoreEl.textContent = `Score: ${score}/${questions.length}`;
  nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Complete!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

window.onload = showQuestion;
