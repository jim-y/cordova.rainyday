'use strict';

var React = require('react'),
  request = require('superagent'),
  injectTapEventPlugin = require('react-tap-event-plugin'),
  App = React.createFactory(require('./components/AppComponent.jsx')),
  config = require('../appConfig.json');

/**
 * For React Chrome addon
 */
window.React = React;

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
  React.render(
    App({
      config: config,
      data: resp.body
    }),
    document.getElementById('container'),
    onRenderError
  );
}

/**
 * Callback method for successful geoLocation call.
 * @param  {Object} position
 */
function onGeoLocationSuccess(position) {
  var url,
      lat,
      lon;

  if (position && position.coords.latitude && position.coords.longitude) {

    lat = 'lat=' + position.coords.latitude;
    lon = 'lon=' + position.coords.longitude;
    url = ['http://', config.openweathermap.baseUrl, lat, '&', lon,
      '&APPID=', config.openweathermap.key].join('');

    console.log(position);

    request.get(url, null, onSuccessWeatherCall);
  }
}

function onGeoLocationError(err) {
  if (err) {
    return alert(
      'code: '    + err.code    + '\n' +
      'message: ' + err.message + '\n'
    );
  }
}

/**
 * Initialize the application. Renders main react component into DOM.
 * Also pass config as variable for the top level component.
 */
function initialize(/* event */) {
  injectTapEventPlugin();
  navigator.geolocation.getCurrentPosition(
    onGeoLocationSuccess,
    onGeoLocationError
  );
}

/**
 * Adds main top level event. The entry point of the app
 */
document.addEventListener('deviceready', initialize, false);
