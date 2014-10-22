/**
 * Created by adam on 10/14/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.dashboard')
    .controller('Dashboard', Dashboard);

  Dashboard.$inject = ['$scope'];

  function Dashboard($scope) {
    console.log(Parse);
    console.log(Parse.User.current());
  }
})();