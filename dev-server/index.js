const NodeBlues = require('nodeblues');
const fs = require('fs');

const database = new NodeBlues.Database();
const router = new NodeBlues.Router();
const server = new NodeBlues.Server(router);

function serveFile(route, pathToFile, mimeType) {
  router.get(route, (requestData, respondWith) => {
    fs.readFile(pathToFile, 'utf8', (err, html) => {
      if (err) {
        console.log(err);
        respondWith(400, 'Something bad happened', 'text/plain');
      } else {
        respondWith(200, html, mimeType);
      }
    });
  });
}

serveFile('/', './web/index.html', 'text/html');
serveFile('/app.bundle.js', './build/web/app.bundle.js', 'application/javascript');
serveFile('/vendor.bundle.js', './build/web/vendor.bundle.js', 'application/javascript');

router.get('/:filename', (requestData, respondWith) => {
  let pathToFile = `./build/web/${requestData.path.filename}`;
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
