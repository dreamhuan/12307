import angular from 'angular';
import swal from 'sweetalert2'
import $ from 'jquery';

const app = angular.module('app.controller', [])

    .controller('testCtrl', function ($scope) {
        $scope.hello = 'hello world';
        console.log($.fn);
    })

    .controller('searchMsgCtrl', function ($scope) {

    })

    .controller('searchResCtrl', function ($scope) {
        $scope.records = [
            1,2,3,4,5,6,7,8,9,89,10,11,12
        ]
    })

    .controller('checkOrderCtrl', function ($scope) {

    })

    .controller('passengerListCtrl', function ($scope) {

    })

    .controller('newPassengerCtrl', function ($scope) {

    })

    .controller('checkPayCtrl', function ($scope) {

    })

    .controller('payChoiceCtrl', function ($scope) {

    })

    .controller('orderDetailCtrl', function ($scope) {

    })

    .controller('checkRefundCtrl', function ($scope) {

    })

    .controller('refundSuccessCtrl', function ($scope) {

    })

    .controller('registerCtrl', function ($scope) {

    })

    .controller('checkRegCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

;
export default app.name;
