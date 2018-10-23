

// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('a');
        node.href = '../pages/novelInfo.html';
        node.innerHTML =
            '<div class="card--2qdCV">' +
            '<div><img class="thumb--1NRKD-img" src="https://qcdn.zhangzhongyun.com/covers/153289261648093700.jpg?imageView2/0/w/300/q/75" alt=""></div>' +
            '<div class="desc--3h_uZ"><span class="title--1taCv">许你一生一世缘' + i + '</span>' +
            '<div class="summary--2GOQd">她是名门千金，本应过着锦衣玉食，万众瞩目的生活。却不料遭到闺蜜和男友的双双背叛，意外失身。与陌生男子一夜纠缠，她伤心落魄，逃离南希市，却发现自己已经怀孕。五年后，被父亲设计代替双胞胎妹妹出嫁。外界传言，盛世集团的总裁，神秘诡异，疾病缠身。婚后，苏北才知，那个男人，霸道腹黑，英俊迷人，让她步步深陷。苏北：“路南，孩子是我的！”路南挑了挑眉，面不改色，心不跳的看着她。“嗯，孩子是你的，你是我的，所以，你们都是我的！”苏北怒。“路南，你怎么能这么无耻！”路南：“北北，你难道不知道，对你，我从来不介意更无耻一点么……”</div>' +
            '<div><span class="tag--3a98C">都市</span><span class="tag--3a98C">言情</span><span class="tag--3a98C">暧昧</span><span class="tag--3a98C">总裁</span></div>' +
            '</div>' +
            '</div>';
        $('.am-list-body').append(node);
    }

    if (i >= 6) {
        window.status = true;
        $('.spinner--25M9T').html('加载完毕!')
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




// 获取路径参数判断入口
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}
// 设置页面标题
function setPageTitle() {

    var page_id = getQueryVariable("pageNum");
    var page_title;

    switch (page_id) {
        case '1':
            console.log('本周热门');
            page_title = '本周热门';
            break;
        case '2':
            console.log('主编力荐');
            page_title = '主编力荐';
            break;
        case '3':
            console.log('女生精选');
            page_title = '女生精选';
            break;
        case '4':
            console.log('男生精选');
            page_title = '男生精选';
            break;
        case '5':
            console.log('都市佣兵');
            page_title = '都市佣兵';
            break;
        case '6':
            console.log('悬疑灵异');
            page_title = '悬疑灵异';
            break;
        case '7':
            console.log('婚恋言情');
            page_title = '婚恋言情';
            break;
        case '8':
            console.log('豪门世家');
            page_title = '豪门世家';
            break;
        default:
            console.log('主编推荐');
            page_title = '主编推荐';
            break;
    }
    document.querySelector('.am-navbar-title').innerText = page_title;
}
setPageTitle();




// 公共函数 返回按钮 -- 书城首页
!function go_return() {
    var back = document.querySelector('.am-navbar-left');
    var am_navbar_right = document.querySelector('.am-navbar-right');


    am_navbar_right.onclick = function () {
        window.location.href = '../index.html';
    };

    back.onclick = function () {
        window.history.go(-1);
    };
}();