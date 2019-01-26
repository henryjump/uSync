﻿/**
 * @ngdoc
 * @name uSync8Service
 * @requires $http
 * 
 * @description provides the link to the uSync api elements
 *              required for the dashboard to function
 */

(function () {
    'use strict';

    function uSyncServiceController($http) {

        var serviceRoot = 'backoffice/uSync/uSyncDashboardApi/';

        var service = {
            getSettings: getSettings,
            getHandlers: getHandlers
        };

        return service;

        /////////////////////

        function getSettings() {
            return $http.get(serviceRoot + 'GetSettings');
        }

        function getHandlers() {
            return $http.get(serviceRoot + 'GetHandlers');
        }

    }

    angular.module('umbraco.services')
        .factory('uSync8DashboardService', uSyncServiceController);

})();