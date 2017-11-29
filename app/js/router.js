import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app.router', [uiRouter]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('../templates/home.html'),
            controller: 'homeCtrl'
        })

});
export default app.name;