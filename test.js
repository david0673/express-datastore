'use strict';

const test = require('tap').test;
const expressDatastore = require('./').expressDatastore;

test('middleware pass error on fail', function (t) {
	var middleware = expressDatastore();

	middleware({}, {}, function (err) {
		t.ok(err);

		middleware({}, {}, function (err) {
			t.ok(err);
			t.end();
		});
	});
});

test('middleware stores connection to mongodb', function (t) {
	var middleware = expressDatastore();
	var req = {};

	middleware(req, {}, function (err) {
		t.error(err);
		t.ok(req.db);
		req.db.close(true, t.end);
	});
});
