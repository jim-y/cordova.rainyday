'use strict';

var React = require('react'),
  LeftNav = require('material-ui').LeftNav,
  menuItems = require('../assets/menuItems'),
  navigationStore = require('../stores/NavigationStore'),
  AppConstants = require('../AppConstants'),
  Navigation;

Navigation = React.createClass({

  componentDidMount: function() {
    navigationStore.on(AppConstants.CHANGE_EVENT, this._navigationStateChanged);
  },

  componentWillUnmount: function() {
    navigationStore.on(AppConstants.CHANGE_EVENT, this._navigationStateChanged);
  },

  render: function() {
    return (
      <nav>
        <LeftNav
          ref="leftNav"
          docked={false}
          isInitiallyOpen={false}
          menuItems={menuItems}
          onChange={this._onMenuItemClicked} />
      </nav>
    );
  },

  _navigationStateChanged: function() {
    if (navigationStore.getState()) {
      this.refs.leftNav.open();
    }
    else {
      this.refs.leftNav.close();
    }
  },

  _onMenuItemClicked: function(e, key, payload) {
    window.alert(event.type + '\n' + key + '\n' + payload);
  }

});

module.exports = Navigation;
