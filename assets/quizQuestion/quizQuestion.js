var numberTypeQuiz = localStorage.getItem('typeQuiz');
var nickname = localStorage.getItem('name')

var h2 = document.querySelector('span');
var textH2 = document.createTextNode(nickname);
h2.appendChild(textH2)  

if(numberTypeQuiz == 1){
    quizNumber1();
} else if(numberTypeQuiz == 2){
    quizNumber2();
} else if(numberTypeQuiz == 3){
    quizNumber3();
} else if(numberTypeQuiz == 4){
    quizNumber4();
}


function quizNumber1(){
    let dadoTitle = []
    let alternative1 = []
    let alternative2 = []
    let alternative3 = []
    let alternative4 = []
    
    
    for(let elemento of quiz1){
        dadoTitle.push(elemento.title);
        alternative1.push(elemento.alternative1)
        alternative2.push(elemento.alternative2)
        alternative3.push(elemento.alternative3)
        alternative4.push(elemento.alternative4)
    }
    
    var documentTitle = document.querySelector("h1[name='title']");
    var documenteAlternative1 = document.querySelector("li[name='alter1']")
    var documenteAlternative2 = document.querySelector("li[name='alter2']")
    var documenteAlternative3 = document.querySelector("li[name='alter3']")
    var documenteAlternative4 = document.querySelector("li[name='alter4']")
    
    
    var textTitle1 = document.createTextNode(dadoTitle[1]);
    var textAlternative1 = document.createTextNode(alternative1[1]);
    var textAlternative2 = document.createTextNode(alternative2[1]);
    var textAlternative3 = document.createTextNode(alternative3[1]);
    var textAlternative4 = document.createTextNode(alternative4[1]);
    
    documentTitle.appendChild(textTitle1)
    documenteAlternative1.appendChild(textAlternative1)
    documenteAlternative2.appendChild(textAlternative2)
    documenteAlternative3.appendChild(textAlternative3)
    documenteAlternative4.appendChild(textAlternative4)
}