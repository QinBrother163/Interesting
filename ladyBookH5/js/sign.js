// 初始化弹框
function signinbox(status) {
    var signinbox = document.querySelector('.signinbox');
    signinbox.style.display = status;

    // 点击确认
    var lastp = document.querySelector('.lastp');
    lastp.onclick = function () {
        signinbox.style.display = 'none';
        setImgStatus();
    }
}
// 切换图片
function setImgStatus() {
    // 未签到图片
    var sgin_btn1 = document.querySelectorAll('.sgin_btn')[0];
    // 已签到图片
    var sgin_btn2 = document.querySelectorAll('.sgin_btn')[1];

    sgin_btn1.style.display = 'none';
    sgin_btn2.style.display = 'block';
}
// 点击签到
function setSign() {
    var sgin_btn = document.querySelectorAll('.sgin_btn')[0];

    sgin_btn.onclick = function () {
        signinbox('block');
    }
}
setSign();

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();