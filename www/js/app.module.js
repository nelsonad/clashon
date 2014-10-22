/**
 * Created by adam on 10/14/14.
 */
(function(){
  'use strict';

  angular.module('ccnetwork', [
    /*
     * Order is not important. Angular makes a
     * pass to register all of the modules listed
     * and then when app.dashboard tries to use app.data,
     * it's components are available.
     */

    /*
     * Everybody has access to these.
     * We could place these under every feature area,
     * but this is easier to maintain.
     */
    'ccnetwork.core',
    'ccnetwork.services',
    'ccnetwork.localization',
    //'ccnetwork.state',
    /*
     * Feature areas
     */
    'ccnetwork.account',
    'ccnetwork.dashboard',
    'ccnetwork.friends',
    'ccnetwork.layout',
    'ccnetwork.pages'
  ]);

})();