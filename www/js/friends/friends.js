/**
 * Created by adam on 10/14/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.friends')
    .controller('Friends', Friends);

  Friends.$inject = ['FriendsService'];

  function Friends(FriendsService) {
    this.friends = FriendsService.all();
  }
})();