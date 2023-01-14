function Question(text, choices, answer) {
    this.answer = answer;
    this.choices = choices;
    this.text = text;
  }
  
  Question.prototype.isCorrectAnswer = function (choice) {
    return this.answer === choice;
  }
  
  // create questions here
  var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("JavaScript is used for?", ["FrontEnd", "BackEnd", "None", "Both"], "Both")
  ];

  // Function Performed 
  // Play the Quiz
  // Initialize the score to zero
  // starting point is q1 => index 0
  // load all the questions in the quiz
  
  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
  }
  
  Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
  }
  Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
  }
  
  Quiz.prototype.checkOptionAnswer = function (answer) {
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.questionIndex++;
  }
  
  function handleOptionButton(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function () {
      // check the answer
      quiz.checkOptionAnswer(choice);
      // load the next question
      loadQuestions();
    }

  }function loadQuestions() {
    if (quiz.isEnded()) {
      // Display the results
      showscores();
    } else {
      // Display the questions
      var element = document.getElementById("question");
      element.innerHTML = quiz.getQuestionByIndex().text;
  
      //Display the Options for the questions
      var choices = quiz.getQuestionByIndex().choices;
      for (let i = 0; i < choices.length; i++) {
        var elem = document.getElementById("choice" + i);
        elem.innerHTML = choices[i];
        handleOptionButton("btn" + i, choices[i]);
  
      }
  
      // call the showProgress function
      showProgress();
    }
  }
  
  //Show how many question completed and how many left
  function showProgress(){
    var elm = document.getElementById("progress");
    elm.innerHTML = "Question " + (quiz.questionIndex+1) + " of " + quiz.questions.length;
  }
  function showscores(){
    var quizDoneHTML = "<h1>Result<h1>";
    quizDoneHTML += "<h2 id='score'> Your scores: " + quiz.score + ". Your percentage is::"+ (quiz.score/questions.length*100) +"% </h2>";
    var se = document.getElementById("quiz");
    se.innerHTML = quizDoneHTML;
  }
  
  //Create the quiz questions
  var quiz = new Quiz(questions);
  
  //Display the Quiz questions
  loadQuestions();
  