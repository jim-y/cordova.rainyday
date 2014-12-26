'use strict';

var AppDispatcher = require('./AppDispatcher');

module.exports = {
  fire: function(type, payload) {
    AppDispatcher.dispatch({
      type: type,
      payload: payload
    });
  }
};
