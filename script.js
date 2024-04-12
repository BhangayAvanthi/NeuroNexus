// script.js
const quizData = [
    {
      question: 'What is the capital of India?',
      options: ['New Delhi', 'Mumbai', 'Delhi', 'Hyderabad'],
      answer: 'New Delhi'
    },
    {
      question: 'Who is Father of Python language?',
      options: ['peter', 'Henry', 'Guido van Rossum','None of the above'],
      answer: 'Guido van Rossum'
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      answer: 'Leonardo da Vinci'
    }
  ];
  
  const quizContainer = document.getElementById('question-container');
  const submitButton = document.getElementById('submit-btn');
  const resultContainer = document.getElementById('result-container');
  
  function buildQuiz() {
    quizData.forEach((questionObj, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `
        <p>${index + 1}. ${questionObj.question}</p>
        <ul>
          ${questionObj.options.map(option => `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`).join('')}
        </ul>
      `;
      quizContainer.appendChild(questionElement);
    });
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('input[type="radio"]:checked');
    let score = 0;
  
    answerContainers.forEach((answerContainer, index) => {
      const userAnswer = answerContainer.value;
      if (userAnswer === quizData[index].answer) {
        score++;
      }
    });
  
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
  }
  
  submitButton.addEventListener('click', showResults);
  
  buildQuiz();
  