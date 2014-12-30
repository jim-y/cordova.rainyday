'use strict';

var React = require('react'),
  Centered = require('./Centered.jsx'),
  WeatherInfo = require('./WeatherInfo.jsx'),
  Content;

Content = React.createClass({
  render: function() {
    return (
      <Centered>
        <WeatherInfo />
      </Centered>
    );
  }
});

module.exports = Content;
