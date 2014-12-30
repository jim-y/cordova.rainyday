'use strict';

var React = require('react'),
  Menu = require('material-ui').Menu,
  WeatherInfo,
  iconMenuItems = [
    { payload: '1', text: 'Live Answer', icon: 'communication_phone', number: '10' },
    { payload: '2', text: 'Voicemail', icon: 'communication_voicemail',  number: '5' },
    { payload: '3', text: 'Starred', icon: 'action_stars', number: '3' },
    { payload: '4', text: 'Shared', icon: 'action_thumb_up',  number: '12' }
  ];

WeatherInfo = React.createClass({
  render: function() {
    return (
      <div className="weatherInfo">
        <div className="pictureWrapper">
          <img src="img/cloudy19.svg"/>
        </div>
        <Menu autoWidth={false} menuItems={iconMenuItems} />
      </div>
    );
  }
});

module.exports = WeatherInfo;
