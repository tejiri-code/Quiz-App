document.addEventListener('DOMContentLoaded', () => {
    const quizQuestions = [
        {
            question: 'Commonly used data types DO NOT include:',
            options: [
                { text: 'Strings', isCorrect: false },
                { text: 'Booleans', isCorrect: false },
                { text: 'Alerts', isCorrect: true },
                { text: 'Numbers', isCorrect: false }
            ]
        },
        {
            question: 'The condition in an if/else statement is enclosed within ______.',
            options: [
                { text: 'Quotes', isCorrect: false },
                { text: 'Curly brackets', isCorrect: false },
                { text: 'Parentheses', isCorrect: true },
                { text: 'Square brackets', isCorrect: false }
            ]
        },
        {
            question: 'Arrays in JavaScript can be used to store ______.',
            options: [
                { text: 'Numbers and Strings', isCorrect: false },
                { text: 'Booleans', isCorrect: false },
                { text: 'Other Arrays', isCorrect: true },
                { text: 'All of the above', isCorrect: false }
            ]
        },
        {
            question: 'Which HTML tag is used to define an unordered list?',
            options: [
                { text: '<ul>', isCorrect: true },
                { text: '<ol>', isCorrect: false },
                { text: '<li>', isCorrect: false },
                { text: '<div>', isCorrect: false }
            ]
        },
        {
            question: 'Which CSS property is used to change the text color of an element?',
            options: [
                { text: 'background-color', isCorrect: false },
                { text: 'font-weight', isCorrect: false },
                { text: 'color', isCorrect: true },
                { text: 'padding', isCorrect: false }
            ]
        },
        {
            question: 'What does CSS stand for?',
            options: [
                { text: 'Creative Style Sheets', isCorrect: false },
                { text: 'Cascading Style Sheets', isCorrect: true },
                { text: 'Computer Style Sheets', isCorrect: false },
                { text: 'Colorful Style Sheets', isCorrect: false }
            ]
        }
    ];

    let currentQuestionIndex = 0;

    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const optionsContainer = document.querySelector('.options');
    const quizCompletedContainer = document.getElementById('quiz-completed-container');
    const resultElement = document.getElementById('result');

    function showQuestion(questionIndex) {
        const currentQuestion = quizQuestions[questionIndex];

        questionElement.textContent = currentQuestion.question;

        optionsContainer.innerHTML = '';

        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('button');
            optionElement.classList.add('quiz-option');
            optionElement.dataset.value = index;
            optionElement.textContent = option.text;
            optionsContainer.appendChild(optionElement);
        });
    }

    function showQuizCompleted() {
        questionContainer.style.display = 'none';
        quizCompletedContainer.style.display = 'block';
    }

    function checkAnswer(isCorrectAnswer) {
        if (isCorrectAnswer) {
            resultElement.textContent = 'Correct!';
        } else {
            resultElement.textContent = 'Incorrect!';
        }

        setTimeout(() => {
            currentQuestionIndex++;

            if (currentQuestionIndex < quizQuestions.length) {
                showQuestion(currentQuestionIndex);
                resultElement.textContent = '';
            } else {
                showQuizCompleted();
                resultElement.textContent = '';
            }
        }, 1000);
    }

    optionsContainer.addEventListener('click', (event) => {
        const selectedOption = event.target;
        const selectedOptionIndex = selectedOption.dataset.value;
        const currentQuestion = quizQuestions[currentQuestionIndex];
        const isCorrectAnswer = currentQuestion.options[selectedOptionIndex].isCorrect;
        checkAnswer(isCorrectAnswer);
    });

    document.getElementById('restart-quiz').addEventListener('click', () => {
        currentQuestionIndex = 0;
        showQuestion(currentQuestionIndex);
        quizCompletedContainer.style.display = 'none';
        questionContainer.style.display = 'block';
    });

    showQuestion(currentQuestionIndex);
});
