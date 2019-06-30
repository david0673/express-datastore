const { Datastore } = require("@google-cloud/datastore");

let datastore;

module.exports = function(options) {
  options = options || {};
  const property = options.property || "db";
  delete options.property;

  if (!datastore) = new Datastore(options || {});

  return (req, res, next) => {
    req[property] = datastore;
    next();
  };
};
