/**
 * Created by adam on 10/14/14.
 */

(function() {
  'use strict';

  angular.module('ccnetwork.services')

  /**
   * A simple example service that returns some data.
   */
  .factory('ParseSdk', ParseSdk);

  function ParseSdk (){
    // pro-tip: swap these keys out for PROD keys automatically on deploy using grunt-replace
    Parse.initialize("NkAlPCwc994IwL0JCWicde6pqMyzor4F5Ac8GpjU", "rmkFmYIHSSSHQeTz9RpnBwcXOBXWgcVccZ9KmAhW");

    // FACEBOOK init
//    window.fbPromise.then(function() {
//
//      Parse.FacebookUtils.init({
//
//        // pro-tip: swap App ID out for PROD App ID automatically on deploy using grunt-replace
////        appId: 481650395275919, // Facebook App ID
////        channelUrl: 'http://brandid.github.io/parse-angular-demo/channel.html', // Channel File
////        cookie: true, // enable cookies to allow Parse to access the session
////        xfbml: true, // parse XFBML
////        frictionlessRequests: true // recommended
//
//      });
//
//    });
  }
})();