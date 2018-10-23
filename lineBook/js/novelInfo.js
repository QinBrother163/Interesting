// 提示框元素
var public_dialog = document.getElementById('public_dialog');

// 打赏事件
function award() {
    // 打赏按钮元素
    var btn_award = document.getElementById('btn_award');
    // 打赏关闭按钮元素
    var btn_award_x  = document.getElementById('btn_award_x');
    // 打赏弹框元素
    var awardDiv = document.getElementById('am-modal-container');


    btn_award.onclick = function () {
        setAward();
    };

    function setAward() {

        publiToggleShow(awardDiv,'block');
    }

    btn_award_x.onclick = function () {
        publiToggleShow(awardDiv,'none');
    }
}
award();

// 加入书架按钮事件
function addBook() {
    // 按钮元素
    var btn_addBook = document.getElementById('btn_addBook');

    btn_addBook.onclick = function () {
        setAddBook();
    };

    function setAddBook() {

        switch (btn_addBook.innerText) {
            case '加入书架':
                publiSetTitle(btn_addBook,'移出书架');

                publiSetTitle(document.getElementById('public_dialog_title'),'添加成功');
                setLoading(public_dialog);
                btn_addBook.className = 'btn_no_rel mt30';
                break;
            case '移出书架':
                publiSetTitle(btn_addBook,'加入书架');

                btn_addBook.className = 'btn_no_rel btn_ok_rel mt30';
                break;
            default:
                break;

        }
    }
}
addBook();

// 点击加载提示
function setLoading(node) {
    var loading_jump = node;

    loading_jump.style.display = 'block';

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 1500)
}

// 公共函数 切换显示
function publiToggleShow(node,status) {
    node.style.display = status;
}
// 公共函数 设置标题
function publiSetTitle(node,title) {
    node.innerText = title;
}
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