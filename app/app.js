import angular from 'angular';

import routing from './app.config';
import router from './js/router';
import controller from './js/controller';
import service from './js/service';
import ngSanitize from 'angular-sanitize';
import 'font-awesome-webpack';

const app = angular.module('app',
    [
        router,
        controller,
        service,
        ngSanitize
    ])
    .config(routing)
    .constant('hostip', 'http://localhost:3000/')  //本地开发环境地址
    .filter('to_trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        }
    }])
    .run(function ($rootScope) {
        // 在这里绑定根路由视图

    })

;

//引入css
import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert2/dist/sweetalert2.css'

import './styles/style.less';
import './fonts/iconfont.css';

import './styles/searchMsg.less';
import './styles/searchRes.less';
import './styles/checkOrder.less';
import './styles/passengerList.less';
import './styles/newPassenger.less';
import './styles/checkPay.less';
import './styles/payChoice.less';
import './styles/orderDetail.less';
import './styles/checkRefund.less';
import './styles/refundSuccess.less';
import './styles/register.less';
import './styles/checkReg.less';
import './styles/login.less';

