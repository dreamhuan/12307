import angular from 'angular';

const app = angular.module('app.service', [])

    .service('SystemService', function ($q, $http, hostip) {
        let user = null;

        this.getUser = function () {
            let userCache = null;

            if (!localStorage.user) {
                userCache = null;
            }

            else {
                userCache = JSON.parse(localStorage.user);
            }

            //判断是否存在用户缓存
            if (user && userCache) {
                //判断本地缓存和session或者localstorage里面的用户信息是否相同
                if (user._id !== userCache._id) {
                    user = userCache;
                }
            } else if (!user && userCache) {
                user = userCache;
            }
            return user;
        };

        this.setUser = function (newUser) {
            user = newUser;
            localStorage.user = JSON.stringify(newUser);
        };

        this.getHostIP = function () {
            return hostip;
        };
    })

    .service('UserService', function ($http, SystemService) {
        this.login = function (user) {
        };

        this.register = function (user) {
            return $http.post(SystemService.getHostIP() + 'user', user);
        };
    })
    .service('StationService',function ($http,SystemService) {
        this.getInfor = function () {
            return $http.get(SystemService.getHostIP() + 'stationInformation');
        };
    })

;
export default app.name;