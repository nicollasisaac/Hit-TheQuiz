
let namePlayer = ""

function storeNick(){
    var newNamePlayer = document.querySelector("#namePlayer");
    namePlayer = newNamePlayer.value;
    localStorage.setItem('name', namePlayer)
    window.location.replace("/assets/choseQuiz/choseQuiz.html");
}




