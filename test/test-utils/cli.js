const yargs = require('yargs');

function getOptions(args) {
  return yargs
    .options({
      environment: {
        alias: 'e',
        choices: ['local', 'prod'],
        describe: 'String used to tell test what environment to run tests on',
        type: 'string'
      }
    })
    .parse(args);
}

module.exports = getOptions;