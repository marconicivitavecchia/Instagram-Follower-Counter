//Instagram API request setup
const https = require('https');

const username = "iismarconicivitavecchia";  // Username of the account to get the followers from

const options = {
  hostname: 'i.instagram.com',
  path: `/api/v1/users/web_profile_info/?username=${username}`,
  method: 'GET',
  headers: {
    'User-Agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)'
  }
};

//MQTT setup
const mqtt = require('mqtt')

const protocol = 'mqtt'
const host = 'broker.emqx.io'
const port = '1883'
const clientId = `mqtt_${Math.random().toString(16).slice(3)}`

const connectUrl = `${protocol}://${host}:${port}`

const client = mqtt.connect(connectUrl, {
  clientId,
  clean: true,
  connectTimeout: 4000,
  username: 'emqx',
  password: 'public',
  reconnectPeriod: 1000,
})


let oldFollowerCount = 0; // This variable is used to check if the follower count has increased/decreased
let output;

//MQTT Connection
const topic = 'IFC-Backend/1'

client.on('connect', () => {
  console.log('Connected')
  client.subscribe([topic], () => { // Subscribes to specified topic
    console.log(`Subscribed to topic '${topic}'`)
  })

})

function fetchFollowerCount() {
  let result = 0;
  let req = https.request(options, function (res) {
    let data = '';

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function () {
      try {
        let jsonData = JSON.parse(data);
        if (jsonData.data.user) {

          let followerCount = jsonData.data.user.edge_followed_by.count;

          if (followerCount != oldFollowerCount) {
            oldFollowerCount = followerCount;
            output = String(followerCount);

            console.log("publishing message..." + " [" + output + "]");
            client.publish(topic, output, { qos: 0, retain: false }, (error) => { // Sends message to the broker
              if (error) {
                console.error(error)
              }
            })
          }
          else {
            console.log("Follower number hasn't changed");
            result = "0";
          }
        }
        else {
          console.log("No user found.");
          result = "0";
        }
      }
      catch (error) {
        console.error("JSON data parsing error: " + error);
      }
    });
  });

  req.on('error', function (error) {
    console.error(error);
  });

  req.end();
  return result;
}

// This is heavily unoptimized
// for it to be sent, this variable has to be a string

client.on('message', (topic, payload) => {
  console.log('Received Message:', topic, payload.toString())
})


// Runs the function every 10 seconds
setInterval(fetchFollowerCount, 10000);