const NodeBlues = require('nodeblues');

const database = new NodeBlues.Database();
const router = new NodeBlues.Router();
const server = new NodeBlues.Server(router);

router.get('/', (requestData, respondWith) => {
    respondWith(200, 'test', 'text/plain');
});

server.start('localhost', '1337');
console.log('Running on localhost:1337');
