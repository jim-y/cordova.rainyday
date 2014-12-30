'use strict';

var React = require('react'),
  Router = require('react-router'),
  injectTapEventPlugin = require('react-tap-event-plugin'),
  ActionCreators = require('./ActionCreators'),
  routes = require('./routes'),
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

    ActionCreators.initialize({
      url: url
    });
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

  Router.run(routes, function(Handler) {
    React.render(
      <Handler/>,
      document.body,
      onRenderError
    );
  });

  //navigator.geolocation.getCurrentPosition(
  //  onGeoLocationSuccess,
  //  onGeoLocationError
  //);
}

/**
 * Adds main top level event. The entry point of the app
 */
document.addEventListener('deviceready', initialize, false);
