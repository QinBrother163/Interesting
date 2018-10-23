// 点击加载更多
function getAllData() {
    // 书架
    var mt0_sj = document.querySelectorAll('.mt0')[0];
    var load_more_sj = mt0_sj.querySelector('.load_more');

    var j = 0, q = 0;

    load_more_sj.onclick = function () {
        getNode_sj();
    };
    function getNode_sj() {
        j++;
        var bookshelf_list = document.querySelector('.bookshelf_list');
        var node = document.createElement('li');

        node.className = 'sec_min_3 del0';
        node.innerHTML =
            '<a href="bookInfo.html">' +
            '<img src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="" class="lpimg">' +
            '<p class="lp_li_bookname">风云兵王' + j + '</p>' +
            '</a>' +
            '<p class="btn_collect">删除本书</p>';

        bookshelf_list.appendChild(node);
        delNode();
    }


    // 阅读
    var mt0_yd = document.querySelectorAll('.mt0')[1];
    var load_more_yd = mt0_yd.querySelector('.load_more');

    load_more_yd.onclick = function () {
        getNode_yd();
    };
    function getNode_yd() {
        q++;
        var html = '';

        html += '<li data-v-6775d05a="" class="sec_li p p_re lastread">';
        html += '<a data-v-6775d05a="" href="bookInfo.html" class="lpli_a iblock">';
        html += '<p data-v-6775d05a="" class="lp_li_name overflow booksname">风云兵王'+q+'</p>';
        html += '</a>';
        html += '<a data-v-6775d05a="" href="lookBook.html" class="lpli_a iblock">';
        html += '<p data-v-6775d05a="" class="lp_li_name overflow cchapename">上次读到：第001章 劫机（上）</p>';
        html += '</a>';
        html += '<p data-v-6775d05a="" class="deletethis">删除</p>';
        html += '</li>';

        $('#cont_ul_yd').append(html);

        delNode();
    }
}
getAllData();

// tab切换
function setTab() {
    // 标题
    var tab_box = document.querySelector('.tab_box');
    var tab_boxList = tab_box.querySelectorAll('li');
    // 内容
    var mt0List = document.querySelectorAll('.mt0');


    for (var i = 0; i < tab_boxList.length; i++) {
        tab_boxList[i].onclick = setTabShow;
        tab_boxList[i].idx = i;
    }
    function setTabShow() {
        for (var i = 0; i < tab_boxList.length; i++) {
            tab_boxList[i].className = '';
            mt0List[i].style.display = 'none';
        }
        tab_boxList[this.idx].className = 'clicked';
        mt0List[this.idx].style.display = 'block';

        setLoading('block');
    }
}
setTab();

// 删除处理
function delNode() {
    // 书架
    var SJ = document.querySelectorAll('.mt0')[0];
    var btn_collect = SJ.querySelectorAll('.btn_collect');
    var cont_ul_SJ = SJ.querySelector('.cont_ul');
    // 阅读
    var YD = document.querySelectorAll('.mt0')[1];
    var deletethis = YD.querySelectorAll('.deletethis');
    var cont_ul_YD = YD.querySelector('.cont_ul');


    //     删除处理 - 书架
    function setSJclick() {
        for (var i = 0; i < btn_collect.length; i++) {
            btn_collect[i].onclick = setSJdel;
            btn_collect[i].idx = i;
        }
    }

    function setSJdel() {
        var lis = SJ.querySelectorAll('li');
        cont_ul_SJ.removeChild(lis[this.idx]);
        btn_collect = SJ.querySelectorAll('.btn_collect');
        setSJclick();
        setEmpty(SJ, btn_collect);
    }


    //     删除处理 - 阅读
    function setYDclick() {
        for (var i = 0; i < deletethis.length; i++) {
            deletethis[i].onclick = setYDdel;
            deletethis[i].idx = i;
        }
    }

    function setYDdel() {
        var lis = YD.querySelectorAll('li');
        cont_ul_YD.removeChild(lis[this.idx]);
        deletethis = YD.querySelectorAll('.deletethis');
        setYDclick();
        setEmpty(YD, deletethis);
    }

    // 判断是否删除为空
    function setEmpty(node, isNum) {
        if (isNum.length == 0) {
            var quesheng_box = node.querySelector('.quesheng_box');
            publicShowStatus(quesheng_box, 'block');
        }
    }

    setYDclick();
    setSJclick();
}
delNode();

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

// 点击加载提示
function setLoading(status) {
    var loading_jump = document.querySelector('.loading_jump');

    loading_jump.style.display = status;

    setTimeout(function () {
        loading_jump.style.display = 'none';
    }, 270)
}