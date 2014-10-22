/**
 * Created by adam on 10/15/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.pages')
    .controller('Welcome', Welcome);

  Welcome.$inject = ['$ionicSideMenuDelegate'];

  function Welcome($ionicSideMenuDelegate) {
    var vm = this;

    vm.title = 'WELCOME';
    //$ionicSideMenuDelegate.showSideMenu(false);

    //vm.main.hideSideMenuButton = true;
  }
})();