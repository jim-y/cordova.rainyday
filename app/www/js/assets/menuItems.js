'use strict';

var MenuItem = require('material-ui').MenuItem;

module.exports = [
  {
    route: 'get-started',
    text: 'Get Started'
  },
  {
    route: 'css-framework',
    text: 'CSS Framework'
  },
  {
    route: 'components',
    text: 'Components'
  },
  {
    type: MenuItem.Types.SUBHEADER,
    text: 'Resources'
  },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://github.com/callemall/material-ui',
    text: 'GitHub'
  }
];
