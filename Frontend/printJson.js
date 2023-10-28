
// Funzione per caricare e visualizzare il valore della variabile "follower" dal file JSON
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

