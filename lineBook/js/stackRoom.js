// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('a');
        node.href = '../pages/novelInfo.html';
        node.innerHTML =
            '<div class="card--2qdCV">' +
            '<div>' +
            '<img class="thumb--1NRKD-img" src="https://qcdn.zhangzhongyun.com/covers/15335258617588.jpg?imageView2/0/w/300/q/75" alt="">' +
            '</div>' +
            '<div class="desc--3h_uZ"><span class="title--1taCv">吞噬星空</span>' +
            '<div class="summary--2GOQd">官之途，民为本，为官一任，造福一方！军人出身的柳擎宇，毅然转业进入官场，成为乡镇镇长，然而上任当天却被完全架空，甚至被晾在办公室无人理睬！且看脾气火爆，办事雷厉风行的他，如何凭借着机智头脑和层出不穷的手段，翻手间覆灭种种阴谋，步步高升！几十次微妙的官位升迁，数千场激烈的明争暗斗争，历经波折，踏上权力之巅！柳擎宇一直本着为官一任造福一方的为官原则，时刻都把国家利益和人民利益放在首位，他不惧怕任何困难，坚决真心实意的为老百姓做实事和好事，坚决与腐败分子作斗争，从不妥协！</div>' +
            '<div><span class="tag--3a98C">都市</span><span class="tag--3a98C">官场</span><span class="tag--3a98C">励志</span><span class="tag--3a98C">阴谋</span></div>' +
            '</div>' +
            '</div>';
        $('.am-list-body').append(node);
    }

    if (i >= 10) {
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


// 初始化下标
var i_sex = 0, i_genre = 0, i_status = 0;

// 男生-女生切换
function sex() {
    var wrap = document.querySelectorAll('.prop--1YJ8D')[0];

    var list = wrap.querySelectorAll('.option--1ql67');

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = setSex;
        list[i].idx = i;
    }
    function setSex() {
        for (var i = 0; i < list.length; i++) {
            list[i].className = 'option--1ql67';
        }
        list[this.idx].className = 'option--1ql67 active--2Tm9h';
        i_sex = this.idx;
        getIdx(i_sex, i_genre, i_status);
    }
}
sex();


// 类型切换
function genre() {
    var wrap = document.querySelectorAll('.prop--1YJ8D')[1];

    var list = wrap.querySelectorAll('.option--1ql67');

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = setSex;
        list[i].idx = i;
    }
    function setSex() {
        for (var i = 0; i < list.length; i++) {
            list[i].className = 'option--1ql67';
        }
        list[this.idx].className = 'option--1ql67 active--2Tm9h';
        i_genre = this.idx;
        getIdx(i_sex, i_genre, i_status);
    }
}
genre();


// 类型切换
function setStatus() {
    var wrap = document.querySelectorAll('.prop--1YJ8D')[2];

    var list = wrap.querySelectorAll('.option--1ql67');

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = setSex;
        list[i].idx = i;
    }
    function setSex() {
        for (var i = 0; i < list.length; i++) {
            list[i].className = 'option--1ql67';
        }
        list[this.idx].className = 'option--1ql67 active--2Tm9h';

        i_status = this.idx;

        getIdx(i_sex, i_genre, i_status);
    }
}
setStatus();


// 获取下标
function getIdx(i_sex, i_genre, i_status) {

    console.log('男女：' + i_sex, '类型：' + i_genre, '状态：' + i_status)
}
getIdx(i_sex, i_genre, i_status);


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