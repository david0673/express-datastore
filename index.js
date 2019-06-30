'use strict';

var Datastore = require('@google-cloud/datastore').Datastore;

var datastore;

module.exports = function (options) {
	options = options || {};
	var property = options.property || 'db';
	delete options.property;

	if (!datastore) {
		datastore = new Datastore(options || {});
	}

	return function (req, res, next) {
		req[property] = datastore;
		next();
	};
};
