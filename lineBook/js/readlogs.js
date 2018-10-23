// 管理按钮
function disposeBtn() {
    var btn = document.querySelector('.manage--i9RiU');

    btn.onclick = function () {
        publicSetTitle(btn, '完成', 'finish--xSesB');
        btn = document.querySelector('.finish--xSesB');

        // // 显示焦点
        toggleFocus(true);
        // // 全选
        toggleFocusStatus();
        // 单个焦点切换
        toggleItemFocus();
        // // 删除
        delBtn();
        finishBtn();
    }
}
disposeBtn();

// 完成按钮
function finishBtn() {
    var btn = document.querySelector('.finish--xSesB');

    btn.onclick = function () {
        publicSetTitle(btn, '管理', 'manage--i9RiU');
        btn = document.querySelector('.manage--i9RiU');

        // // 隐藏焦点
        toggleFocus(false);
        // // 恢复初始化
        initStatus();
        disposeBtn();
    }
}


// 删除 btn

function delBtn() {
    var delBtn = document.querySelector('.right--2prkY');
    delBtn.onclick = function () {
        getDelList();
        getDelAll();
    };


    // 检测元素是否全部删除完毕
    function getDelAll() {
        var item = document.querySelectorAll('.am-list-item');

        var nothing = document.querySelector('.nothing--1UAVR');

        var gallery = document.querySelector('.am-list-body');

        if(item.length == 0){
            publicShowStatus(gallery, 'none');
            publicShowStatus(nothing, 'flex');
        }
    }
}

// get del list
function getDelList() {
    var listWrap = document.querySelector('.am-list-body');

    var list = $(".checkbox--3aNVi.checked--21Rcs.checked--focus").parent().parent().parent().parent().parent().parent();
    console.log(list)
    for (var i = 0; i < list.length; i++) {
        listWrap.removeChild(list[i]);
    }
}

// 设置全选-全不选
function toggleFocusStatus() {
    var barWrap = document.querySelector('.bar--ZSfBc');

    var node = barWrap.querySelector('.checkbox--3aNVi');
    var btn = barWrap.querySelector('.left--3Bhzi');

    var listWrap = document.querySelector('.am-list-body');
    var list = listWrap.querySelectorAll('.checkbox--3aNVi');

    var x = node.className == 'checkbox--3aNVi checkbox--SZX1V';

    btn.onclick = function () {
        toggleListFocus(x);
        node.className = x ? 'checkbox--3aNVi checkbox--SZX1V checked--21Rcs' : 'checkbox--3aNVi checkbox--SZX1V';
        toggleFocusStatus();
    };

    // 列表焦点切换
    function toggleListFocus(toggle) {

        for (var i = 0; i < list.length; i++) {
            list[i].className = toggle ? 'checkbox--3aNVi checked--21Rcs checked--focus' : 'checkbox--3aNVi';
        }
    }
}


// 列表单个焦点切换
function toggleItemFocus() {
    var list = document.querySelectorAll('.progress-focus');


    var listWrap = document.querySelector('.am-list-body');
    var item = listWrap.querySelectorAll('.checkbox--3aNVi');

    for (var i = 0; i < list.length; i++) {
        list[i].onclick = getFocus;
        list[i].idx = i;
    }
    function getFocus() {
        var x = item[this.idx].className == 'checkbox--3aNVi';

        item[this.idx].className = x ? 'checkbox--3aNVi checked--21Rcs checked--focus' : 'checkbox--3aNVi';
    }
}



// 恢复初始化
function initStatus() {

    var listWrap = document.querySelector('.am-list-body');
    var list = listWrap.querySelectorAll('.checkbox--3aNVi');

    var barWrap = document.querySelector('.bar--ZSfBc');

    var nodeWrap = document.querySelector('.bar--ZSfBc');
    var node = nodeWrap.querySelector('.checkbox--3aNVi');

    node.className = 'checkbox--3aNVi checkbox--SZX1V';

    for (var i = 0; i < list.length; i++) {
        list[i].className = 'checkbox--3aNVi';
    }

}




// 设置切换
function toggleFocus(status) {
    var list = document.querySelectorAll('.progress-focus');

    var progress_list = document.querySelectorAll('.progress-list');
    // toggle show list 切换显示焦点
    function toggleShow(status) {
        if (status) {
            for (var i = 0; i < list.length; i++) {
                progress_list[i].style.display = 'none';
                list[i].style.display = 'block';
            }
        } else {
            for (var j = 0; j < list.length; j++) {
                list[j].style.display = 'none';
                progress_list[j].style.display = 'block';
            }
        }
    }

    toggleShow(status);


    // 底部全选框切换
    function toggleBar(status) {

        var del_bar = document.querySelector('.bar--ZSfBc');

        var publicNavBar = document.getElementById('publicNavBar');

        if (status) {
            publicShowStatus(publicNavBar, 'none');
            publicShowStatus(del_bar, 'flex');
        } else {
            publicShowStatus(del_bar, 'none');
            publicShowStatus(publicNavBar, 'block');
        }
    }

    toggleBar(status);
}



// Public 函数 设置 标题，class
function publicSetTitle(node, title, clss_name) {
    node.innerText = title;
    node.className = clss_name;
}
// Public 函数 切换 显示
function publicShowStatus(node, status) {
    node.style.display = status;
}