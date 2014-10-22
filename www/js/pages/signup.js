/**
 * Created by adam on 10/15/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.pages')
    .controller('Signup', Signup);

  function Signup($state, $filter, $ionicNavBarDelegate) {
    //$ionicNavBarDelegate.showBackButton(false);

    var vm = this;
    vm.username = '';
    vm.password = '';
    vm.email = '';
    vm.error = null;
    vm.title = 'SIGNUP';

    this.doSignup = doSignup;
    this.close = close;

    function doSignup(){
      var user = new Parse.User();
      user.set("username", vm.username);
      user.set("password", vm.password);
      user.set("email", vm.email);
      user.signUp().then(signupSuccess, signupError);
    }

    function signupSuccess(user){
      Parse.User.logIn(vm.username, vm.password).then(loginSuccess, loginError);
    }
    function signupError(error){
      switch(error.code){
        case 202:
          vm.error = $filter('translate')('USERNAME_TAKEN');
          break;
        case 203:
          vm.error = $filter('translate')('EMAIL_TAKEN');
          break;
        default:
          vm.error = $filter('translate')('SIGNUP_UNKNOWN_ERROR');
          break;
      }
    }
    function loginSuccess(){
      vm.main.resetLoginStatus();
      $state.go("main.get-started");
      vm.main.closeSignupModal(true);
      resetForm();
    }
    function loginError(){

    }

    function resetForm(){
      vm.username = '';
      vm.password = '';
      vm.email = '';
      vm.error = null;
      vm.form.$setPristine();
    }

    function close(){
      resetForm();
      vm.main.closeSignupModal();
    }
  }
})();