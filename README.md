# express-datastore [![Build Status](https://travis-ci.org/david0673/express-datastore.svg?branch=master)](https://travis-ci.org/david0673/express-datastore)

> Get db connection in request


## Install

```
$ npm install --save express-datastore
```


## Usage

```js
const app = require('express')();

const expressDatastore = require('express-datastore');
app.use(expressDatastore());

app.get('/', function (req, res, next) {
	req.db // => Db object
});
```


## API

### expressDatastore([options])

#### options

All options from [Datastore](https://googleapis.dev/nodejs/datastore/4.1.3/Datastore.html) are accepted.

##### property

Type: `String`  
Default: `db`

Property on `request` object in which db connection will be stored.


## License

MIT © [David Heller](http://github.com/david0673)
