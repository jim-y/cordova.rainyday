'use strict';

var ActionCreators = require('../../ActionCreators'),
  AppConstants = require('../../AppConstants');

/**
 * Horizontal swiping is not enabled due to compatibility reasons with
 * some browsers.
 * Read: http://hammerjs.github.io/tips/#try-to-avoid-vertical-pan/swipe
 * @type {{swipeRight: Function, swipeLeft: Function}}
 */
module.exports = {
  swipeRight: function() {
    ActionCreators.fire(AppConstants.NAVIGATION.OPEN, {});
  },
  swipeLeft: function() {
    ActionCreators.fire(AppConstants.NAVIGATION.CLOSE, {});
  }
};
