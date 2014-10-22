/**
 * Created by adam on 10/15/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.pages')
    .controller('Login', Login);

  function Login($filter, $ionicNavBarDelegate) {
    //$ionicNavBarDelegate.showBackButton(false);

    var vm = this;

    vm.doLogin = doLogin;
    vm.close = close;

    function resetForm(){
      vm.error = null;
      vm.username = '';
      vm.password = '';
      vm.form.username.$setPristine();
      vm.form.password.$setPristine();
      vm.form.$setPristine();
    }

    function doLogin(){
      Parse.User.logIn(vm.username, vm.password).then(loginSuccess, loginError);
    }

    function loginSuccess(user){
      vm.main.resetLoginStatus();
      close();
    }

    function loginError(error){
      switch(error.code){
        case 101:
          vm.error = $filter('translate')('LOGIN_INVALID');
          break;
        default:
          vm.error = $filter('translate')('LOGIN_ERROR');
          break;
      }
    }

    function close(){
      resetForm();
      vm.main.closeLoginModal();
    }
  }
})();