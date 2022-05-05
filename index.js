import axios from 'axios';
import { load } from 'cheerio';
import fs from 'fs';
import https from 'https';

const scraper = async () => {
  const html = await axios.get(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const $ = await load(html.data);
  let data = [];
  $('div').each((i, elem) => {
    data.push($(elem).find('img').attr('src'));
  });
  const slicedData = data.slice(3, 13);
  for (let i = 0; i < slicedData.length; i++) {
    fs.mkdir('./memes', { recursive: true }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    let fileName = `memes/0${i + 1}.jpg`;
    let file = fs.createWriteStream(fileName);
    https.get(slicedData[i], function (response) {
      response.pipe(file);
    });
  }
};
scraper();
