let angular = require('angular');

MyAppController.$inject = ['MyAppService'];

function MyAppController(MyAppService) {
  let vm = this;

  vm.header = 'This is angular!';
  vm.myArray = MyAppService.getMyArray();
}

module.exports = MyAppController;
