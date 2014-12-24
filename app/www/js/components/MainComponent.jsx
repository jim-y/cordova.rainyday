'use strict';

var React = require('react'),
    AppConstants = require('../AppConstants'),
    WeatherStore = require('../stores/WeatherStore');

var App = React.createClass({

  getInitialState: function() {
    return {
      data: 'InitialState'
    };
  },

  componentDidMount: function() {
    WeatherStore.on(AppConstants.CHANGE_EVENT, this._onChange);
  },

  componentWillUnmount: function() {
    WeatherStore.removeListener(AppConstants.CHANGE_EVENT, this._onChange);
  },

  _onChange: function() {
    console.info('updating state in view');
  },

  render: function() {
    return (
      <div>
        <img src="img/weezle_fullmoon.png"/>
        Your current location is: {this.props.data.name}, {this.props.data.sys.country}
      </div>
    );
  }
});

module.exports = App;
