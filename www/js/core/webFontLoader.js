/**
 * Created by adam on 10/19/14.
 */
(function() {
  'use strict';

  var core = angular.module('ccnetwork.core');

  core.directive('webfontLoader', webFontLoaderDirective);

  function webFontLoaderDirective($rootScope, $window){
    return {
      link: function(scope, elem, attrs) {

        function onActive() {
          $rootScope.$broadcast('webfontLoader.loaded');
        }

        function onInactive() {
          $rootScope.$broadcast('webfontLoader.error');
        }

        $window.WebFont.load({
          google: {
            families: [attrs.webfontLoader]
          },
          active: onActive,
          inactive: onInactive
        });
      }
    }
  }
}());