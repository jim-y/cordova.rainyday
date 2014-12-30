'use strict';

var React = require('react'),
  { Icon, Dialog } = require('material-ui'),
  Footer;

Footer = React.createClass({

  render: function() {
    var dialogActions = [
      {
        text: 'CLOSE'
      }
    ];
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
        <Dialog
          ref="nextPageMsg"
          title="Next>"
          actions={dialogActions}>

          Next page should float in.

        </Dialog>
      </footer>
    );
  },

  _onNextPageClick: function() {
    this.refs.nextPageMsg.show();
  }

});

module.exports = Footer;
