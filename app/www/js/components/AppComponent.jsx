'use strict';

var React = require('react'),
  Hammer = require('hammerjs'),
  RouteHandler = require('react-router').RouteHandler,
  AppCanvas = require('material-ui').AppCanvas,
  Header = require('./Header.jsx'),
  Navigation = require('./Navigation.jsx'),
  Footer = require('./Footer.jsx'),
  Content = require('./Content.jsx'),
  AppConstants = require('../AppConstants'),
  weatherStore = require('../stores/WeatherStore'),
  guestureMixin = require('./mixins/GuestureMixin'),
  mc = new Hammer(document.body);

var App = React.createClass({

  mixins: [guestureMixin],

  getInitialState: function() {
    return {
      showLoadingPage: true
    };
  },

  componentDidMount: function() {
    mc.on('swiperight', guestureMixin.swipeRight);
    mc.on('swipeleft', guestureMixin.swipeLeft);
    /* WeatherStore */
    weatherStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount: function() {
    mc.off('swiperight', guestureMixin.swipeRight);
    mc.off('swipeleft', guestureMixin.swipeLeft);
    /* WeatherStore */
    weatherStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange: function() {
    console.info('updating state in view');
  },

  render: function() {
    return (
      <AppCanvas predefinedLayout={1}>
        <Navigation/>
        <Header/>
        <main role="main" id="main">
          <RouteHandler/>
        </main>
        <Footer/>
      </AppCanvas>
    );
  }

});

module.exports = App;
