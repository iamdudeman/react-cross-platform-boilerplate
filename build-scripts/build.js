const executeCommand = require('./executeCommand');

const commands = [
  {
    platform: 'web',
    environment: 'prod',
    command: 'webpack --mode production',
  },
];

executeCommand(commands);
