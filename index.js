import axios from 'axios';
import { load } from 'cheerio';

//const https = require('https');
//const fs = require('fs');

const scraper = async () => {
  const html = await axios.get(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const $ = await load(html.data);
  let data = [];
  $('div').each((i, elem) => {
    data.push($(elem).find('img').attr('src'));
  });
  console.log(data);
  const slicedData = data.slice(3, 13);
  console.log(slicedData);
};

scraper();

// axios
//   .get('https://memegen-link-examples-upleveled.netlify.app/')
//   .then((response) => {
//     const $ = cheerio.load(response.data);
//     $('.').each((index, element) => {
//       console.log(index + ':' + element);
//     });
//   });

// })
// .catch((error) => {
//   console.log(error);
// });

// async function getHTML(url) {
//   const { data } = await axios.get(url);
//   return cheerio.load(data);
// }

// const $ = await getHTML('https://memegen-link-examples-upleveled.netlify.app/');
