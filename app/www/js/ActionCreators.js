'use strict';

var AppDispatcher = require('./AppDispatcher'),
  request = require('superagent');

/**
 * Handle react rendering errors
 * @param  {Error} err
 */
function onRenderError(err) {
  if (err) {
    return console.error(err);
  }
}

/**
 * Success callback for weather api call. On succes we render the app to the DOM
 * @param  {Object} resp
 */
function onSuccessWeatherCall(resp) {

}

module.exports = {

  /**
   * Fires an action
   * @param {String} type
   * @param {Object} payload
   */
  fire: function(type, payload) {
    AppDispatcher.dispatch({
      type: type,
      payload: payload
    });
  },

  /**
   * Fires the INITIALIZE action. Also bootstraps the application by firing
   * a request for the initial weather datas.
   * @param payload
   */
  initialize: function(payload) {
    //request.get(url, null, onSuccessWeatherCall);
  }

};
