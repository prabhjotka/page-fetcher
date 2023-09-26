const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const localpath = args[1];
const fetcher = function(callback) {
  const request = require('request');
  request(`${url}`, (error, response, body) => {
    console.log('error:', error);

    callback(body);
  });
};

const example = function(body) {


  const content = `${body}`;



  fs.writeFile(`${localpath}`, content, err => {
    if (err) {
      console.error(err);
    }


  });
  console.log(`Downloaded and saved ${content.length} to ${localpath}`);

};
fetcher(example);