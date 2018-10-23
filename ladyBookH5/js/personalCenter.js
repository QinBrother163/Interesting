/**
 * Created by NameX on 2018/7/31.
 */
// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();