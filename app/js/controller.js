import angular from 'angular';
import swal from 'sweetalert2'

const app = angular.module('app.controller', [])

    .controller('homeCtrl', function ($scope) {
        $scope.hello = 'hello world';
    })

    .controller('orderDetailsCtrl', function ($scope) {
    });
export default app.name;
