const executeCommand = require('./executeCommand');
const commands = [
  {
    platform: '*',
    environment: '*',
    command: 'eslint . --ext .js',
  },
];

executeCommand(commands);
