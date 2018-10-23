// 请求数据
function getData(i) {

    for (var j = 0; j < 5; j++) {
        var node = document.createElement('a');
        node.href = '../pages/novelInfo.html';
        node.innerHTML =
            '<div class="card--2qdCV">' +
            '<div><img class="thumb--1NRKD-img" src="https://qcdn.zhangzhongyun.com/covers/15330045647143.jpg?imageView2/0/w/300/q/75" alt=""></div>' +
            '<div class="desc--3h_uZ"><span class="title--1taCv">他是我所有余生' + i + '</span>' +
            '<div class="summary--2GOQd">从喜欢上沈宸安的那一刻起，唐佳怡就知道，世界上没有两全其美的事情。若是过程和结果只能选其一，她选结果。至此，千难万险，她也不会轻易放弃他。</div>' +
            '<div><span class="tag--3a98C">都市</span><span class="tag--3a98C">言情</span><span class="tag--3a98C">暧昧</span><span class="tag--3a98C">虐恋</span></div>' +
            '</div>' +
            '</div>';
        $('.am-list-body').append(node);
    }

    if (i >= 7) {
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



// 获取input的内容
function querySearchVal() {
    var secrch_box = document.querySelector('.input--3izbj');

//    内容
    alert('收索的内容为: ' + secrch_box.value);
    toggleShowBox();
}
// 收索时隐藏精彩推荐 -- 显示收索内容
function toggleShowBox() {
    // 索搜内容
    var boxList_s = document.querySelector('.am-list');
    // 精彩推荐
    var boxList_j = document.querySelector('.inner--3Km5R');

    publicShowStatus(boxList_j, 'none');
    publicShowStatus(boxList_s, 'block');
}
// 手机收索
$('.input--3izbj').bind('search', function () {
    querySearchVal();
});





// 取消
function cancelBtn() {
    var cancelBtn = document.querySelector('.cancel--3UUgz');

    cancelBtn.onclick = function () {
        window.location.href = '../index.html';
    }
}
cancelBtn();

// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}