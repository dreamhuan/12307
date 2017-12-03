import angular from 'angular';
import swal from 'sweetalert2'

const app = angular.module('app.controller', [])

    .controller('homeCtrl', function ($scope) {
        $scope.hello = 'hello world';
    })

    .controller('orderDetailsCtrl', function ($scope) {
    })

    .controller('addPassengerCtrl', function ($scope) {
    })

    .controller('editPassengerCtrl', function ($scope) {
    });
export default app.name;
