'use strict';

var AppDispatcher = require('../AppDispatcher'),
    EventEmitter = require('events').EventEmitter,
    AppConstants = require('../AppConstants'),
    Immutable = require('immutable'),
    CHANGE_EVENT = 'change',
    _dispatchToken,
    _state;

class WeatherStore extends EventEmitter {

  constructor() {
    super();

    _dispatchToken = AppDispatcher.register((action) => {
      switch (action.type) {

        case AppConstants.INITIALIZE:
          this.initialize(action.payload);
          this.emit(CHANGE_EVENT);
          break;

        default:
          console.error(new Error('noop'));
      }
    });
  }

  initialize(payload) {
    _state = Immutable.Map(payload);
  }

  getState() {
    return _state;
  }

}

module.exports = new WeatherStore();
