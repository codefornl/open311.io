/*!
 * jurisdiction model
 */
(function() {
  'use strict';
  module.exports = function(sequelize, DataTypes) {
    var jurisdiction = sequelize.define("jurisdiction", {
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      api_discovery: DataTypes.STRING,
      api_documentation: DataTypes.STRING,
      api_issue_tracker: DataTypes.STRING,
      api_key_request: DataTypes.STRING,
      jurisdiction_id: DataTypes.STRING,
      version: DataTypes.STRING,
      base_url: DataTypes.STRING,
      test_url: DataTypes.STRING,
      production_ready: DataTypes.BOOLEAN,
      gov_domain: DataTypes.BOOLEAN
    });
    return jurisdiction;
  };
}());
