const axios = require('axios');
const cheerio = require('cheerio'); //required for funny parsing
const { HttpsProxyAgent } = require('https-proxy-agent');

const url = 'https://instagram.com/iismarconicivitavecchia/'; //destination address
const proxyAgent = new HttpsProxyAgent(
  'http://'); //proxy

axios
  .get(url, {
    httpsAgent: proxyAgent,
  })
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const followersString = $('meta[property="og:description"]').attr('content'); //gets <meta> element with "og:description" property
    const match = followersString.match(/(\d+) Followers/); //not sure what this does
    const followersCount = match ? parseInt(match[1], 10) : null; //this as well

    console.log(followersCount);
  })
  .catch((error) => {
    console.error('Errore durante la richiesta:', error);
  });
