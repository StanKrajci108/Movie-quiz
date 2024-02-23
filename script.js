const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

const questions = [
  {
    question: "Who directed the movie Inception?",
    answers: {
      a: "Steven Spielberg",
      b: "Quentin Tarantino",
      c: "Christopher Nolan",
      d: "Martin Scorsese",
    },
    correctAnswer: "c",
  },
  {
    question: "Who directed Pulp Fiction?",
    answers: {
      a: "Steven Spielberg",
      b: "Quentin Tarantino",
      c: "Christopher Nolan",
      d: "Martin Scorsese",
    },
    correctAnswer: "b",
  },
  {
    question:
      "In which movie does Tom Hanks portray a character stranded on a deserted island?",
    answers: {
      a: "Cast Away",
      b: "Saving private Ryan",
      c: "The Terminal",
      d: "The Green Mile",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which movie features Leonardo DiCaprio as a skilled thief who steal secrets?",
    answers: {
      a: "Inception",
      b: "The Departed",
      c: "The Wolf of Wall Street",
      d: "The Revenant",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which film follows the story of a young boy who befriends an alien stranded on Earth?",
    answers: {
      a: "Close Encounters of the Third Kind",
      b: "Signs",
      c: "E.T. the Extra-Terrestrial",
      d: "war of the worlds",
    },
    correctAnswer: "c",
  },
  {
    question: "Which movie features a character named Tyler Durden?",
    answers: {
      a: "The Game",
      b: "Fight Club",
      c: "Se7en",
      d: "The Social Network",
    },
    correctAnswer: "b",
  },
  {
    question:
      "Which film, directed by Quentin Tarantino, follows a group of criminals planning a jewelry heist?",
    answers: {
      a: "Jackie brown",
      b: "Kill Bill",
      c: "Ocean's Eleven",
      d: "Reservoir Dogs",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which movie stars Russell Crowe as a mathematician who develops schizophrenia?",
    answers: {
      a: "Gladitor",
      b: "The insider",
      c: "A Beautiful Mind",
      d: "Master and Commander",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which film is based on the true story of a man who gets wrongly convicted for the murder of his wife?",
    answers: {
      a: "The Shawshang Redemption",
      b: "Mystic River",
      c: "Gone Girl",
      d: "The Green Mile",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which movie follows the story of a boxer named Jake LaMotta, portrayed by Robert De Niro?",
    answers: {
      a: "Raging Bull",
      b: "Rocky",
      c: "Milion Dollar Baby",
      d: "The Fighter",
    },
    correctAnswer: "a",
  },
  {
    question:
      "Which film features a group of astronauts stranded on Mars after a storm forces their evacuation?",
    answers: {
      a: "Interstellar",
      b: "Gravity",
      c: "The Martian",
      d: "Apollo 13",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which movie tells the story of a young boy who finds himself in a fantasy world filled with strange creatures?",
    answers: {
      a: "Spirited Away",
      b: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
      c: "Pan's Labyrinth",
      d: "Coraline",
    },
    correctAnswer: "c",
  },
  {
    question:
      "Which film features a character named Jack Dawson who falls in love with a woman named Rose aboard the Titanic?",
    answers: {
      a: "The Great Gatsby",
      b: "Revolutionary Road",
      c: "The Titanic",
      d: "Titanic",
    },
    correctAnswer: "d",
  },
  {
    question:
      "Which Christopher Nolan film features a complex narrative structure involving characters named Leonard, Teddy, and Natalie?",
    answers: {
      a: "Insomnia",
      b: "Following",
      c: "The Prestige",
      d: "Memento",
    },
    correctAnswer: "d",
  },
];

let currentQuestion = 0;
let numCorrect = 0;

function showQuestion(question, quizContainer) {
  let output = [];
  let answers = [];

  for (letter in question.answers) {
    answers.push(
      "<label>" +
        '<input type="radio" name="question" value="' +
        letter +
        '">' +
        "<span>" +
        letter +
        ": " +
        question.answers[letter] +
        "</span>" +
        "</label>"
    );
  }

  output.push(
    '<div class="question">' +
      question.question +
      "</div>" +
      '<div class="options">' +
      answers.join("") +
      "</div>"
  );

  quizContainer.innerHTML = output.join("");
  quizContainer.appendChild(submitButton);
}

function showNextQuestion(questions, quizContainer, resultsContainer) {
  let answerContainer = quizContainer.querySelector(".options");
  let userAnswer = (
    answerContainer.querySelector("input[name=question]:checked") || {}
  ).value;

  if (userAnswer === questions[currentQuestion].correctAnswer) {
    numCorrect++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    let percentage = (numCorrect / questions.length) * 100;
    resultsContainer.innerHTML =
      "You were " + percentage.toFixed(0) + "%" + " right with your answers";
  } else {
    showQuestion(questions[currentQuestion], quizContainer);
  }
}

// show the first question right away
showQuestion(questions[currentQuestion], quizContainer);

// on submit, show next question
submitButton.addEventListener("click", function () {
  showNextQuestion(questions, quizContainer, resultsContainer);
});

let = resultElement = document.querySelector("#result");

resultElement.style.color = "#42479f";
resultElement.style.fontSize = "2rem";
resultElement.style.display = "block";
resultElement.style.textAlign = "center";
resultElement.style.marginTop = "300px";
