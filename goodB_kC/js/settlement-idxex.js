/**
 * Created by NameX on 2018/6/15.
 */
!function () {
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
        style_topPage.className = 'style-topPage female';
    } else {
        //男版
        style_topPage.className = 'style-topPage female';
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
    var info_con = top_list.querySelectorAll('.item-con');

    function setSpanList() {
        for (var i = 0; i < span_list.length; i++) {
            span_list[i].onclick = setSpanListClick;
            span_list[i].idx = i;
        }
    }setSpanList();
    function setSpanListClick() {
        for (var i = 0; i < span_list.length; i++) {
            span_list[i].className = '';
            info_con[i].style.display = 'none';
        }

        span_list[this.idx].className = 's_focus';
        info_con[this.idx].style.display = 'block';

        switch (this.idx) {
            case 1:
                span_list_focus.style.left = "5.67rem";
                break;
            default:
                span_list_focus.style.left = "1.4499rem";
                break;
        }
    }
}();