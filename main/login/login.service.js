/**
 * Created by cipriach on 03.12.2015.
 */
(function () {
    var app = angular.module('smf');

    app.factory('LoginService', function ($http) {

        var checkLoginCredentials = function (userName, password) {
            var req = {
                method: 'POST',
                url: '/resh/controller',
                data: {
                    userName: userName,
                    password: password
                },
                headers: {
                    'Content-Type': "application/json",
                    'port': 8080,
                    'hostname': 'localhost',
                    'path': '/login'
                }
            };
            return $http(req);
        };

        return {
            checkLoginCredentials: checkLoginCredentials
        }
    });


})();