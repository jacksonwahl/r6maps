'use strict';

var DEV_MODE = true;

String.prototype.removeBreakTags = function() {
  var target = this;

  return target.replace(new RegExp('<br/>', 'g'), ' ');
};
