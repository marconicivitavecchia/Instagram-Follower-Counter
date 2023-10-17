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

const req = https.request(options, function(res) {
  let data = '';

  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    try {
      const jsonData = JSON.parse(data);
      if (jsonData.data.user) {
        const followerCount = jsonData.data.user.edge_followed_by.count;
        console.log("Numero di follower: " + followerCount);
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
