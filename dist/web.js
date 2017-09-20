'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var app = (0, _express2.default)();
  app.set('port', process.env.PORT || 5000);

  app.use(_express2.default.static(__dirname + '/../public'));

  // views is directory for all template files
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'ejs');

  app.get('/', function (request, response) {
    response.render('pages/index');
  });

  app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
  });
};