'use strict';

var React = require('react'),
  LeftNav = require('material-ui').LeftNav,
  NavigationMixin = require('react-router').Navigation,
  navigationItems = require('../assets/navigationItems'),
  navigationStore = require('../stores/NavigationStore'),
  AppConstants = require('../AppConstants'),
  Navigation;

Navigation = React.createClass({

  mixins: [NavigationMixin],

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
          menuItems={navigationItems}
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

  _onMenuItemClicked: function(e, menuItemIndex, menuItemData) {
    var route = menuItemData.route;
    this.transitionTo(route);
  }

});

module.exports = Navigation;
