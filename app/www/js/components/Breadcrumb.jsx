'use strict';

var React = require('react'),
  { Link, Navigation, State } = require('react-router'),
  appConfig = require('../../appConfig.json'),
  Breadcrumb;

Breadcrumb = React.createClass({
  mixins: [State, Navigation],
  render: function() {

    console.info(this.getPathname());

    var _currentPath = this.getPathname(),
      _breadcrumb;

    if (_currentPath === appConfig.app.baseUrl) {
      _breadcrumb = <Link to="home">Home</Link>;
    }
    else {
      _breadcrumb = _currentPath
        .split('/')
        .map((fragment, index) =>
          <Link to={fragment} key={index}>
            {fragment.toUpperCase()}&nbsp;>&nbsp;
          </Link>
        );
    }

    return (
      <div className="mui-font-style-headline">
        {_breadcrumb}
      </div>
    );
  }
});

module.exports = Breadcrumb;
