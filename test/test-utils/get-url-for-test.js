const getOptions = require('./cli');

/**
 * @description Function used for getting the url on which the test will run on,
 * which is dependent upon whether the test is running locally or on "prod"
 * @param {Array} processArgv
 * @returns {String}
 */
function getUrlForTest(processArgv) {
  const environment = getOptions(processArgv).environment;
  return environment === 'local' ? 'localhost:3000' : '';
}

module.exports = getUrlForTest;