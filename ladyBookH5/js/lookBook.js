var cookie = {
    set: function (key, val, time) {
        var date = new Date();
        var expiresDays = time;
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000);
        document.cookie = key + "=" + val + ";expires=" + date.toGMTString();
    },
    get: function (key) {

        var getCookie = document.cookie.replace(/[ ]/g, "");
        var arrCookie = getCookie.split(";");
        var tips;
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (key == arr[0]) {
                tips = arr[1];
                break;
            }
        }
        return tips;
    },
    delete: function (key) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = key + "=v; expires =" + date.toGMTString();
    }
};
// 全局提示弹框
var msg = document.getElementById('msg');


// 初始化字体
function initFont() {
    var readP = document.querySelector('.readP ');
    var setFont = cookie.get("setFont");

    if (!setFont) {
        cookie.set("setFont", 'st-font3', 3);
        setFont = cookie.get("setFont");
    }
    readP.className = 'readP ' + setFont;
}
initFont();

// 初始化背景
function initBg() {
    var container = document.querySelector('.container');
    var header2_v3 = document.querySelector('.header2_v3');
    var footerbox = document.querySelectorAll('.footerbox')[0];
    var setBg = cookie.get("setBg");

    if (!setBg) {
        cookie.set("setBg", 'st-bg1', 3);
        setBg = cookie.get("setBg");
    }
    container.className = 'container pt0 read_v3 ' + setBg;
    header2_v3.className = 'header2_v3 line ' + setBg;
    footerbox.className = 'footerbox showon ' + setBg;
}
initBg();

// 初始化焦点
function initFocus() {
    var setFont = document.getElementById('setFont');
    var isA = setFont.querySelectorAll('a');
    var setFocus = cookie.get("setFocus");

    if (!setFocus) {
        cookie.set("setFocus", 2, 3);
        setFocus = cookie.get("setFocus");
    }
    isA[setFocus].className = isA[setFocus].className + ' sel'
}
initFocus();


// 设置字体大小
function setFont() {
    var setFont = document.getElementById('setFont');
    var isA = setFont.querySelectorAll('a');

    for (var i = 0; i < isA.length; i++) {
        isA[i].onclick = setClickFont;
        isA[i].idx = i;
    }
    function setClickFont() {
        for (var i = 0; i < isA.length; i++) {
            isA[0].className = 'font-size-big st_font1';
            isA[1].className = 'font-size-small st_font2';
            isA[2].className = 'font-size-big st_font3';
            isA[3].className = 'font-size-small st_font4';
            isA[4].className = 'font-size-small st_font5';
        }
        isA[this.idx].className = isA[this.idx].className + ' sel';
        cookie.set("setFocus", this.idx, 3);
        setReadp(this.idx);
    }

    // 应用字体大小
    function setReadp(idx) {
        var readP = document.querySelector('.readP ');
        var font;

        switch (idx) {
            case 1:
                font = 'st-font2';
                break;
            case 2:
                font = 'st-font3';
                break;
            case 3:
                font = 'st-font4';
                break;
            case 4:
                font = 'st-font5';
                break;
            default:
                font = 'st-font1';
                break;
        }
        readP.className = 'readP ' + font;
        cookie.set("setFont", font, 3);
    }
}
setFont();

// 设置页面背景
function setPageBg() {
    var setBg = document.getElementById('setBg');
    var isA = setBg.querySelectorAll('a');

    for (var i = 0; i < isA.length; i++) {
        isA[i].onclick = setClickBg;
        isA[i].idx = i;
    }

    function setClickBg() {
        var container = document.querySelector('.container');
        var header2_v3 = document.querySelector('.header2_v3');
        var footerbox = document.querySelectorAll('.footerbox')[0];

        var bg;

        switch (this.idx) {
            case 1:
                bg = 'st-bg2';
                break;
            case 2:
                bg = 'st-bg3';
                break;
            case 3:
                bg = 'st-bg4';
                break;
            case 4:
                bg = 'st-bg6';
                break;
            case 5:
                bg = 'st-bg8';
                break;
            default:
                bg = 'st-bg1';
                break;
        }
        cookie.set("setBg", bg, 3);
        container.className = 'container pt0 read_v3 ' + bg;
        header2_v3.className = 'header2_v3 line ' + bg;
        footerbox.className = 'footerbox showon ' + bg;
    }
}
setPageBg();

// 添加书架
function addBookRack() {
    var iconBookshelf = document.getElementById('addBookRack');

    iconBookshelf.onclick = function () {
        publicSetTimeout(msg, '添加书架成功!');
    }
}

// 跳转章节时滚动条返回顶部
function renTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// 上一章
function topPage() {
    var clickbutton = document.querySelectorAll('.clickbutton')[0];

    clickbutton.onclick = function () {
        renTop();
    }
}
topPage();

// 下一章
function downPage() {
    var clickbutton = document.querySelectorAll('.clickbutton')[2];

    clickbutton.onclick = function () {
        renTop();
    }
}
downPage();


// 打开菜单弹框
function openMenu() {
    // 菜单弹框
    var signinbox = document.querySelectorAll('.signinbox')[0];
    // 遮罩层
    var clickpop = signinbox.querySelector('.clickpop');
    // 菜单按钮
    var clickbutton = document.querySelectorAll('.clickbutton')[1];

    // 打开菜单
    clickbutton.onclick = function () {
        publicShowStatus(signinbox, 'block');
    };
    // 关闭菜单
    clickpop.onclick = function () {
        publicShowStatus(signinbox, 'none');
    };
    // 添加书架
    addBookRack();
    // 打赏
    getAward();
}
openMenu();

// 我要打赏
function getAward() {

    var getAward = document.getElementById('getAward');

    getAward.onclick = function () {
        signinbox();
    }
}

// 打赏弹框处理
function signinbox() {
    var signinbox = document.querySelectorAll('.signinbox')[1];
    // 设置默认选中下标
    var is_idx = 2;

    publicShowStatus(signinbox, 'block');

//    初始化焦点下标选中
    function initFocus() {
        var dls = signinbox.querySelectorAll('dl');

        for (var i = 0; i < dls.length; i++) {
            dls[i].className = 'ds_choose';
        }
        dls[is_idx].className = 'ds_choose chooseulthis';
    }

    initFocus();
//    关闭打赏弹框
    var clickpop = signinbox.querySelector('.clickpop');
    clickpop.onclick = function () {
        publicShowStatus(signinbox, 'none');
    };

//    焦点选择
    function setFocus() {
        var dls = signinbox.querySelectorAll('dl');

        for (var i = 0; i < dls.length; i++) {
            dls[i].onclick = getFocus;
            dls[i].idx = i;
        }
        function getFocus() {
            for (var i = 0; i < dls.length; i++) {
                dls[i].className = 'ds_choose';
            }
            dls[this.idx].className = 'ds_choose chooseulthis';
            //    获取选择的下标
            is_idx = this.idx;
        }
    }

    setFocus();

//    打赏里的确认按钮
    var blue_btnn = signinbox.querySelector('.org_btn');

    blue_btnn.onclick = function () {
        publicShowStatus(signinbox, 'none');

        // 有钱时的状态
        publicSetTimeout(msg, '打赏成功!');

        // 没有钱时的状态
        // publicSetTimeout(msg, '余额不足!');
    }
}


// 版权问题
function copyrightIssue() {
    var qrcodeAlert = document.querySelectorAll('.qrcode-alert')[1];
    var readCodeClose = qrcodeAlert.querySelector('.read-code-close');

    publicShowStatus(qrcodeAlert, 'block');
    // 关闭
    readCodeClose.onclick = function () {
        publicShowStatus(qrcodeAlert, 'none');
    }
}
// copyrightIssue();

// 快速关注
function quickAttention() {
    var qrcodeAlert = document.querySelectorAll('.qrcode-alert')[0];
    var readCodeClose = qrcodeAlert.querySelector('.read-code-close');

    publicShowStatus(qrcodeAlert, 'block');
    // 关闭
    readCodeClose.onclick = function () {
        publicShowStatus(qrcodeAlert, 'none');
    }
}
// quickAttention();

// 一次性扣币
function directPay() {
    // 一次性扣币的弹框
    var signinbox2_directPay = document.querySelectorAll('.signinbox2')[2];
    // 一次性扣币弹框的取消按钮
    var w50_No = signinbox2_directPay.querySelectorAll('.w50')[0];
    // 一次性扣币的确认按钮
    var w50_Yes = signinbox2_directPay.querySelectorAll('.w50')[1];

    publicShowStatus(signinbox2_directPay, 'block');

    // 取消
    w50_No.onclick = function () {
        publicShowStatus(signinbox2_directPay, 'none');
    };
    // 确认
    w50_Yes.onclick = function () {
        publicShowStatus(signinbox2_directPay, 'none');
    };
}
// directPay();

// 整书购买提示
function allBookPay() {
    // 整书购买的弹框
    var signinbox2_allBook = document.querySelectorAll('.signinbox2')[1];
    // 整书购买弹框的取消按钮
    var w50_No = signinbox2_allBook.querySelectorAll('.w50')[0];
    // 整书购买弹框的确认按钮
    var w50_Yes = signinbox2_allBook.querySelectorAll('.w50')[1];

    publicShowStatus(signinbox2_allBook, 'block');

    // 取消
    w50_No.onclick = function () {
        publicShowStatus(signinbox2_allBook, 'none');
    };
    // 确认
    w50_Yes.onclick = function () {
        publicShowStatus(signinbox2_allBook, 'none');
    };
}
// allBookPay();

// 首次阅读奖励提示
function firstLookBook() {
    // 签到的弹框
    var signinbox2_sign = document.querySelectorAll('.signinbox2')[0];
    // 签到的弹框的关闭按钮
    var lastp = signinbox2_sign.querySelector('.lastp');

    publicShowStatus(signinbox2_sign, 'block');
    lastp.onclick = function () {
        publicShowStatus(signinbox2_sign, 'none');
    }
}
// firstLookBook();


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

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();