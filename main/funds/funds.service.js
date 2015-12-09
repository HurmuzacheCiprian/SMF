/**
 * Created by cipriach on 04.12.2015.
 */
(function () {
    var app = angular.module('smf');

    app.factory('FundsService', function ($http) {
        var getFunds = function (userName) {
            var req = {
                method: 'GET',
                url: '/resh/controller',
                headers: {
                    'Content-Type': "application/json",
                    'port': 8080,
                    'hostname': 'localhost',
                    'path': '/api/' + userName + '/funds'
                }
            };

            return $http(req);
        };

        return {
            getFunds: getFunds
        }
    });
})();