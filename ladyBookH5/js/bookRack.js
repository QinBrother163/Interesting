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

        callback: function (i,p) {

            if (!window.status) {
                getData(i);
            }
        }

    });

});


// 点击加载提示
var loading_jump = document.querySelector('.loading_jump');
function setLoading(status) {
    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}

// 设置焦点选择
function setFocus() {
    // 分类
    var type_sort = document.getElementById('type_sort');
    var sortLen = type_sort.querySelectorAll('li');
    // 状态
    var type_status = document.getElementById('type_status');
    var statusLen = type_status.querySelectorAll('li');
    // 类型
    var type_genre = document.getElementById('type_genre');
    var genreLen = type_genre.querySelectorAll('li');

    console.log({
        'sortLen': sortLen,
        'statusLen': statusLen,
        'genreLen': genreLen
    });

    // 类型区
    for (var u = 0; u < genreLen.length; u++) {
        genreLen[u].onclick = genreSort;
        genreLen[u].idx = u;
    }
    function genreSort() {
        setLoading(status);
        for (var j = 0; j < genreLen.length; j++) {
            genreLen[j].className = '';
        }
        genreLen[this.idx].className = 'Cselected';
    }

    // 状态区
    for (var o = 0; o < statusLen.length; o++) {
        statusLen[o].onclick = statusSort;
        statusLen[o].idx = o;
    }
    function statusSort() {
        setLoading(status);
        for (var j = 0; j < statusLen.length; j++) {
            statusLen[j].className = '';
        }
        statusLen[this.idx].className = 'Cselected';
    }

    // 分类区
    for (var j = 0; j < sortLen.length; j++) {
        sortLen[j].onclick = setSort;
        sortLen[j].idx = j;
    }
    function setSort() {
        setLoading(status);
        for (var j = 0; j < sortLen.length; j++) {
            sortLen[j].className = '';
        }
        sortLen[this.idx].className = 'Cselected';
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
