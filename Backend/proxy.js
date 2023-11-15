// Import required modules
const axios = require('axios');
const cheerio = require('cheerio');
const { HttpsProxyAgent } = require('https-proxy-agent');

// Target URL
const url = 'https://instagram.com/iismarconicivitavecchia/';

// Proxy configuration with correct credentials
const proxyCredentials = {
  username: 'your-username', // Replace with your proxy username
  password: 'your-password', // Replace with your proxy password
};

const proxyAgent = new HttpsProxyAgent({
  protocol: 'https:',
  host: 'gate.smartproxy.com',
  port: 10000,
  auth: `${proxyCredentials.username}:${proxyCredentials.password}`,
});

// Make an HTTP GET request to the target URL using Axios and the proxy agent
axios
  .get(url, {
    httpsAgent: proxyAgent,
  })
  .then((response) => {
    // Extract HTML content from the response
    const html = response.data;

    // Load HTML content into Cheerio for easier manipulation
    const $ = cheerio.load(html);

    // Extract the followers count from the meta tag in the HTML
    const followersString = $('meta[property="og:description"]').attr('content');
    
    // Use a regular expression to extract the numeric followers count
    const match = followersString.match(/(\d+) Followers/);
    const followersCount = match ? parseInt(match[1], 10) : null;

    // Log the followers count to the console
    console.log('Followers count:', followersCount);
  })
  .catch((error) => {
    // Log any errors that occur during the request
    console.error('Error during the request:', error);
  });
