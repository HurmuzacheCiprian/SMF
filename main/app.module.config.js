(function () {

    'use strict';

    angular.module('smf')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/login');
            $stateProvider
                .state('login', {
                    url: '/login',
                    views: {
                        'content@': {
                            templateUrl: './login/login.html',
                            controller: 'LoginController'

                        }
                    }
                })
                .state('register', {
                    url: '/register',
                    views: {
                        'content@': {
                            templateUrl: './register/register.html',
                            controller: 'RegisterController'

                        }
                    }
                });
        });


})();