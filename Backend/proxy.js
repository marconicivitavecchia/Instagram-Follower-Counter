// Importing required modules
const axios = require('axios'); // HTTP client for making requests
const cheerio = require('cheerio'); // jQuery implementation for parsing HTML
const { HttpsProxyAgent } = require('https-proxy-agent'); // HTTP proxy agent

// Instagram profile URL to scrape
const url = 'https://instagram.com/iismarconicivitavecchia/';

// Creating an HTTPS proxy agent for Axios
const proxyAgent = new HttpsProxyAgent(''); // Replace with your own proxy details

// Function to fetch and log followers count
const fetchFollowersCount = () => {
  // Making a GET request using Axios
  axios
    .get(url, { httpsAgent: proxyAgent }) // Sending a GET request to the Instagram profile URL using Axios and the specified proxy agent
    .then((response) => {
      // Parsing HTML content using Cheerio
      const html = response.data; // Extracting the HTML content from the response
      const $ = cheerio.load(html); // Loading the HTML content into Cheerio for easy DOM manipulation

      // Extracting followers count from meta tags
      const followersString = $('meta[property="og:description"]').attr('content'); // Finding the meta tag containing followers count
      const match = followersString.match(/(\d+) Followers/); // Matching the followers count using a regular expression
      const followersCount = match ? parseInt(match[1], 10) : null; // Extracting and converting the followers count to an integer

      // Logging the followers count
      console.log('Followers count:', followersCount);

    })
    .catch((error) => {
      // Handling errors during the request

      // Log the specific error message
      console.error('Error during the request:', error.message);

      // Checking if there is a response from the server
      if (error.response) {
        // Log the HTTP response status and data
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      }

      // Log the full error object for further investigation
      console.error('Full error:', error);
    });
};

// Fetch followers count every second
setInterval(fetchFollowersCount, 1000);

