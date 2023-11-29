document.getElementById("id02").addEventListener("click", interruptor);
var lampada = true;

function interruptor() {
    var lampImage = document.getElementById("id03");
    var buttonText = document.getElementById("id02");

    if (lampada == true) {
        lampImage.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
        buttonText.textContent = "Apagar";
        document.body.style.backgroundColor = "white"; 
        console.log("change off")
        lampada = false;
    } else {
        lampImage.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
        buttonText.textContent = "Acender";
        document.body.style.backgroundColor = "black";
        console.log("change on")
        lampada = true;
    }
}


