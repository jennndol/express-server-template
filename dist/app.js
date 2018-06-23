'use strict';
// call the required libraries

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var app = (0, _express2.default)();
var Console = console;

app.use((0, _cors2.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));

app.listen(3000, function () {
	Console.log('The system is run on port 3000');
});