import angular from 'angular';
import swal from 'sweetalert2'
import $ from 'jquery';

const app = angular.module('app.controller', [])

    .controller('testCtrl', function ($scope) {
        $scope.hello = 'hello world';
        console.log($.fn);
        $('#test').click(() => $('#test').css('width', '300px'))
    })

    .controller('searchMsgCtrl', function ($scope, $state) {
        $scope.search = function () {
            $state.go('searchRes');
        };
        $scope.addPassenger = function () {
            $state.go('passengerList');
            localStorage.passengerList = 'searchMsg';
        };
    })

    .controller('searchResCtrl', function ($scope, $state) {
        $scope.records = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 10, 11, 12
        ];
        $scope.determine = function () {
            $state.go('checkOrder');
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/searchMsg');
            // history.go(-1);
        };
    })

    .controller('checkOrderCtrl', function ($scope, $state) {
        $scope.people = [
            {
                name: '傅凯琪',
                id: '330902xxxxx7412',
                level: '二等',
                type: '成人票',
            }, {
                name: '傅凯琪',
                id: '330902xxxxx7412',
                level: '二等',
                type: '成人票',
            }
        ];
        $scope.remove = function (i) {
            $scope.people.splice(i, 1);
        };

        $scope.add = function () {
            $state.go('passengerList');
            localStorage.passengerList = 'checkOrder';
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/searchRes')
            // history.go(-1);
        };
        $scope.submit = function () {
            $state.go('checkPay');
        };
        $scope.selects = [1, 0, 0];
        $scope.prices = [0, 1, 1];
        $scope.select = function (i) {
            $scope.selects = [0, 0, 0];
            $scope.selects[i] = 1;
            $scope.prices = [1, 1, 1];
            $scope.prices[i] = 0;
        };
        $scope.showchoose = false;
        $scope.hidechoose = function () {
            $scope.showchoose = false;
        };
    })

    .controller('passengerListCtrl', function ($scope, $state) {
        $scope.newPassenger = function () {
            $state.go('newPassenger');
        };
        $scope.finish = function () {
            window.location.replace('http://localhost:8080/#!/' + localStorage.passengerList);
            // history.go(-1);
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/checkOrder')
            // history.go(-1);
        };
    })

    .controller('newPassengerCtrl', function ($scope, $state) {
        var clickFileType = 0;
        var clickPassType = 0;
        var thisItem = 0;
        $('.file-type').click(function () {
            thisItem = 0;
            $('.choose-container').css('bottom', '-50px');
            $('.choose-container').children().eq(0).css('color', 'black');
            $('.choose-container').children().eq(1).css('color', '#d4d4d4');
            $('.choose-container').children().eq(2).css('color', '#d4d4d4');
            $('.choose-container').children().eq(3).css('color', '#d4d4d4');

            if (clickPassType % 2 == 1) {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container2').css('height', '0px');
                $('.choose-container2').hide();
                $('.choose-box').css('height', '0px');
                clickPassType += 1;
            }
            clickFileType += 1;
            if (clickFileType % 2 == 1) {
                $('.choose-list').css('height', '300px');
                $('.choose').css('height', '250px');
                $('.choose-container').css('height', '200px');
                $('.choose-container').show();
                $('.choose-box').css('height', '50px');
            }
            else {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container').css('height', '0px');
                $('.choose-container').hide();
                $('.choose-box').css('height', '0px');
            }
        })
        $('.pass-type').click(function () {
            thisItem = 0;
            $('.choose-container2').css('bottom', '-50px');
            $('.choose-container2').children().eq(0).css('color', 'black');
            $('.choose-container2').children().eq(1).css('color', '#d4d4d4');
            $('.choose-container2').children().eq(2).css('color', '#d4d4d4');
            $('.choose-container2').children().eq(3).css('color', '#d4d4d4');

            if (clickFileType % 2 == 1) {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container').css('height', '0px');
                $('.choose-container').hide();
                $('.choose-box').css('height', '0px');
                clickFileType += 1;
            }
            clickPassType += 1;
            if (clickPassType % 2 == 1) {
                $('.choose-list').css('height', '300px');
                $('.choose').css('height', '250px');
                $('.choose-container2').show();
                $('.choose-container2').css('height', '200px');
                $('.choose-box').css('height', '50px');
            }
            else {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container2').css('height', '0px');
                $('.choose-container2').hide();
                $('.choose-box').css('height', '0px');
            }
        })
        $('.choose-item').click(function () {
            if (clickFileType % 2 == 1) {
                $('.choose-container').children().eq(thisItem).css('color', '#d4d4d4');
                thisItem = $('.choose-container').children().index(this);
                var s = -50 + thisItem * 50;
                var ss = s + 'px';
                if (thisItem == 3)
                    $('.choose-container').children().eq(0).css('color', '#f7f7f7');
                else
                    $('.choose-container').children().eq(0).css('color', '#d4d4d4');
                console.log(thisItem);
                $('.choose-container').css('bottom', ss);
            }
            if (clickPassType % 2 == 1) {
                $('.choose-container2').children().eq(thisItem).css('color', '#d4d4d4');
                thisItem = $('.choose-container2').children().index(this);
                if (thisItem == 3)
                    $('.choose-container2').children().eq(0).css('color', '#f7f7f7');
                else
                    $('.choose-container2').children().eq(0).css('color', '#d4d4d4');
                console.log(thisItem);
                var s = -50 + thisItem * 50;
                var ss = s + 'px';
                $('.choose-container2').css('bottom', ss);
            }
            $(this).css('color', 'black');
        })

        $('.choose-list-title-cancel').click(function () {
            thisItem = 0;
            if (clickFileType % 2 == 1) {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container').css('height', '0px');
                $('.choose-container').hide();
                $('.choose-box').css('height', '0px');
                clickFileType += 1;
            }
            if (clickPassType % 2 == 1) {
                $('.choose-list').css('height', '0px');
                $('.choose').css('height', '0px');
                $('.choose-container2').css('height', '0px');
                $('.choose-container2').hide();
                $('.choose-box').css('height', '0px');
                clickPassType += 1;
            }
            $('.choose-container').css('bottom', '-50px');
            $('.choose-container').children().eq(0).css('color', 'black');
            $('.choose-container').children().eq(1).css('color', '#d4d4d4');
            $('.choose-container').children().eq(2).css('color', '#d4d4d4');
            $('.choose-container').children().eq(3).css('color', '#d4d4d4');
            $('.choose-container2').css('bottom', '-50px');
            $('.choose-container2').children().eq(0).css('color', 'black');
            $('.choose-container2').children().eq(1).css('color', '#d4d4d4');
            $('.choose-container2').children().eq(2).css('color', '#d4d4d4');
            $('.choose-container2').children().eq(3).css('color', '#d4d4d4');
        })
        $('.choose-list-title-sure').click(function () {
            if (clickFileType % 2 == 1) {
                var tmp = $('.choose-container').children().eq(thisItem).text();
                $('.file-type-text').val(tmp);
            }
            if (clickPassType % 2 == 1) {
                var tmp = $('.choose-container2').children().eq(thisItem).text();
                $('.pass-type-text').val(tmp);
            }
        })
        $scope.finish = function () {
            window.location.replace('http://localhost:8080/#!/passengerList')
            // history.go(-1);
        };
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/passengerList')
            // history.go(-1);
        };
    })

    .controller('checkPayCtrl', function ($scope, $state) {
        $scope.pay = function () {
            $state.go('payChoice');
        };
    })

    .controller('payChoiceCtrl', function ($scope, $state) {
        $scope.finish = function () {
            $state.go('orderDetail');
        };
        $scope.submit = function () {
            $state.go('orderDetail');
        };
    })

    .controller('orderDetailCtrl', function ($scope, $state) {
        $scope.back = function () {
            window.location.replace('http://localhost:8080/#!/payChoice')
            // history.go(-1);
        };

        $scope.showRefund = function () {
            $('.choice1_border').removeClass('hide');
            $('.refund_ticket_btn').removeClass('hide');

            $('.choice2_border').addClass('hide');
            $('.choice3_border').addClass('hide');
            $('.choice4_border').addClass('hide');
            $('.choice5_border').addClass('hide');
            $('.order_meal_btn').addClass('hide');
            $('.change_ticket_select').addClass('hide');
            $('.change_ticket_btn').addClass('hide');
            $('.change_station_btn').addClass('hide');
        };

        $scope.refund = function () {
            swal({
                title: '温馨提示',
                text: '如有订餐，请按规定自行办理退餐。',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(function (isConfirm) {
                if (isConfirm === true) {
                    $state.go('checkRefund');

                } else if (isConfirm === false) {
                    $state.go('orderDetail');

                } else {
                    // Esc, close button or outside click
                    // isConfirm is undefined
                }
            });
        };

        $scope.showChangeTicket = function () {
            $('.choice2_border').removeClass('hide');
            $('.change_ticket_select').removeClass('hide');
            $('.change_ticket_btn').removeClass('hide');

            $('.choice1_border').addClass('hide');
            $('.choice3_border').addClass('hide');
            $('.choice4_border').addClass('hide');
            $('.choice5_border').addClass('hide');
            $('.order_meal_btn').addClass('hide');
            $('.refund_ticket_btn').addClass('hide');
            $('.change_station_btn').addClass('hide');
        };

        $scope.showChangeStation = function () {
            $('.choice3_border').removeClass('hide');
            $('.change_station_btn').removeClass('hide');
            $('.change_ticket_select').removeClass('hide');

            $('.choice1_border').addClass('hide');
            $('.choice2_border').addClass('hide');
            $('.choice4_border').addClass('hide');
            $('.choice5_border').addClass('hide');
            $('.order_meal_btn').addClass('hide');
            $('.refund_ticket_btn').addClass('hide');
            $('.change_ticket_btn').addClass('hide');
        };

        $scope.showOrderMeal = function () {
            $('.choice5_border').removeClass('hide');
            $('.order_meal_btn').removeClass('hide');

            $('.choice1_border').addClass('hide');
            $('.choice2_border').addClass('hide');
            $('.choice3_border').addClass('hide');
            $('.choice4_border').addClass('hide');
            $('.refund_ticket_btn').addClass('hide');
            $('.change_ticket_select').addClass('hide');
            $('.change_ticket_btn').addClass('hide');
            $('.change_station_btn').addClass('hide');
        };

    })

    .controller('checkRefundCtrl', function ($scope, $state) {
        $scope.confirm = function () {

            swal({
                title: '温馨提示',
                text: '退票后不能撤销操作，请确认！',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: '确定',
                cancelButtonText: '取消',
            }).then(function (isConfirm) {
                if (isConfirm === true) {
                    $state.go('refundSuccess');

                } else if (isConfirm === false) {
                    $state.go('checkRefund');

                } else {
                    // Esc, close button or outside click
                    // isConfirm is undefined
                }
            });
        };
        $scope.cancel = function () {
            window.location.replace('http://localhost:8080/#!/orderDetail')
            // history.go(-1);
        };
    })

    .controller('refundSuccessCtrl', function ($scope, $state) {
        $scope.continue = function () {
            $state.go('searchMsg');
        };
    })

    .controller('registerCtrl', function ($scope, $state) {

    })

    .controller('checkRegCtrl', function ($scope, $state) {

    })

    .controller('loginCtrl', function ($scope, $state) {

    })

    .controller('travelServiceCtrl', function ($scope, $state) {

    })
;
export default app.name;
