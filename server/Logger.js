var Logger = require('loglevel');

const C = require('./constants');

Logger.setLevel(C.logLevel);

Logger.stream = {
  write: function(message){
    Logger.info(message);
  }
};

Logger.debug(C);

module.exports = Logger;