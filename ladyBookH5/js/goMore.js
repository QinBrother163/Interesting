

// 请求数据
function getData(i) {
    for (var j = 0; j < 5; j++) {
        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="javascript:;" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/8ugS5UUDSLAEM271dqkXjKHu2EOKtIgcKbYJAJfa.jpeg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">总裁的亿万小妻子' + i + '</div>' +
            '<div class="Detail">他受过严重的心理创伤，情感麻木，对女人只有厌恶没有爱慕。她优雅聪慧，为了不重蹈他前妻的覆辙，婚后生活，步步为营。面对他的无视疏离，她从不曾退缩放弃，坚信爱是化解恨最好的方式。当冷酷外衣终被她层层拨开，他却残忍的发现，自己不过是她复仇的工具。爱已随风飘，情已被海葬，是谁在耳边说，心是可以收回的……</div>' +
            '<div class="info">' +
            '<div>' +
            '<span class="c_org bdc_org book_status_border">连载中</span>' +
            '<span class="book_status_border bdc_purple cl-purple ml3">豪门</span>' +
            '</div>' +
            '<div class="item-orientation"><em class="click_num">374,506</em></div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.box_ul_p').append(node);
    }

    if (i >= 10) {
        window.status = true;
        $('.catalog_item').html('加载完毕!')
    }

}


// 滚动加载
$(document).ready(function () {

    $(document).endlessScroll({

        fireDelay: 0,

        callback: function (i,p) {

            if (!window.status) {
                getData(i);
            }
        }

    });

});

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();

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

    var page_id = getQueryVariable("id");
    var page_title;

    switch (page_id) {
        case '1':
            console.log('主编精选');
            page_title = '主编精选';
            break;
        case '2':
            console.log('新书精选');
            page_title = '新书精选';
            break;
        case '3':
            console.log('玄幻修仙');
            page_title = '玄幻修仙';
            break;
        case '4':
            console.log('校园异能');
            page_title = '校园异能';
            break;
        case '5':
            console.log('都市情感');
            page_title = '都市情感';
            break;
        case '6':
            console.log('魔鬼灵异');
            page_title = '魔鬼灵异';
            break;
        default:
            break;
    }
    document.getElementById('topTitle').innerText = page_title;
}
setPageTitle();
