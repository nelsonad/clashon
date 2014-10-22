/**
 * Created by adam on 10/14/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.friends')
    .controller('FriendDetail', FriendDetail);

  FriendDetail.$inject = ['$scope', '$stateParams', 'FriendsService'];

  function FriendDetail($scope, $stateParams, FriendsService) {
    this.friend = FriendsService.get($stateParams.friendId);
  }
})();