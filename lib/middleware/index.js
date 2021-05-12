const { Logger } = require("node-core-utils");
const logger = new Logger("Middleware");

function logRequest(req, res, next) {
  logger.info(`logRequest: ${req.method} ${req.protocol}://${req.get('host')}/${req.originalUrl}`);
  console.log(`${req.method} ${req.protocol}://${req.get('host')}/${req.originalUrl}`)
  //console.log(req);

  next();
}

module.exports = { logRequest };
