/**
 * Created by NameX on 2018/6/15.
 */
/**
 * Created by NameX on 2018/6/14.
 */
!function () {
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

}();