'use strict';

var React = require('react'),
  WeatherInfo = require('./WeatherInfo.jsx'),
  Content;

Content = React.createClass({
  render: function() {
    return (
      <main id="content" role="main">
        <div id="centered">
          <WeatherInfo />
        </div>
      </main>
    );
  }
});

module.exports = Content;
