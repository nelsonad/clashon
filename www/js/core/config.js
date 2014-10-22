/**
 * Created by adam on 10/14/14.
 */
(function() {
  'use strict';

  var core = angular.module('ccnetwork.core');

  core.config(stateConfig);

  /* @ngInject */
  function stateConfig($stateProvider, $urlRouterProvider) {
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('main', {
        url: "",
        abstract: true,
        templateUrl: "js/layout/main.html",
        controller: "Main as main"
      })
      .state('main.tab', {
        url: "/tab",
        abstract: true,
        views: {
          'main-content': {
            templateUrl: "js/layout/tabs.html",
            controller: "Tabs as tabs"
          }
        }
      })
      .state('main.tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'js/dashboard/dashboard.html',
            controller: 'Dashboard'
          }
        }
      })
      .state('main.tab.friends', {
        url: '/friends',
        views: {
          'tab-friends': {
            templateUrl: 'js/friends/friends.html',
            controller: 'Friends as vm'
          }
        }
      })
      .state('main.tab.friend-detail', {
        url: '/friend/:friendId',
        views: {
          'tab-friends': {
            templateUrl: 'js/friends/friend.detail.html',
            controller: 'FriendDetail as vm'
          }
        }
      })
      .state('main.tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'js/account/account.html',
            controller: 'Account as vm'
          }
        }
      })
      .state('main.get-started', {
        url: '/get-started',
        views: {
          'main-content': {
            templateUrl: 'js/pages/get-started.html',
            controller: 'GetStarted as getStarted'
          }
        }
      })
      .state('main.welcome', {
        url: '/welcome',
        abstract: true,
        views: {
          'main-content': {
            templateUrl: 'js/pages/welcome.html',
            controller: 'Welcome as vm'
          }
        }
      })
      .state('main.welcome.landing', {
        url: '/landing',
        views: {
          'welcome-content': {
            templateUrl: 'js/pages/landing.html',
            controller: 'Welcome as welcome'
          }
        }
      })
      .state('main.welcome.login', {
        url: '/login',
        views: {
          'welcome-content': {
            templateUrl: 'js/pages/login.html',
            controller: 'Login as vm'
          }
        }
      })
      .state('main.welcome.signup', {
        url: '/signup',
        views: {
          'welcome-content': {
            templateUrl: 'js/pages/signup.html',
            controller: 'Signup as vm'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/welcome/landing');
  }
})();