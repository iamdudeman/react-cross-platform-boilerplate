const { Router, Server  } = require('nodeblues');
const fs = require('fs');

const router = new Router();
const server = new Server(router);

router.get('/:filename', (requestData, respondWith) => {
  let pathToFile = `./build/web/${requestData.pathParams.filename || 'index.html'}`;
  let mimeType = pathToFile.endsWith('.js') ? 'application/javascript' : 'text/html';

  fs.readFile(pathToFile, 'utf8', (err, html) => {
    if (err) {
      respondWith(400, `Something bad happened [${err}]`, 'text/plain');
    } else {
      respondWith(200, html, mimeType);
    }
  });
});

server.start('localhost', 1337);
console.log('Running on localhost:1337'); // eslint-disable-line no-console
