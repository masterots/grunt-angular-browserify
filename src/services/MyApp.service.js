let angular = require('angular');

module.exports = function() {
  let myArray = ['cat', 'dog', 'bird'];

  function getMyArray() {
    return myArray;
  }

  return {
    getMyArray: getMyArray
  };
};
