/**
 * Created by cipriach on 03.12.2015.
 */
(function () {
    var app = angular.module('smf');

    var LoginController = function ($scope, $state, LoginService) {
        $scope.incorrectCredentials = false;
        $scope.signIn = function (userName, password) {

            //TODO this will be replaced by a call to LoginService
            if(userName == 'gigi' && password == 'gigi') {
                $state.go('home');
            }
        }
    };

    app.controller('LoginController', ['$scope','$state', 'LoginService', LoginController]);


})();