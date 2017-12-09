const NodeBlues = require('nodeblues');
const fs = require('fs');

const database = new NodeBlues.Database();
const router = new NodeBlues.Router();
const server = new NodeBlues.Server(router);

router.get('/:filename', (requestData, respondWith) => {
  let pathToFile = `./build/web/${requestData.pathParams.filename || 'index.html'}`;
  let mimeType = pathToFile.endsWith('.js') ? 'application/javascript' : 'text/html';

  fs.readFile(pathToFile, 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      respondWith(400, 'Something bad happened', 'text/plain');
    } else {
      respondWith(200, html, mimeType);
    }
  });
});

server.start('localhost', 1337);
console.log('Running on localhost:1337');
