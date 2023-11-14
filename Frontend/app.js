function myCall() { 
    console.log("interval timer...");
    $.getJSON("./data.json").done(myDone).fail(onFail);
}

function myDone(dataJson) {
    console.log(dataJson.follower);  //chiamiamo follower all'interno del file data.json, quindi stamperà 100 
}

function onFail(e){
    console.log(e);       //nel caso di errore, verrà stampato 
}   

function myInit() {
    console.log("OK!");
    setInterval(myCall, 1000);  //chiama la funzione myCall ogni 1000ms
}

function loadJSON() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Estrai il valore della variabile "follower"
            const followerValue = data.follower;

            // Ottieni l'elemento HTML in cui desideri stampare il valore
            const followerContent = document.getElementById('follower-content');

            // Assegna il valore della variabile "follower" all'elemento HTML
            followerContent.textContent = followerValue;
        })
        .catch(error => {
            console.error('Errore nel caricamento del file JSON:', error);
        });
}

// Carica il JSON inizialmente
loadJSON();

$(document).init(myInit);

window.addEventListener("scroll", function() {
    var footer = document.getElementById("footer");
    var distanceFromTop = footer.getBoundingClientRect().top;

    if (distanceFromTop <= window.innerHeight) {
        footer.style.opacity = 1;
    } else {
        footer.style.opacity = 0;
    }
});