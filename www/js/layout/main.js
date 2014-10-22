/**
 * Created by adam on 10/16/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.layout')
    .controller('Main', Main);

  Main.$inject = ['$scope', '$ionicModal', '$ionicSideMenuDelegate', '$timeout'];

  function Main($scope, $ionicModal, $ionicSideMenuDelegate, $timeout) {
    var that = this;

    this._loggedIn = null;

    this.getValidationCssClass = getValidationCssClass;
    this.isLoggedIn = isLoggedIn;
    this.resetLoginStatus = resetLoginStatus;
    this.logout = logout;
    this.toggleRightSideMenu = toggleRightSideMenu;

    function getValidationCssClass(sender){
      if(sender.$pristine) return "";
      return sender.$valid ? "" : "invalid";
    }

    function isLoggedIn(){
      if(that._loggedIn === null){
        that._loggedIn = Parse.User.current() !== null;
      }
      return that._loggedIn;
    }

    function resetLoginStatus(){
      that._loggedIn = null;
    }

    function logout(){
      Parse.User.logOut();
      that.resetLoginStatus();
    }

    function toggleRightSideMenu(){
      $ionicSideMenuDelegate.toggleLeft();
    }

    function hideSideMenuButton(){
      that.sideMenuButtonEnabled = false;
    }

    /*function delayHideSideMenu(delay){
      if($ionicSideMenuDelegate.isOpenRight()){
        $timeout($ionicSideMenuDelegate.toggleRight, delay);
      }
    }*/
  }
})();