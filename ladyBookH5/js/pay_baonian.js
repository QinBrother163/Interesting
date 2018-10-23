// 全局提示弹框
var msg = document.getElementById('msg');


// 开通按钮
function getOpenBtn() {
    var vip_btn = document.querySelector('.vip_btn');

    vip_btn.onclick = function () {
        publicSetTimeout(msg, '开通成功!');
    }
}
getOpenBtn();
// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();



// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}
// Public 函数 自动隐藏提示弹框
function publicSetTimeout(node, title) {
    node.innerText = title;
    publicShowStatus(node, 'block');
    setTimeout(function () {
        publicShowStatus(node, 'none');
    }, 1500);
}