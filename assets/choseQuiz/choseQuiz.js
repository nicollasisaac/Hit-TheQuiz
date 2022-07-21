
var nickname = localStorage.getItem('name')
var h2 = document.getElementById('nickname');
var textH2 = document.createTextNode("Olá " + nickname + ", qual quiz deseja fazer? :)");
h2.appendChild(textH2)