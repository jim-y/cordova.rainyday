'use strict';

var React = require('react'),
  EventEmitter = require('events').EventEmitter,
  AppDispatcher = require('../AppDispatcher'),
  AppConstants = require('../AppConstants'),
  CHANGE = AppConstants.CHANGE_EVENT,
  _dispatchToken,
  _navigationOpen = false;

class NavigationStore extends EventEmitter {
  constructor() {
    super();

    _dispatchToken = AppDispatcher.register((action) => {
      switch (action.type) {

        case AppConstants.NAVIGATION.OPEN:
          _navigationOpen = true;
          this.emit(CHANGE);
          break;

        case AppConstants.NAVIGATION.CLOSE:
          _navigationOpen = false;
          this.emit(CHANGE);
          break;

        default:
          console.error(new Error('noop'));
      }
    });
  }

  getState() {
    return _navigationOpen;
  }
}

module.exports = new NavigationStore();
