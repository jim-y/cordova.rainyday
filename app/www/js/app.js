'use strict';

var React = require('react'),
    App = React.createFactory(require('./components/MainComponent.jsx')),
    config = require('../appConfig.json'),
    request = require('superagent');

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
 * @param  {Object}
 */
function onSuccessWeatherCall(resp) {
  React.render(
    App({
      config: config,
      data: resp.body
    }),
    document.getElementById('content'),
    onRenderError
  );
}

/**
 * Callback method for successful geoLocation call.
 * @param  {Object}
 */
function onGeoLocationSuccess(position) {
  var url,
      lat,
      lon;

  if (position && position.coords.latitude && position.coords.longitude) {
    
    lat = 'lat=' + position.coords.latitude;
    lon = 'lon=' + position.coords.longitude;
    url = [
      'http://',
      config.openweathermap.baseUrl,
      lat,
      '&',
      lon,
      '&APPID=',
      config.openweathermap.key
    ].join('');

    console.log(position);
    console.log(
      'Latitude: '          + position.coords.latitude          + '\n' +
      'Longitude: '         + position.coords.longitude         + '\n' +
      'Altitude: '          + position.coords.altitude          + '\n' +
      'Accuracy: '          + position.coords.accuracy          + '\n' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
      'Heading: '           + position.coords.heading           + '\n' +
      'Speed: '             + position.coords.speed             + '\n' +
      'Timestamp: '         + position.timestamp                + '\n'
    );

    request
     .get(url)
     .end(onSuccessWeatherCall);
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
 * @param  {Event}
 */
function initialize(event) {
  navigator.geolocation.getCurrentPosition(
    onGeoLocationSuccess,
    onGeoLocationError
  );
}

/**
 * Adds main top level event. The entry point of the app
 */
document.addEventListener('deviceready', initialize, false);
