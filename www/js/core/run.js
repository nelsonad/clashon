/**
 * Created by adam on 10/14/14.
 */
(function() {
  'use strict';

  var core = angular.module('ccnetwork.core');

  core.run(runIonicPlatform);

  /* @ngInject */
  function runIonicPlatform ($ionicPlatform, $translate) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  }

  core.run(runParseSdk);

  /* @ngInject */
  function runParseSdk (ParseSdk){
  }
})();