// Importing required modules
const axios = require('axios'); // HTTP client for making requests
const cheerio = require('cheerio'); // jQuery implementation for server-side scripting
const { HttpsProxyAgent } = require('https-proxy-agent'); // HTTPS proxy agent for Axios

// Instagram profile URL
const url = 'https://instagram.com/iismarconicivitavecchia/';

// Creating an HTTPS proxy agent for Axios
const proxyAgent = new HttpsProxyAgent('http://your-username:your-passowrd@gate.smartproxy.com:7000');
// Replace the placeholder proxy details with your actual proxy information

// Making a GET request using Axios
axios
  .get(url, { httpsAgent: proxyAgent }) // Making a GET request with the specified proxy agent
  .then((response) => {
    // Parsing HTML content using Cheerio
    const html = response.data;
    const $ = cheerio.load(html);

    // Extracting followers count from meta tags
    const followersString = $('meta[property="og:description"]').attr('content');
    const match = followersString.match(/(\d+) Followers/);
    const followersCount = match ? parseInt(match[1], 10) : null;

    // Logging the followers count
    console.log('Followers count:', followersCount);
  })
  .catch((error) => {
    // Handling errors during the request
    console.error('Error during the request:', error.message);

    // Checking if there is a response from the server
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }

    // Log the full error object for further investigation
    console.error('Full error:', error);
  });
