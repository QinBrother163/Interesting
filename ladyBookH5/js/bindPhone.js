// 获取验证码倒计时
var times = 60;

function getTime(o) {

    if (o.innerText == "获取验证码") {
        o.style.opacity = '0.5';
        function time(o) {

            if (times == 0) {
                o.style.opacity = '1';
                o.innerText = "获取验证码";
                times = 60;
            } else {
                o.innerText = "重新发送(" + times + ")";
                times--;
                setTimeout(function () {
                    time(o)
                }, 1000)
            }
        }

        time(o);
    }
}
// 提交按钮
function getPhoneBtn() {
    var commit_btn = document.querySelector('.commit_btn');
    commit_btn.onclick = function () {
        showGoodBox();
    }
}
getPhoneBtn();

// 显示-隐藏绑定成功提示弹框
function showGoodBox() {
    var modal = document.querySelector('.modal');
    var bind_btn = modal.querySelector('.bind_btn');

    modal.style.display = 'block';
    // 确认按钮
    bind_btn.onclick = function () {
        modal.style.display = 'none';
        toggleShow();
    }
}

// 绑定前后切换
function toggleShow() {
    var bingBox_N = document.querySelectorAll('.bingBox')[0];
    var bingBox_Y = document.querySelectorAll('.bingBox')[1];

    publicShowStatus(bingBox_N, 'none');
    publicShowStatus(bingBox_Y, 'block');

}

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