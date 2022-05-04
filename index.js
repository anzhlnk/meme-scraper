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
  console.log(slicedData);

  for (let i = 0; i < slicedData.length; i++) {
    let fileName = `memes/0${i + 1}.jpg`;
    console.log(fileName);
    let file = fs.createWriteStream(fileName);
    https.get(slicedData[i], function (response) {
      response.pipe(file);
    });
  }
};
scraper();
