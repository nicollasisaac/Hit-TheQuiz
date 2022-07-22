// trazer dados como o nickname e número de acertos
function loadPagItems(){
    var nickname = localStorage.getItem('name')
    var numberCorrectQuestion = localStorage.getItem('correctCountNumber');

    function rightData (){
        var h2 = document.querySelector('h1[name="resumeFinalQuiz"]');
        
        if(numberCorrectQuestion > 7){
            var textH2 = 'Parabéns  <span style="color: rgb(255, 52, 52)";>'+ nickname +'</span>, você fez '+ numberCorrectQuestion+'  pontos, um verdadeiro proPlayer! 😜🤩 :)';
        } else if (numberCorrectQuestion > 5 && numberCorrectQuestion <= 7){
            var textH2 = '<span style="color: rgb(255, 52, 52)";>'+ nickname +'</span>, você foi bem, fez '+ numberCorrectQuestion+'  pontos, está na média! 😜 :)';
        }

        h2.innerHTML = (textH2)  
    }
    rightData()
}

loadPagItems()


