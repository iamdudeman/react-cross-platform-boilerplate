const executeCommand = require('./executeCommand');

const commands = [
  {
    platform: 'web',
    environment: 'prod',
    command: 'webpack --mode production',
  },
];

executeCommand(commands);



// const platform = process.argv[2];
// const environment = process.argv[3];

// const command = commands.find(command => command.platform === platform && command.environment === environment);

// if (command) {
//   const { exec } = require('child_process');

//   exec(command.command, (err, stdout, stderr) => {
//     if (err) {
//       return;
//     }

//     console.log(`stdout: ${stdout}`); // eslint-disable-line no-console
//     console.log(`stderr: ${stderr}`); // eslint-disable-line no-console
//   });
// } else {
//   throw Error(`Command for platform and environment [${platform} ${environment}] not found`);
// }
