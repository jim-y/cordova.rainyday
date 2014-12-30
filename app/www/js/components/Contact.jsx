'use strict';

var React = require('react'),
  Navigation = require('react-router').Navigation,
  Centered = require('./Centered.jsx'),
  { Paper, RaisedButton } = require('material-ui'),
  Contact;

Contact = React.createClass({

  mixins: [Navigation],

  render: function() {
    return (
      <Centered>
        <Paper zDepth={1}>
          Some text here.
          <RaisedButton
            label="Back to home"
            primary={true}
            onTouchTap={this._backToHomeBtnClick}/>
        </Paper>
      </Centered>
    );
  },

  _backToHomeBtnClick: function() {
    this.transitionTo('home');
  }

});

module.exports = Contact;
