
let namePlayer = ""

function storeNick(){
    var newNamePlayer = document.querySelector("#namePlayer");
    var name = newNamePlayer.value;
    namePlayer = name;
    alert("Seja bem vindo " + namePlayer + "!")
}
console.log(namePlayer)



