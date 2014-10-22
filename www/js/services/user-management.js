(function () {
  'use strict';

  angular
    .module('ccnetwork.services')
    .factory('UserManagement', UserManagement);

  UserManagement.$inject = ['angular-parse'];

  /* @ngInject */
  function UserManagement()
  {
    var service = {
      currentUser: currentUser
    };

    return service;

    ////////////////
    var _currentUser;

    function currentUser() {

      return Parse.User.current()
    }
  }
})();