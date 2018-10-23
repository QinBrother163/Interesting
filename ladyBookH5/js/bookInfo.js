// 全局提示弹框
var msg = document.getElementById('msg');


// 评论查看全部
function getComment() {

    var catalog_p = document.querySelector('.catalog_p');

    catalog_p.onclick = function () {
        setCommentNode();
    }
}
getComment();

var j = 0;

// 更多--创建评论元素
function setCommentNode() {
    var htmlCommentList = document.getElementById('htmlCommentList');


    for (var i = 0; i < 4; i++) {

        j++;

        var node = document.createElement('li');

        node.className = 'comment catalog_item';
        node.innerHTML =
            '<div class="avatar">' +
            '<img src="http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132" alt="">' +
            '</div>' +
            '<div class="c-container page_pr">' +
            '<div class="c-name flex_box flex_bt pt20">' +
            '<span class="avatar-name">名字' + j + '</span>' +
            '<time>2018-07-30 22:21:26</time>' +
            '</div>' +
            '<div class="c-cont pt67">赠送' +
            '<img src="https://static.youshuge.com/gift_img/flower.png" class="w1r">' +
            '<span class="cl-orange">鲜花</span> 给作者' +
            '</div>' +
            '</div>';
        htmlCommentList.appendChild(node);
    }

}


// 小说介绍查看全部
function getAll() {
    var icon_more = document.querySelector('.icon_more');
    var Detail = document.getElementById('Detail');

    var i = icon_more.className == 'icon_more has_more_detail';

    icon_more.onclick = function () {
        icon_more.className = i ? 'icon_more no_more_detail' : 'icon_more has_more_detail';
        Detail.className = i ? 'Detail c333 fs_28 cancel_clamp  auto_height' : 'Detail c333 fs_28 cancel_clamp';
        getAll();
    }
}
getAll();

// 打赏按钮
function getAward() {
    var statistics_btn = document.querySelector('.statistics_btn');
    var awardBtn = statistics_btn.querySelectorAll('li')[2];

    var award = document.getElementById('award');

    awardBtn.onclick = function () {
        signinbox();
    };
    award.onclick = function () {
        signinbox();
    }
}
getAward();
// 打赏弹框
function signinbox() {
    var signinbox = document.querySelector('.signinbox');
    // 设置默认选中下标
    var is_idx = 2;

    publicShowStatus(signinbox, 'block');

//    初始化焦点下标选中
    function initFocus() {
        var dls = signinbox.querySelectorAll('dl');

        for (var i = 0; i < dls.length; i++) {
            dls[i].className = 'ds_choose';
        }
        dls[is_idx].className = 'ds_choose chooseulthis';
    }

    initFocus();
//    关闭打赏弹框
    var clickpop = document.querySelector('.clickpop');
    clickpop.onclick = function () {
        publicShowStatus(signinbox, 'none');
    };

//    焦点选择
    function setFocus() {
        var dls = signinbox.querySelectorAll('dl');

        for (var i = 0; i < dls.length; i++) {
            dls[i].onclick = getFocus;
            dls[i].idx = i;
        }
        function getFocus() {
            for (var i = 0; i < dls.length; i++) {
                dls[i].className = 'ds_choose';
            }
            dls[this.idx].className = 'ds_choose chooseulthis';
            //    获取选择的下标
            is_idx = this.idx;
        }
    }

    setFocus();

//    打赏里的确认按钮
    var blue_btnn = signinbox.querySelector('.blue_btnn');

    blue_btnn.onclick = function () {
        publicShowStatus(signinbox, 'none');

        // 有钱时的状态
        publicSetTimeout(msg, 'none', '打赏成功!');
        addNode(is_idx);

        // 没有钱时的状态
        // publicSetTimeout(msg, 'none', '余额不足!');
    }
}

// 打赏成功后添加元素
function addNode(is_idx) {
    var node = document.createElement('li');
    node.className = 'comment catalog_item';

    var htmlCommentList = document.getElementById('htmlCommentList');

    var img, title;

    // 根据下标输出内容
    switch (is_idx) {
        case 1:
            img = '../images/award/cake.png';
            title = '蛋糕';
            break;
        case 2:
            img = '../images/award/perfume.png';
            title = '香水';
            break;
        case 3:
            img = '../images/award/ring.png';
            title = '钻戒';
            break;
        case 4:
            img = '../images/award/bluelover.png';
            title = '蓝色妖姬';
            break;
        case 5:
            img = '../images/award/yacht.png';
            title = '游艇';
            break;
        default:
            img = '../images/award/flower.png';
            title = '鲜花';
            break;
    }

    node.innerHTML =
        '<div class="avatar">' +
        '<img src="http://thirdwx.qlogo.cn/mmopen/KGa3ZInVRYlds6xp48N1CDjEsicDsGESjvMXqzR7xwAeHz8KW1Uqpy4EfgiaRAdh3oxeb3Z7kPnFqZQ3dh2icsGGxQGgFdBKwjn/132" >' +
        '</div>' +
        '<div class="c-container page_pr">' +
        '<div class="c-name flex_box flex_bt pt20">' +
        '<span class="avatar-name">9999</span>' +
        '<time>2018-07-30 22:21:26</time>' +
        '</div>' +
        '<div class="c-cont pt67">赠送 &nbsp;' +
        '<img src="' + img + '" class="w1r">' +
        '<span class="cl-orange"> &nbsp;' + title + '</span> 给作者' +
        '</div>' +
        '</div>';

    htmlCommentList.prepend(node);
}

// 添加书架 
function getAdd() {
    var statistics_btn = document.querySelector('.statistics_btn');
    var addBtn = statistics_btn.querySelectorAll('li')[0];

    addBtn.onclick = function () {

        if (addBtn.innerText == '添加书架') {
            addBtn.innerText = '已添加书架';
            publicSetTimeout(msg, 'none', '已添加书架');
        }
    }
}
getAdd();

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
// Public 函数 自动隐藏提示弹框
function publicSetTimeout(node, status, title) {
    node.innerText = title;
    publicShowStatus(node, 'block');
    setTimeout(function () {
        publicShowStatus(node, status);
    }, 1500);
}