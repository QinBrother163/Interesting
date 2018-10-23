/**
 * Created by NameX on 2018/6/15.
 */
//待打款
var await = document.getElementById('await');
//未结算
var noClear = document.getElementById('noClear');

var num = 0;
//没有书籍的div
var list_item_no = document.querySelector('.list-item-no');
//全选 取消按钮
var cancel_btn = document.querySelector('.cancel-btn');
//设置删除选择


// set 更新 取消按钮的显示状态
function setSnowStatus() {
    if (num > 0) {
        cancel_btn.style.display = 'block';
    } else {
        cancel_btn.style.display = 'none';
    }
}
function setFocuo(node) {
    //图片选中
    var focus = node.querySelectorAll('.focus_img');
//单个取消打款
    var click_no = node.querySelectorAll('.click-no');

    var delNode = node.querySelectorAll('.list-item');

//    设置单个取消按钮
    function setClick_no() {
        for (var i = 0; i < click_no.length; i++) {
            click_no[i].onclick = clickClick_no;
            click_no[i].idx = i;
        }
    }

    setClick_no();

    function clickClick_no() {
        node.removeChild(delNode[this.idx]);
        var list_item = node.querySelectorAll('.list-item');
        if (list_item.length == 0) {
            list_item_no.style.display = 'block';
        }
    }

//    设置点击---选中
    function setFocus() {
        for (var i = 0; i < focus.length; i++) {
            focus[i].onclick = clickFocus;
            focus[i].idx = i;
        }
    }

    setFocus();
    function clickFocus() {
        var open = focus[this.idx].className == 'focus_img focus_no';
        focus[this.idx].className = open ? 'focus_img focus_ok' : 'focus_img focus_no';


        if (focus[this.idx].className == 'focus_img focus_no') {
            num--
        } else {
            num++
        }
        setSnowStatus();
    }

//    全选的取消按钮
    cancel_btn.onclick = function () {
        var delNode = $(".focus_ok").parent().parent();
        for (var i = 0; i < delNode.length; i++) {
            node.removeChild(delNode[i]);
        }
        var list_item = node.querySelectorAll('.list-item');
        if (list_item.length == 0) {
            cancel_btn.style.display = 'none';
            list_item_no.style.display = 'block';
        }
        num = num - num;
        setSnowStatus();
    };

}


setFocuo(await);

// !function () {
//顶部菜单
var root = document.getElementById('root');
var nav_left = root.querySelector('.nav-left');
var menu_btn = root.querySelector('.menu-btn');
var openMenu = root.querySelector('.openMenu');

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

var sex_type = cookie.get("sex_type");
var style_topPage = document.querySelector('.style-topPage');
if (sex_type == 3) {
    //女版
    // style_topPage.className = 'style-topPage female';
} else {
    //男版
    // style_topPage.className = 'style-topPage male';
}

nav_left.onclick = function () {
    window.history.go(-1);
};

menu_btn.onclick = function () {
    var open = menu_btn.className == 'menu-btn';
    menu_btn.className = open ? 'menu-btn open' : 'menu-btn';

    var i = openMenu.className == 'menu-modal-bg openMenu noMenu';
    openMenu.className = i ? 'menu-modal-bg openMenu' : 'menu-modal-bg openMenu noMenu';
};


//    顶部菜单 结束-----------------------------------------<<<<<
var top_list = document.querySelector('.top-list');
var info_title = top_list.querySelector('.info-title');
var span_list = info_title.querySelectorAll('span');
var span_list_focus = info_title.querySelector('.focus');
//三个内容div
var info_con = top_list.querySelectorAll('.info-con');

function setSpanList() {
    for (var i = 0; i < span_list.length; i++) {
        span_list[i].onclick = setSpanListClick;
        span_list[i].idx = i;
    }
}

setSpanList();
function setSpanListClick() {
    for (var i = 0; i < span_list.length; i++) {
        span_list[i].className = '';
        info_con[i].style.display = 'none';
    }

    span_list[this.idx].className = 's_focus';
    info_con[this.idx].style.display = 'block';

    switch (this.idx) {
        case 1:
            setFocuo(await);
            setInitFocus();
            cancel_btn.innerText = '取消打款';
            span_list_focus.style.left = "3.999rem";
            break;
        case 2:
            span_list_focus.style.left = "6.837rem";
            break;
        default:
            setFocuo(noClear);
            setInitFocus();
            cancel_btn.innerText = '取消结算';
            span_list_focus.style.left = "1.13rem";
            break;
    }
}
// }();
function setInitFocus() {
    var focus = document.querySelectorAll('.focus_img');

    num = 0;

    for (var i = 0; i < focus.length; i++) {
        focus[i].className = 'focus_img focus_no';
    }

    setSnowStatus();
}