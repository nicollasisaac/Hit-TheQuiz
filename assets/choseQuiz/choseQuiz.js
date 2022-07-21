
var nickname = localStorage.getItem('name')
var h2 = document.querySelector('span');
var textH2 = document.createTextNode(nickname);
h2.appendChild(textH2)

function quizOn(numberQuizChose){
    localStorage.setItem('typeQuiz', numberQuizChose)
    window.location.replace("/assets/quizQuestion/quizQuestion.html");
}