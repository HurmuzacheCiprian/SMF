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
                })
                .state('home', {
                    url: '/home',
                    views: {
                        'content@': {
                            templateUrl: './home/home.html',
                            controller: 'HomeController'
                        }
                    }
                })
                .state('home.economies', {
                    templateUrl: './economies/economies.html',
                    controller: 'EconomiesController'
                })
                .state('home.funds', {
                    templateUrl: './funds/funds.html',
                    controller: 'FundsController'
                 })
                .state('home.expenses', {
                    templateUrl: './expenses/expenses.html',
                    controller: 'ExpensesController'
                });
        });
})();