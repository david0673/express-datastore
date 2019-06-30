var Datastore = require("@google-cloud/datastore").Datastore;

let datastore;

module.exports = function(options) {
  options = options || {};
  const property = options.property || "db";
  delete options.property;

  if (!datastore) = new Datastore(options || {});

  return function(req, res, next) {
    req[property] = datastore;
    next();
  };
};
