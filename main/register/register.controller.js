/**
 * Created by cipriach on 04.12.2015.
 */
(function () {
    var app = angular.module('smf');

    var RegisterController = function ($scope) {
        $scope.alreadyUsedUserName = false;
        $scope.register = function(userName, firstName, lastName, password) {
            console.log('Register user '+userName);
            if(userName == 'gigi') {
                $scope.alreadyUsedUserName = true;
            } else {
                $scope.alreadyUsedUserName = false;
            }
        }

    };

    app.controller('RegisterController', ['$scope', RegisterController]);
})();