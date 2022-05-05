import fs from 'node:fs';
import https from 'node:https';
import axios from 'axios';
import { load } from 'cheerio';

const scraper = async () => {
  const html = await axios.get(
    'https://memegen-link-examples-upleveled.netlify.app/',
  );
  const $ = await load(html.data);
  const data = [];
  $('img').each((i, elem) => {
    // data.push($(elem).find('img').attr('src')); old version, then slice would start from the 3rd index until the 13th
    data.push($(elem).attr('src'));
  });

  const slicedData = data.slice(0, 10);
  for (let i = 0; i < slicedData.length; i++) {
    fs.mkdir('./memes', { recursive: true }, function (err) {
      if (err) {
        console.log(err);
      }
    });
    const fileName = `memes/0${i + 1}.jpg`;
    const file = fs.createWriteStream(fileName);
    https.get(slicedData[i], function (response) {
      response.pipe(file);
    });
  }
};

await scraper();
