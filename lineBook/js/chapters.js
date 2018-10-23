/**
 * Created by NameX on 2018/8/22.
 */


!function go_return() {
    var back = document.querySelector('.am-navbar-left');

    back.onclick = function () {
        window.history.go(-1);
    };
}();