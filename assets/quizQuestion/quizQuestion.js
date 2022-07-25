//Trazer NickName
var nickname = localStorage.getItem('name')
var h2 = document.querySelector('span');
var textH2 = document.createTextNode(nickname);
h2.appendChild(textH2)  


//adicionar variáveis sobre o quiz, e trazer o quiz escolhido
let numberQuizFun = 0
let questionsAsked = 0;
var numberTypeQuiz = localStorage.getItem('typeQuiz');

if(numberTypeQuiz == 1){
    numberQuizFun = 1
    quizNumber(numberQuizFun);
} else if(numberTypeQuiz == 2){
    numberQuizFun = 2
    quizNumber(numberQuizFun);
} else if(numberTypeQuiz == 3){
    numberQuizFun = 3
    quizNumber(numberQuizFun);
} else if(numberTypeQuiz == 4){
    numberQuizFun = 4
    quizNumber(numberQuizFun);
}

//Função que traz as infomações do quiz
function quizNumber(numberQuizFun){
    let dadoTitle = []
    let alternative1 = []
    let alternative2 = []
    let alternative3 = []
    let alternative4 = []

    if(numberQuizFun == 1){
        for(let elemento of quiz1){
            dadoTitle.push(elemento.title);
            alternative1.push(elemento.alternative1)
            alternative2.push(elemento.alternative2)
            alternative3.push(elemento.alternative3)
            alternative4.push(elemento.alternative4)
        }
    }else if( numberQuizFun == 2){
        for(let elemento of quiz2){
            dadoTitle.push(elemento.title);
            alternative1.push(elemento.alternative1)
            alternative2.push(elemento.alternative2)
            alternative3.push(elemento.alternative3)
            alternative4.push(elemento.alternative4)
        }
    } else if(numberQuizFun == 3){
        for(let elemento of quiz3){
            dadoTitle.push(elemento.title);
            alternative1.push(elemento.alternative1)
            alternative2.push(elemento.alternative2)
            alternative3.push(elemento.alternative3)
            alternative4.push(elemento.alternative4)
        }
    } else {
        for(let elemento of quiz4){
            dadoTitle.push(elemento.title);
            alternative1.push(elemento.alternative1)
            alternative2.push(elemento.alternative2)
            alternative3.push(elemento.alternative3)
            alternative4.push(elemento.alternative4)
        }
    }
    
    var documentTitle = document.querySelector("h1[name='title']");
    var documenteAlternative1 = document.querySelector("li[name='alter1']")
    var documenteAlternative2 = document.querySelector("li[name='alter2']")
    var documenteAlternative3 = document.querySelector("li[name='alter3']")
    var documenteAlternative4 = document.querySelector("li[name='alter4']")
    
    
    var textTitle1 = (dadoTitle[questionsAsked]);
    var textAlternative1 = (alternative1[questionsAsked]);
    var textAlternative2 = (alternative2[questionsAsked]);
    var textAlternative3 = (alternative3[questionsAsked]);
    var textAlternative4 = (alternative4[questionsAsked]);
    
    documentTitle.innerHTML = textTitle1
    documenteAlternative1.innerHTML = textAlternative1
    documenteAlternative2.innerHTML = textAlternative2
    documenteAlternative3.innerHTML = textAlternative3
    documenteAlternative4.innerHTML = textAlternative4
}

//delay para o bom funcionamento do código
function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

//Função que faz a correção
async function correctionTest(numberQuestionChecked){

    if(questionsAsked == 9){
        localStorage.setItem('correctCountNumber', countCorrect)
        window.location.replace("/assets/finalQuiz/finalQuiz.html");
    }
    var questionCorrect = [];

    if(numberQuizFun == 1){
        for(let elemento of quiz1){
            questionCorrect.push(elemento.correct)
        }
    }else if( numberQuizFun == 2){
        for(let elemento of quiz2){
            questionCorrect.push(elemento.correct)
        }
    }else if(numberQuizFun == 3){
        for(let elemento of quiz3){
            questionCorrect.push(elemento.correct)
        }
    } else {
        for(let elemento of quiz4){
            questionCorrect.push(elemento.correct)
        }
    }


    if(numberQuestionChecked == questionCorrect[questionsAsked]){
        var cor = "var(--color-green)"
        document.querySelector("li[name='alter"+ (questionCorrect[questionsAsked]) + "']").style.background = cor;
        countCorretQuestion();

        await delay(.4);
        var color = "var(--color-white-parse)"
        document.querySelector("li[name='alter"+ (questionCorrect[questionsAsked]) + "']").style.background = color;
    } else {
        var cor = "var(--color-green)"
        document.querySelector("li[name='alter"+ (questionCorrect[questionsAsked]) + "']").style.background = cor;
        
        var corRed = "var(--color-red)"
        document.querySelector("li[name='alter"+ numberQuestionChecked + "']").style.background = corRed;
        
        await delay(.4);
        var color = "var(--color-white-parse)"
        document.querySelector("li[name='alter"+ numberQuestionChecked + "']").style.background = color;
        document.querySelector("li[name='alter"+ (questionCorrect[questionsAsked]) + "']").style.background  = color;
    }
    
    questionsAsked +=1;
    var textQuestionAsked = "Perguntas:"+ questionsAsked+ "/10";
    document.querySelector("h2[name='askedQuestions']").innerHTML = textQuestionAsked
    quizNumber(numberQuizFun);
}

//Função que altera o contador de acertos
let countCorrect = 0

//Fazer contador de acertos, localStorage
localStorage.setItem('correctCountNumber', )

function countCorretQuestion(){
    countCorrect += 1;
    var greenDocument = document.querySelector("h2[name='countGreen']")
    var countText = (": "+ countCorrect+ " acertos")
    greenDocument.innerHTML = countText
}
