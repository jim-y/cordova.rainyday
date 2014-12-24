'use strict';

var AppDispatcher = require('../AppDispatcher'),
    AppConstants = require('../AppConstants'),
    Actions;

Actions = {
  initialize: function(location) {
    var datas = require('../../statics/paradigms.json');
    AppDispatcher.dispatch({
      type: AppConstants.ACTION_TYPES.INITIALIZE,
      payload: datas
    });
  }
};

module.exports = Actions;
