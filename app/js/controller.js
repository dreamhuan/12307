import angular from 'angular';
import swal from 'sweetalert2'
import $ from 'jquery';

const app = angular.module('app.controller', [])

    .controller('testCtrl', function ($scope) {
        $scope.hello = 'hello world';
        console.log($.fn);
    })

    .controller('searchMsgCtrl', function ($scope, $state) {
        $scope.search = function () {
            $state.go('searchRes');
        };
        $scope.addPassenger = function () {
            $state.go('passengerList');
            localStorage.passengerList = 'searchMsg';
        };
    })

    .controller('searchResCtrl', function ($scope, $state) {
        $scope.records = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 10, 11, 12
        ];
        $scope.determine = function () {
            $state.go('checkOrder');
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/searchMsg');
            // history.go(-1);
        };
    })

    .controller('checkOrderCtrl', function ($scope, $state) {
        $scope.add = function () {
            $state.go('passengerList');
            localStorage.passengerList = 'checkOrder';
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/searchRes')
            // history.go(-1);
        };
        $scope.submit = function () {
            $state.go('checkPay');
        };
    })

    .controller('passengerListCtrl', function ($scope, $state) {
        $scope.newPassenger = function () {
            $state.go('newPassenger');
        };
        $scope.finish = function () {
            window.location.replace('http://localhost:8080/#!/' + localStorage.passengerList);
            // history.go(-1);
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/checkOrder')
            // history.go(-1);
        };
    })

    .controller('newPassengerCtrl', function ($scope, $state) {
        // $('file-type').click(function () {
        //     $('choose-list').css('top', '0px');
        // })
        $scope.finish = function () {
            window.location.replace('http://localhost:8080/#!/passengerList')
            // history.go(-1);
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/passengerList')
            // history.go(-1);
        };
    })

    .controller('checkPayCtrl', function ($scope, $state) {
        $scope.pay = function () {
            $state.go('payChoice');
        };
    })

    .controller('payChoiceCtrl', function ($scope, $state) {
        $scope.finish = function () {
            $state.go('orderDetail');
        };
        $scope.submit = function () {
            $state.go('orderDetail');
        };
    })

    .controller('orderDetailCtrl', function ($scope, $state) {
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/payChoice')
            // history.go(-1);
        };
        $scope.refund = function () {
            $state.go('checkRefund');
        };
    })

    .controller('checkRefundCtrl', function ($scope, $state) {
        $scope.confirm = function () {
            $state.go('refundSuccess');
        };
        $scope.cancel = function () {
            window.location.replace('http://localhost:8080/#!/orderDetail')
            // history.go(-1);
        };
    })

    .controller('refundSuccessCtrl', function ($scope, $state) {
        $scope.continue = function () {
            $state.go('searchMsg');
        };
    })

    .controller('registerCtrl', function ($scope, $state) {

    })

    .controller('checkRegCtrl', function ($scope, $state) {

    })

    .controller('loginCtrl', function ($scope, $state) {

    })

    .controller('travelServiceCtrl', function ($scope, $state) {

    })
;
export default app.name;
