'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    if (this.length === 0) {
      return result;
    }

    if (this[0] !== null) {
      result += `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += `${separator}${this[i]}`;
      } else {
        result += `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
