/**
 * Created by cipriach on 03.12.2015.
 */
(function() {
    var app = angular.module('smf');

    app.factory('LoginService',function($http) {

        var checkLoginCredentials = function() {
            return true;
        };

        return {
            checkLoginCredentials: checkLoginCredentials
        }
    });


})();