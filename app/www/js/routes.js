'use strict';

var React = require('react'),
  { Route, DefaultRoute } = require('react-router'),
  { AppComponent, Contact, Content } = require('./components/Screens'),
  baseUrl = require('../appConfig.json').app.baseUrl;

module.exports = (
  <Route name="home" path={baseUrl} handler={AppComponent}>
    <Route name="contact" path="contact" handler={Contact} />
    <DefaultRoute handler={Content} />
  </Route>
);
