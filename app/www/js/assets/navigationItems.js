'use strict';

var MenuItem = require('material-ui').MenuItem;

module.exports = [
  {
    icon: 'action-home',
    route: 'home',
    text: 'Home'
  },
  {
    icon: 'action-description',
    route: 'description',
    text: 'Description'
  },
  {
    icon: 'communication-contacts',
    route: 'contact',
    text: 'Contact'
  },
  {
    type: MenuItem.Types.SUBHEADER,
    text: 'Resources'
  },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://github.com/jim-y/cordova.rainyday',
    text: 'GitHub'
  }
];
