/**
 * Created by cipriach on 03.12.2015.
 */
(function () {
    var app = angular.module('smf');

    var LoginController = function ($scope, LoginService) {
        $scope.incorrectCredentials = false;
        $scope.signIn = function (userName, password) {
            if(userName == 'gigi') {

            }
        }
    };

    app.controller('LoginController', ['$scope', 'LoginService', LoginController]);


})();