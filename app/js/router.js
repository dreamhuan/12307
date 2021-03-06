import angular from 'angular';
import uiRouter from 'angular-ui-router';

const app = angular.module('app.router', [uiRouter]);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/searchMsg');

    $stateProvider
        .state('test', {
            url: '/test',
            template: require('../templates/test.html'),
            controller: 'testCtrl'
        })
        .state('searchMsg', {
            url: '/searchMsg',
            template: require('../templates/searchMsg.html'),
            controller: 'searchMsgCtrl'
        })
        .state('searchRes', {
            url: '/searchRes',
            template: require('../templates/searchRes.html'),
            controller: 'searchResCtrl'
        })
        .state('checkOrder', {
            url: '/checkOrder',
            template: require('../templates/checkOrder.html'),
            controller: 'checkOrderCtrl'
        })
        .state('passengerList', {
            url: '/passengerList',
            template: require('../templates/passengerList.html'),
            controller: 'passengerListCtrl'
        })
        .state('newPassenger', {
            url: '/newPassenger',
            template: require('../templates/newPassenger.html'),
            controller: 'newPassengerCtrl'
        })
        .state('checkPay', {
            url: '/checkPay',
            template: require('../templates/checkPay.html'),
            controller: 'checkPayCtrl'
        })
        .state('payChoice', {
            url: '/payChoice',
            template: require('../templates/payChoice.html'),
            controller: 'payChoiceCtrl'
        })
        .state('orderDetail', {
            url: '/orderDetail',
            template: require('../templates/orderDetail.html'),
            controller: 'orderDetailCtrl'
        })
        .state('checkRefund', {
            url: '/checkRefund',
            template: require('../templates/checkRefund.html'),
            controller: 'checkRefundCtrl'
        })
        .state('refundSuccess', {
            url: '/refundSuccess',
            template: require('../templates/refundSuccess.html'),
            controller: 'refundSuccessCtrl'
        })
        .state('register', {
            url: '/register',
            template: require('../templates/register.html'),
            controller: 'registerCtrl'
        })
        .state('checkReg', {
            url: '/checkReg',
            template: require('../templates/checkReg.html'),
            controller: 'checkRegCtrl'
        })
        .state('login', {
            url: '/login',
            template: require('../templates/login.html'),
            controller: 'loginCtrl'
        })
        .state('travelService',{
            url: '/travelService',
            template: require('../templates/travelService.html'),
            controller: 'travelServiceCtrl'
        })

});

export default app.name;