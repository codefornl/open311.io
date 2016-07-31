(function () {
  'use strict';
  var models = require('../models');
  var express = require('express');
  var router = express.Router();

  var getDiscovery = function(req, res) {
    var format = req.params.format || 'json';
    res.json({});
  };
  router.route('/jurisdiction.:format').get(getDiscovery);
  module.exports = router;
}());
