function myCall() { 
    console.log("interval timer...");
    $.getJSON("http://localhost:5500/getFollowerCount").done(myDone).fail(onFail);
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

fetch('http://localhost:5500/getFollowerCount')
        .then(response => {
            // Check if the response status is ok (HTTP status code 200-299)
            if (!response.ok) {
                // Handle non-ok responses
                if (response.status === 404) {
                    // Throw an error if the endpoint is not found
                    throw new Error('Endpoint not found');
                } else {
                    // Try to get the response body as text for further examination
                    return response.text();
                }
            }
            // If the response is ok, parse it as JSON
            return response.json();
})

$(document).init(myInit);

app.get('/getFollowerCount', (req, res) => {
    res.json({ followerCount: output || 'Loading...' });
});



