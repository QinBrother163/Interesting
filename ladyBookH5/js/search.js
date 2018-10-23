// 精彩推荐 数据请求
function getData_recommend(i) {

    for (var j = 0; j < 10; j++) {

        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="bookInfo.html"  class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/vE5y3kfDdhBSQRA1HyfAdizn0Jw3KeTVF0V8tXia.jpeg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">仙界红包群' + i + '</div>' +
            '<div class="Detail">这是一个凡人励志踏天破地的故事，由一个神奇的红包群开创了一条修仙之路，那百慕大三角的背后究竟蕴藏着什么？魔界黄沙大漠的背后又是如何？难道成就仙魔境，便是修炼的终点？长生便是大道的永恒？</div>' +
            '<div class="info">' +
            '<div><span class="c_green bdc_green book_status_border">已完结</span></div>' +
            '<div class="item-orientation">' +
            '<span class="bdc_grey book_status_border mr1">124万字</span>' +
            '<span class="book_status_border bdc_purple cl-purple">都市</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.cont_li').append(node);
    }


    if (i >= 5) {
        window.is_r = true;
        $('#recommend').html('加载完毕!')
    }

}


// 搜索内容 数据请求
function getData_con(i) {

    for (var j = 0; j < 5; j++) {

        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="bookInfo.html" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/5ae1a012212de.jpg" alt="" class=" lp_li_imgWrapimg">' +
            '<div class="title_r">' +
            '<div class="lp_li_name">混沌主宰' + i + '</div>' +
            '<div class="Detail"><p>少年不负凌云志，敢吞天地日月星。玉宇乾坤无人识，吾为混沌大主宰！人族少年自白阳城而出，修混沌天道诀，与星空万族争辉，横压诸天万界，霸绝宇宙寰宇，铸就混沌主宰之路！</p></div>' +
            '<div class="info">' +
            '<div>' +
            '<span class="c_org bdc_org book_status_border">连载中</span> ' +
            ' <span class="book_status_border bdc_purple cl-purple ml3">玄幻</span>' +
            '</div>' +
            '<div class="item-orientation"><em class="click_num">311,870</em></div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.shearch_list').append(node);

    }




    if (i >= 10) {
        window.is_c = true;
        $('#con').html('加载完毕!')
    }

}


// 滚动加载
$(document).ready(function () {

    $('.cont_li').endlessScroll({

        fireDelay: 0,

        callback: function (i, p) {

            if (!window.is_r) {
                getData_recommend(i);
            }
        }
    });

    $('.shearch_list').endlessScroll({

        fireDelay: 0,

        callback: function (i, p) {

            if (!window.is_c) {
                getData_con(i);
            }
        }
    });
});


// 获取input的内容
function querySearchVal() {
    var secrch_box = document.querySelector('.secrch_box');

//    内容
    alert('收索的内容为: ' + secrch_box.value);
    toggleShowBox();
}
// 收索时隐藏精彩推荐 -- 显示收索内容
function toggleShowBox() {
    // 索搜内容
    var boxList_s = document.querySelectorAll('.boxList')[0];
    // 精彩推荐
    var boxList_j = document.querySelectorAll('.boxList')[1];

    publicShowStatus(boxList_j, 'none');
    publicShowStatus(boxList_s, 'block');
}
// 手机收索
$('.secrch_box').bind('search', function () {
    querySearchVal();
});
// 按钮收索
document.querySelector('.search_span').onclick = function () {
    querySearchVal();
};
// 换一换
function toggleChange() {
    var change = document.getElementById('change');

    var em = change.querySelector('em');

    change.onclick = function () {
        em.className = 'refreshing';
        setTimeout(function () {
            em.className = '';
        }, 1500)
    }
}

toggleChange();

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