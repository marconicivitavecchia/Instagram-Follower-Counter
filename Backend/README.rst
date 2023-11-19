Questo codice utilizza un'API di Instagram per acquisire il numero di follower di un utente specifico, quindi invia i dati a un broker MQTT che li trasmette a un chip ESP-32.

è necessario importare i moduli con i seguenti comandi:

 const express = require('express');
 const path = require('path');
 const https = require('https');
 const mqttClient = require('./mqtt');

per poi creare un express application usando const app = express();
 per poi mandarlo a una directory publica con questa funzione : app.use(express.static(path.join(__dirname, 'public')));
Dobbiamo dare un'identità al nostro follower counter , si chiamerà "iismarconicivitavecchia" , 
per assegnargli un nome usiamo questa funzione : const username = "iismarconicivitavecchia";

Dopo dobbiamo definire una richiesta ad instagram che ci restituirà il numero dei followers.
 let oldFollowerCount = 0;
 let output;
Questi comandi li usiamo per settare il numerodei followers a 0.
 if (followerCount !== oldFollowerCount) {
 oldFollowerCount = followerCount;
 output = String(followerCount);
 }
Questo comando servre per aggiornare il followerCount così che dopo la richiesta possa salvare il numero.
Per poi publicare il counter via MQTT e dichiarare tutti gli errori che possono sopraggiungere.
 setInterval(fetchFollowerCount, 10000);
questo comando ci fa aggiornare il counter ogni 10 secondi così da darci aggiornamenti quasi in tempo reale.
 app.get('/getFollowerCount', (req, res) => {
   res.json({ followerCount: output || 'Loading...' });
 });
Ecco il comando per mandare in tempo reale il counter al team Frontend

In breve questo codice fa:

Importazione dei moduli: Vengono importati i moduli necessari, tra cui Express per la gestione del server web,
il modulo path per la gestione dei percorsi, https per effettuare richieste HTTPS e mqtt per la pubblicazione dei messaggi MQTT.

Configurazione dell'app Express: Viene creato un'applicazione Express e configurato un middleware per servire file statici dalla directory 'public'.

Configurazione delle opzioni di richiesta: Vengono definite le opzioni per la richiesta HTTPS a Instagram, includendo il nome utente.

Inizializzazione delle variabili: Vengono inizializzate le variabili per memorizzare il conteggio dei follower e il vecchio conteggio.

Funzione per ottenere il conteggio dei follower: Viene definita una funzione che effettua una richiesta HTTPS a Instagram per ottenere il conteggio dei follower.
 La risposta JSON viene analizzata, e se il conteggio è cambiato rispetto al vecchio valore, viene pubblicato tramite MQTT.

Intervallo di richiesta dei follower: La funzione per ottenere il conteggio dei follower viene chiamata ogni 10 secondi.

Route per ottenere il conteggio dei follower: Viene definita una route che restituisce il conteggio dei follower al frontend.

Avvio del server: Il server Express viene avviato sulla porta specificata.
