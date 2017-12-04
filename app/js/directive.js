import angular from 'angular';

const app = angular.module('app.directive', [])
    .directive('bottom', function () {
        return {
            restrict: 'E',
            template: `
              <div class="bottom">
                <div class="ticket_booking">车票预定</div>
                <div class="business_travel_service">商旅服务</div>
                <div class="query_order">订单查询</div>
                <div class="my_12307">我的12307</div>
            </div>`,
            replace: true
        };
    })

;
export default app.name;