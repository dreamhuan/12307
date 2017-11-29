import angular from 'angular';
import swal from 'sweetalert2'

const app = angular.module('app.controller', [])

    .controller('homeCtrl', function ($scope) {
        $scope.hello = 'hello world';
    })

;
export default app.name;