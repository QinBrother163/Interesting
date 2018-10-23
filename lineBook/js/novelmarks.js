/**
 * Created by NameX on 2018/8/21.
 */



// 公共函数 返回按钮 -- 书城首页
!function go_return() {
    var back = document.querySelector('.am-navbar-left');
    var am_navbar_right = document.querySelector('.am-navbar-right');


    am_navbar_right.onclick = function () {
        window.location.href='../index.html';
    };

    back.onclick = function () {
        window.history.go(-1);
    };
}();