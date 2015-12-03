(function () {

    'use strict';

    angular.module('smf')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    views: {
                        'content@': {
                            templateUrl: './login/login.html',
                            controller: 'LoginController'

                        }
                    }
                });
        });


})();