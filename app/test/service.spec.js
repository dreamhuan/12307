// import 'angular';
// import 'angular-mocks/angular-mocks';
// import '../app';

describe('app', function () {
    beforeEach(angular.mock.module('app'));
    describe('SystemService', function () {
        it('SystemService 测试 hostip', inject(function ($injector) {
            //spec body
            var SystemService = $injector.get('SystemService');
            expect(SystemService).toBeDefined();
            expect(SystemService.getHostIP()).toEqual('http://localhost:3000/');
        }));
    });

    describe('UserService', function () {
        //我们会在测试中使用这个scope
        var scope, $httpBackend;

        //模拟我们的Application模块并注入我们自己的依赖
        beforeEach(angular.mock.module('app'));

        //模拟Controller，并且包含 $rootScope 和 $controller
        beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {
            //设置$httpBackend冲刷$http请求
            $httpBackend = _$httpBackend_;
            $httpBackend.when('POST', 'http://localhost:3000/user/login').respond({
                code: 0,
                returnValue: {
                    name:'123',
                    email: "123",
                    pwd: "123"
                },
                errorReason:''
            });
            //创建一个空的 scope
            scope = $rootScope.$new();

            //声明 Controller并且注入已创建的空的 scope
            $controller('loginCtrl', {
                $scope: scope
            });
        }));

        // 测试从这里开始
        it('loginCtrl login test', function () {
            scope.user = {
                email: "123",
                pwd: "123"
            };
            scope.submit();
            $httpBackend.flush();
        });
    });
});




