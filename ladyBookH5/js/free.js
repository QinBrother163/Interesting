



// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="javascript:;" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/8XiQqreWJJVXakxjd42M3CsHbLa37STrCFzWwSEq.jpeg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">都市顶级高手' + i + '</div>' +
            '<div class="Detail">' +
            '<p>他受伤回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。和未婚妻闺蜜暧昧，和主妇谈人生，冒充白领丽人男朋友，扮猪吃老虎。各路高手蜂拥而来，本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！且看一代杀神如何纵横都市，泡妞，破除阴谋，成就无上威名，美女全收，走上人生巅峰！</p>' +
            '</div>' +
            '<div class="info">' +
            '<div><span class="c_green bdc_green book_status_border">已完结</span></div>' +
            '<div>' +
            '<span class="bdc_grey book_status_border mr1">838万字</span>' +
            '<span class="book_status_border bdc_purple cl-purple">都市</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.stacks_box').append(node);
    }

    if (i >= 10) {
        window.status = true;
        $('.load_more').html('加载完毕!')
    }

}


// 滚动加载
$(document).ready(function () {

    $(document).endlessScroll({
        fireDelay: 0,
        callback: function (i, p) {

            if (!window.status) {
                getData(i);
            }
        }
    });
});

// 倒计时
var timer;
function countDown(num) {

    var unixtimestamp = new Date(num * 1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    var time_target_str = year + "/" + month.substring(month.length - 2, month.length) + "/" + date.substring(date.length - 2, date.length)
        + " " + hour.substring(hour.length - 2, hour.length) + ":"
        + minute.substring(minute.length - 2, minute.length) + ":"
        + second.substring(second.length - 2, second.length);

    var time_now = new Date().getTime();
    var time_target = Date.parse(time_target_str);
    var time_cut = time_target - time_now;

    var days = Math.floor(time_cut / 1000 / 60 / 60 / 24);
    var hours = Math.floor(time_cut / 1000 / 60 / 60 % 24);
    var minutes = Math.floor(time_cut / 1000 / 60 % 60);
    var seconds = Math.floor(time_cut / 1000 % 60);
    days = checkTime(days);
    hours = checkTime(hours);
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    if (time_cut >= 0) {
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    } else {
        window.clearInterval(timer);
        document.getElementById("day").innerHTML = '00';
        document.getElementById("hour").innerHTML = '00';
        document.getElementById("minute").innerHTML = '00';
        document.getElementById("second").innerHTML = '00';
    }
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


window.onload = function () {
    // 设置页面----》》》》》》》》》》》》》
    !function () {
        var a = "@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}ins,a{text-decoration:none}",
            b = document.createElement("style");
        if (document.getElementsByTagName("head")[0].appendChild(b), b.styleSheet) b.styleSheet.disabled || (b.styleSheet.cssText = a); else try {
            b.innerHTML = a
        } catch (c) {
            b.innerText = a
        }
    }();
    !function (a, b) {
        function c() {
            var b = f.getBoundingClientRect().width;
            b / i > 540 && (b = 540 * i);
            var c = b / 10;
            f.style.fontSize = c + "px", k.rem = a.rem = c
        }

        var d, e = a.document, f = e.documentElement, g = e.querySelector('meta[name="viewport"]'),
            h = e.querySelector('meta[name="flexible"]'), i = 0, j = 0, k = b.flexible || (b.flexible = {});
        if (g) {
            console.warn("将根据已有的meta标签来设置缩放比例");
            var l = g.getAttribute("content").match(/initial\-scale=([\d\.]+)/);
            l && (j = parseFloat(l[1]), i = parseInt(1 / j))
        } else if (h) {
            var m = h.getAttribute("content");
            if (m) {
                var n = m.match(/initial\-dpr=([\d\.]+)/), o = m.match(/maximum\-dpr=([\d\.]+)/);
                n && (i = parseFloat(n[1]), j = parseFloat((1 / i).toFixed(2))), o && (i = parseFloat(o[1]), j = parseFloat((1 / i).toFixed(2)))
            }
        }
        if (!i && !j) {
            var p = (a.navigator.appVersion.match(/android/gi), a.navigator.appVersion.match(/iphone/gi)),
                q = a.devicePixelRatio;
            i = p ? q >= 3 && (!i || i >= 3) ? 3 : q >= 2 && (!i || i >= 2) ? 2 : 1 : 1, j = 1 / i
        }
        if (f.setAttribute("data-dpr", i), !g)if (g = e.createElement("meta"), g.setAttribute("name", "viewport"), g.setAttribute("content", "initial-scale=" + j + ", maximum-scale=" + j + ", minimum-scale=" + j + ", user-scalable=no"), f.firstElementChild) f.firstElementChild.appendChild(g); else {
            var r = e.createElement("div");
            r.appendChild(g), e.write(r.innerHTML)
        }
        a.addEventListener("resize", function () {
            clearTimeout(d), d = setTimeout(c, 300)
        }, !1), a.addEventListener("pageshow", function (a) {
            a.persisted && (clearTimeout(d), d = setTimeout(c, 300))
        }, !1), "complete" === e.readyState ? e.body.style.fontSize = 12 * i + "px" : e.addEventListener("DOMContentLoaded", function () {
                e.body.style.fontSize = 12 * i + "px"
            }, !1), c(), k.dpr = a.dpr = i, k.refreshRem = c, k.rem2px = function (a) {
            var b = parseFloat(a) * this.rem;
            return "string" == typeof a && a.match(/rem$/) && (b += "px"), b
        }, k.px2rem = function (a) {
            var b = parseFloat(a) / this.rem;
            return "string" == typeof a && a.match(/px$/) && (b += "rem"), b
        }
    }(window, window.lib || (window.lib = {}));
    document.getElementById('rootApp').style.display = 'block';
    // 设置页面----《《《《《《《《《《《《《


    timer = setInterval("countDown(1538099428)", 1000);
};



// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();