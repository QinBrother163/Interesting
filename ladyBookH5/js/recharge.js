// 全局下标
var index = 1;

// 确认按钮
function okBtn() {
    var org_btn = document.querySelector('.org_btn');

    org_btn.onclick = function () {
        
        console.log('焦点：' + index)
        cssResult();
    }
}
okBtn();

// 按钮效果
function cssResult() {
    var org_btn = document.querySelector('.org_btn');

    org_btn.style.opacity = '.5';

    setTimeout(function () {
        org_btn.style.opacity = '1';
    },50)
}

// 设置焦点选择
function setFocus() {
    var flex_col = document.querySelectorAll('.flex_col');

    for (var i = 0; i < flex_col.length; i++) {
        flex_col[i].onclick = setFlex;
        flex_col[i].idx = i;
    }
    function setFlex() {
        for (var i = 0; i < flex_col.length; i++) {
            flex_col[i].className = 'flex_col';
        }
        index = this.idx;
        switch (this.idx) {
            case 0:
            case 1:
            case 2:
            case 3:
                flex_col[this.idx].className = 'flex_col choosethis';
                break;
            default:
                flex_col[this.idx].className = 'flex_col  choosethis thisdl';
                break;
        }

    }
}
setFocus();


// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();