/**
 * Created by adam on 10/14/14.
 */

(function() {
  'use strict';

  angular.module('ccnetwork.services')

  /**
   * A simple example service that returns some data.
   */
  .factory('FriendsService', FriendsService);

  function FriendsService (){
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var friends = [
      { id: 0, name: 'Scruff McGruff' },
      { id: 1, name: 'G.I. Joe' },
      { id: 2, name: 'Miss Frizzle' },
      { id: 3, name: 'Ash Ketchum' }
    ];

    return {
      all: function() {
        return friends;
      },
      get: function(friendId) {
        // Simple index lookup
        return friends[friendId];
      }
    }
  }
})();