// 榜单切换
function setRanking() {
    var rankingNav = document.querySelector('.rankingNav');
    var itemSpan = rankingNav.querySelectorAll('span');
    var ranking_box = document.querySelectorAll('.ranking_box');

    for (var i = 0; i < itemSpan.length; i++) {
        itemSpan[i].onclick = setFocusNav;
        itemSpan[i].idx = i;
    }
    function setFocusNav() {
        for (var i = 0; i < itemSpan.length; i++) {
            itemSpan[i].className = '';
            ranking_box[i].style.display = 'none';
        }
        this.className = 'focus';
        ranking_box[this.idx].style.display = 'block';

        setLoading('block');


        switch (this.idx) {
            case 1:
                console.log('畅销榜');
                break;
            case 2:
                console.log('打赏榜');
                break;
            default:
                console.log('点击榜');
                break;
        }

    }
}
setRanking();


$(document).ready(function () {
});


// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {

        var node = document.createElement('li');
        node.className = 'sec_li';
        node.innerHTML =
            '<a href="bookInfo.html" class="lp_li_a">' +
            '<img src="https://static.youshuge.com/book_img/8XiQqreWJJVXakxjd42M3CsHbLa37STrCFzWwSEq.jpeg" alt="" class=" lp_li_imgWrapimg"> <span class="flage_rk2">' + i + '</span>' +
            '<div class="title_r">' +
            '<div class="lp_li_name">都市顶级高手</div>' +
            '<div class="Detail">他受伤回归都市，与冰山总裁未婚妻同住一个屋檐下，拉手，不准，接吻，不许，那就一起来吧。和未婚妻闺蜜暧昧，和主妇谈人生，冒充白领丽人男朋友，扮猪吃老虎。各路高手蜂拥而来，本想过平凡日子的叶轩很无奈，为亲人，为爱人，为兄弟，狂战天下，无所畏惧！且看一代杀神如何纵横都市，泡妞，破除阴谋，成就无上威名，美女全收，走上人生巅峰！</div>' +
            '<div class="info">' +
            '<div>' +
            '<span class="c_green bdc_green book_status_border">已完结</span>' +
            '<span class="book_status_border bdc_purple cl-purple ml3">都市</span>' +
            '</div>' +
            '<div class="item-orientation"><em class="click_num">422,517</em></div>' +
            '</div>' +
            '</div>' +
            '</a>';
        $('.ranking_box').append(node);

    }
    if (i >= 20) {
        window.status = true;
        $('.load_more').html('加载完毕!')
    }

}


// 点击加载提示
function setLoading(status) {
    var loading_jump = document.querySelector('.loading_jump');

    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}

// 返回按钮
!function go_return() {
    var back = document.querySelector('.back');

    back.onclick = function () {
        window.history.go(-1);
    };
}();
