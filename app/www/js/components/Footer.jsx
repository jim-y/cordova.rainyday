'use strict';

var React = require('react'),
  Icon = require('material-ui').Icon,
  IconButton = require('material-ui').IconButton,
  Footer;

Footer = React.createClass({

  render: function() {
    return (
      <footer>
        <div className="iconWrapper">
          <Icon
            className="fakeIcon"
            icon="action-help"
            />
        </div>
        <div className="iconWrapper navIconWrapper">
          <Icon
            id="nextPage"
            className="navIcon"
            icon="navigation-expand-more"
            onTouchTap={this._onNextPageClick}
            />
        </div>
      </footer>
    );
  },

  _onNextPageClick: function() {
    window.setTimeout(function() {
      window.alert('Next Page');
    }, 1500);
  }

});

module.exports = Footer;
