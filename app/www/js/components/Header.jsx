'use strict';

var React = require('react'),
  { AppBar, IconButton } = require('material-ui'),
  ActionCreators = require('../ActionCreators'),
  AppConstants = require('../AppConstants'),
  Breadcrumb = require('./Breadcrumb.jsx'),
  Header;

Header = React.createClass({

  render: function() {
    return (
      <header>
          <AppBar className="toolbar" zDepth={0}>
            <Breadcrumb/>
            <IconButton
              className="toolbar-right"
              icon="navigation-more-vert"
              />
            <IconButton
              className="toolbar-right"
              icon="action-search"
              />
          </AppBar>
      </header>
    );
  },

  _onNavIconClick: function() {
    ActionCreators.fire(AppConstants.NAVIGATION.OPEN, {});
  },

  _onPrevPageClick: function() {
    this.refs.prevPageMsg.show();
  }

});

module.exports = Header;
