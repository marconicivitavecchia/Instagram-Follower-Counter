// Import required modules
const express = require('express');
const path = require('path');
const https = require('https');
const mqttClient = require('./mqtt');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS, images, etc.) from a public directory
app.use(express.static(path.join(__dirname, 'public')));

// Define the Instagram username to fetch follower count for
const username = "iismarconicivitavecchia";

// Define the request options
const options = {
  hostname: 'i.instagram.com',
  path: `/api/v1/users/web_profile_info/?username=${username}`,
  method: 'GET',
  headers: {
    'User-Agent': 'Instagram 76.0.0.15.395 Android (24/7.0; 640dpi; 1440x2560; samsung; SM-G930F; herolte; samsungexynos8890; en_US; 138226743)'
  }
};

// Initialize variables to store the follower count and the old follower count
let oldFollowerCount = 0;
let output;

// Function to fetch the follower count
function fetchFollowerCount() {
  const req = https.get(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      try {
        const jsonData = JSON.parse(data);
        if (jsonData.data.user) {
          // Extract the follower count from the JSON response
          const followerCount = jsonData.data.user.edge_followed_by.count;

          if (followerCount !== oldFollowerCount) {
            // Update the old follower count and store the new count as a string
            oldFollowerCount = followerCount;
            output = String(followerCount);

            // Publish the follower count via MQTT
            mqttClient.publishMessage(output);
          } else {
            console.log("Follower number hasn't changed");
          }
        } else {
          console.log("No user found.");
        }
      } catch (error) {
        console.error("JSON data parsing error: " + error);
      }
    });
  });

  req.on('error', (error) => {
    console.error(error);
  });

  req.end();
}

// Call fetchFollowerCount every 10 seconds
setInterval(fetchFollowerCount, 10000);

// Define a route to send the follower count to the front end
app.get('/getFollowerCount', (req, res) => {
  res.json({ followerCount: output || 'Loading...' });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
