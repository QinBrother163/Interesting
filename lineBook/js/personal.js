
// 签到弹框
function getSignModal() {
    var am_modal_container = document.getElementById('am_modal_container');
    var am_modal_mask = am_modal_container.querySelector('.am-modal-mask');
    var am_modal_close = am_modal_container.querySelector('.am-modal-close');
    var am_button = am_modal_container.querySelector('.am-button');

    publicShowStatus(am_modal_container, 'block');

    // 遮罩层的取消
    am_modal_mask.onclick = function () {
        publicShowStatus(am_modal_container, 'none');
    };
    // 取消按钮
    am_modal_close.onclick = function () {
        publicShowStatus(am_modal_container, 'none');
    };
    // 签到按钮
    am_button.onclick = function () {

        publicShowStatus(am_modal_container, 'none');
        // publicShowDialog(document.getElementById('public_dialog'),'签到成功!');
        publicShowDialog(document.getElementById('public_dialog'),'签到失败!');
        // publicShowDialog(document.getElementById('public_dialog'),'未关注!');
    }
}

// 签到送书币
function getSign() {
    var sign = document.getElementById('sign');

    sign.onclick = function () {
        getSignModal();
    }
}
getSign();


// 公共函数 -- 提示框
function publicShowDialog(node,title) {
    document.getElementById('public_dialog_title').innerHTML = title;

    publicShowStatus(node, 'block');

    setTimeout(function () {
        publicShowStatus(node, 'none');
    },1600)
}

// 显示-隐藏绑定成功提示弹框
function showGoodBox() {
    var modal = document.querySelector('.modal');
    var bind_btn = modal.querySelector('.bind_btn');

    modal.style.display = 'block';
    // 确认按钮
    bind_btn.onclick = function () {
        modal.style.display = 'none';
    }
}
// 返回按钮
// !function go_return() {
//     var back = document.querySelector('.back');
//
//     back.onclick = function () {
//         window.history.go(-1);
//     };
// }();
// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}