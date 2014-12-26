'use strict';

var React = require('react'),
  Icon = require('material-ui').Icon,
  ActionCreators = require('../ActionCreators'),
  AppConstants = require('../AppConstants');

var Header = React.createClass({

  render: function() {
    return (
      <header>
        <div className="iconWrapper">
          <Icon
            id="menuIcon"
            icon="navigation-menu"
            onTouchTap={this._onNavIconClick}
          />
        </div>
        <div className="iconWrapper navIconWrapper">
          <Icon
            id="previousPage"
            icon="navigation-expand-less"
            onTouchTap={this._onPrevPageClick}
          />
        </div>
      </header>
    );
  },

  _onNavIconClick: function() {
    ActionCreators.fire(AppConstants.NAVIGATION.OPEN, {});
  },

  _onPrevPageClick: function() {
    window.alert('Previous Page');
  }

});

module.exports = Header;

