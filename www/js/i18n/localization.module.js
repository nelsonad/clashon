/**
 * Created by adam on 10/18/14.
 */
(function() {
  'use strict';

  angular
    .module('ccnetwork.localization', ['pascalprecht.translate', 'ngCookies'])
    .run(setupCordovaLocalization)
    .config(localizationConfig);

  //localizationConfig.$inject = ['$translateProvider'];

  function localizationConfig($translateProvider){
    $translateProvider
      .useLocalStorage()
      .useStaticFilesLoader({
        prefix: '/js/i18n/',
        suffix: '.json'
      })
      .fallbackLanguage('en')
      .translations('en', {
        "LOGOUT": "Logout",
        "LOGIN": "Login",
        "SIGNUP": "Sign up",
        "DASHBOARD": "My Village",
        "FRIENDS": "Friends",
        "UPGRADES": "Upgrades",
        "USERNAME": "Username",
        "PASSWORD": "Password",
        "EMAIL": "Email",
        "USERNAME_TAKEN": "The username is already in use.",
        "EMAIL_TAKEN": "The email address is already in use.",
        "SIGNUP_UNKNOWN_ERROR": "An error occurred during signup.",
        "SIGNUP_WITH": "Sign up with:",
        "GET_STARTED": "Get Started",
        "VILLAGE_NAME": "Village Name",
        "CONTINUE": "Continue",
        "SKIP": "Skip",
        "WELCOME": "Welcome",
        "LOGIN_INVALID": "Invalid. Try again.",
        "LOGIN_ERROR": "An error occurred. Try again.",
        "USERNAME_REQUIRED": "Username is required.",
        "CLASH_ON": "Clash On!"
      });
  }

  function setupCordovaLocalization($ionicPlatform, $translate){
    $ionicPlatform.ready(function() {
      if(typeof navigator.globalization !== "undefined") {
        navigator.globalization.getPreferredLanguage(function(language) {
          $translate.use((language.value).split("-")[0]);
        }, null);
      }
    });
  }
})();