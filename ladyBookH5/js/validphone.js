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
// 下一步按钮
function getPhoneBtn() {
    var commit_btn = document.querySelector('.commit_btn');


    if (commit_btn.innerText == '下一步') {
        commit_btn.onclick = function () {
            setInput();
            getPhoneBtn();
        }
    } else{
        commit_btn.onclick = function () {
            showGoodBox();
        }
    }


}
setTimeout(function () {
    getPhoneBtn();
},50);

// 更改内容
function setInput() {
    var commit_btn = document.querySelector('.commit_btn');
    var input_phone = document.querySelectorAll('.input-phone')[0];

    commit_btn.innerText = '完成';
    input_phone.setAttribute("placeholder", "请输入新的手机号");
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