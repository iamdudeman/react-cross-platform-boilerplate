const NodeBlues = require('nodeblues');
const fs = require('fs');

const database = new NodeBlues.Database();
const router = new NodeBlues.Router();
const server = new NodeBlues.Server(router);


router.get('/', (requestData, respondWith) => {
  fs.readFile('./web/index.html', 'utf8', (err, html) => {
    if (err) {
      console.log(err);
      respondWith(400, 'Something bad happened', 'text/plain');
    } else {
      respondWith(200, html, 'text/html');
    }
  });
});

router.get('/bundle.js', (requestData, respondWith) => {
  fs.readFile('./build/web/bundle.js', 'utf8', (err, js) => {
    if (err) {
      console.log(err);
      respondWith(400, 'Something bad happened', 'text/plain');
    } else {
      respondWith(200, js, 'application/javascript');
    }
  });
});

server.start('localhost', 1337);
console.log('Running on localhost:1337');
