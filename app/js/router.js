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
        .state('orderDetails', {
            url: '/orderDetails',
            template: require('../templates/orderDetails.html'),
            controller: 'orderDetailsCtrl'
        })
        .state('addPassenger', {
            url: '/addPassenger',
            template: require('../templates/addPassenger.html'),
            controller: 'addPassengerCtrl'
        })
        .state('editPassenger', {
            url: '/editPassenger',
            template: require('../templates/editPassenger.html'),
            controller: 'editPassengerCtrl'
        })

});

export default app.name;