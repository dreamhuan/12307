import angular from 'angular';

const app = angular.module('app.directive', [])
    .directive('appBottom', function () {
        return {
            restrict: 'E',
            template: `
              <div class="bottom">
                <div class="ticket_booking" ng-click="preOrder()">车票预定</div>
                <div class="business_travel_service">商旅服务</div>
                <div class="query_order">订单查询</div>
                <div class="my_12307" ng-click="register()">我的12307</div>
            </div>`,
            replace: true,
            controller: function ($scope, $state) {
                $scope.preOrder = function () {
                    $state.go('searchMsg');

                };
                $scope.register = function () {
                    $state.go('register');
                }
            }
        };
    })

;
export default app.name;