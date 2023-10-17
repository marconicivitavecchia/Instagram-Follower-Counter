const https = require('https');

const username = "iismarconicivitavecchia";  // Inserisci qui l'username dalla quale si vuole estrapolare il numero di follower.

const options = {
  hostname: 'i.instagram.com',
  path: `/api/v1/users/web_profile_info/?username=${username}`,
  method: 'GET',
  headers: {
    'User-Agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)'
  }
};

let oldFollowerCount = 0;

function fetchFollowerCount() {
  let req = https.request(options, function(res) {
    let data = '';
  
    res.on('data', function(chunk) {
      data += chunk;
    });
    
    res.on('end', function() {
      try {
        let jsonData = JSON.parse(data);
        if (jsonData.data.user) {
          let followerCount = jsonData.data.user.edge_followed_by.count;
          if (followerCount != oldFollowerCount) {
            console.log("Numero di follower: " + followerCount);
            oldFollowerCount = followerCount;
          } else {
            console.log("Stesso numero di followers");
          }
        } else {
          console.log("Nessun utente trovato.");
        }
      } catch (error) {
        console.error("Errore nel parsing dei dati JSON: " + error);
      }
    });
  });

  req.on('error', function(error) {
    console.error(error);
  });

  req.end();
}

// Esegui la funzione ogni dieci secondi
setInterval(fetchFollowerCount, 10000);

// Esegui la funzione una volta all'avvio del programma
fetchFollowerCount();
