'use strict';

var React = require('react'),
  Centered;

Centered = React.createClass({
  render: function() {
    return (
      <div className="content">
        <div className="centered">
          <section>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
});

module.exports = Centered;
