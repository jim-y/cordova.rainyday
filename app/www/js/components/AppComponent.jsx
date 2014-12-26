'use strict';

var React = require('react'),
  Hammer = require('hammerjs'),
  AppConstants = require('../AppConstants'),
  ActionCreators = require('../ActionCreators'),
  Header = require('./Header.jsx'),
  Navigation = require('./Navigation.jsx'),
  Content = require('./Content.jsx'),
  Footer = require('./Footer.jsx'),
  weatherStore = require('../stores/WeatherStore'),
  swipeMixin = require('./mixins/SwipeMixin'),
  appGuestures = new Hammer(document.body);

var App = React.createClass({

  mixins: [swipeMixin],

  componentDidMount: function() {
    appGuestures.on('swiperight', swipeMixin.swipeRight);
    appGuestures.on('swipeleft', swipeMixin.swipeLeft);
    /* WeatherStore */
    weatherStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount: function() {
    appGuestures.off('swiperight', swipeMixin.swipeRight);
    appGuestures.off('swipeleft', swipeMixin.swipeLeft);
    /* WeatherStore */
    weatherStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange: function() {
    console.info('updating state in view');
  },

  render: function() {
    return (
      <div>
        <Navigation />
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }

});

module.exports = App;
