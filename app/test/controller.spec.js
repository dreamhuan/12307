import 'angular';
import 'angular-mocks/angular-mocks';
import '../app';

describe('app', function () {
    beforeEach(angular.mock.module('app'));
    describe('homeCtrl', function () {
        it('homeCtrl 测试 hello world', inject(function ($controller) {
            var $scope = {};
            //spec body
            var homeCtrl = $controller('homeCtrl', {$scope: $scope});
            expect(homeCtrl).toBeDefined();
            expect($scope.hello).toEqual('hello world');
        }));

        it('homeCtrl 测试 hello world 123', inject(function ($controller) {
            var $scope = {};
            //spec body
            var homeCtrl = $controller('homeCtrl', {$scope: $scope});
            expect(homeCtrl).toBeDefined();
            expect($scope.hello).toEqual('hello world 123');
        }));
    });

    describe('showtimeCtrl', function () {
        it('showtimeCtrl 测试 user', inject(function ($controller) {
            var $scope = {};
            //spec body
            var showtimeCtrl = $controller('showtimeCtrl', {$scope: $scope});
            expect(showtimeCtrl).toBeDefined();
            // expect($scope.user).toEqual({name: '未登录'});
            expect($scope.user).toEqual({name: '123', email: '123', pwd: '123'});
        }));
    });
});

// describe('第一个测试套件', function () {
//     it('第一个测试用例: 1+1=2',function () {
//         expect(1 + 1).toBe(2);
//     });
//     it('第二个测试用例: 1+1=3',function () {
//         expect(1 + 1).toBe(3);
//     });
// });
