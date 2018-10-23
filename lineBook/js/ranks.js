/**
 * Created by NameX on 2018/8/21.
 */



// 男生-女生切换
function ranks() {
    var wrap = document.querySelector('.menus--17QtW');

    var list = wrap.querySelectorAll('span');

    var am_list_body = document.querySelectorAll('.am-list-body');

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = setRanks;
        list[i].idx = i;
    }
    function setRanks() {
        for (var i = 0; i < list.length; i++) {
            list[i].className = 'menu--2bj-r';
            am_list_body[i].style.display = 'none';
        }
        list[this.idx].className = 'menu--2bj-r active--1QGVj';
        am_list_body[this.idx].style.display = 'block';
    }
}
ranks();



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