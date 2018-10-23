// 生成元素 -- 签到
function createSignNode() {
    var node = document.createElement('div');
    node.id = 'o_sign';
    node.className = 'qrcode-alert qrcode-wrap';
    node.style.display = 'block';

    node.innerHTML =
        '<div class="qrcode-box">'+
        '<p class="d_title">本周签到</p>'+
        '<p class="d_date"><span>08月27日</span>-<span>09月02日</span></p>'+
        '<div class="d_content ">'+
        '<div class="d_content_item">'+
        '<p class="d_p1 ">累计1天</p>'+
        '<span class="d_bg "></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计2天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计3天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计4天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计5天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计6天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '<div class="d_content_item">'+
        '<p class="d_p1">累计7天</p>'+
        '<span class="d_bg"></span>'+
        '<p class="d_p2">45赠币</p>'+
        '</div>'+
        '</div>'+
        '<p class="d_txt">签到赠送书币有效期七天</p>'+
        '<img src="images/dialog-x.png" class="read-code-close">'+
        '</div>';

    document.getElementsByTagName("body")[0].appendChild(node);
}
createSignNode();

// 生成元素 -- 推荐 1
function createRecommendNode1() {
    var node = document.createElement('div');
    node.id = 'o_recommend1';
    node.className = 'qrcode-alert qrcode-wrap';
    node.style.display = 'none';

    node.innerHTML =
        '<div class="qrcode-box">'+
        '<p class="d_title pb3">精彩推荐</p>'+
        '<div class="d_content " style="">'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '<div class="d_content_item clearBG">'+
        '<a href="javascript:;">'+
        '<img class="t_img box_shadow" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<p class="d_p2 txt-align">天下无敌</p>'+
        '</a>'+
        '</div>'+
        '</div>'+
        '<img src="images/dialog-x.png" class="read-code-close">'+
        '</div>';

    document.getElementsByTagName("body")[0].appendChild(node);
}
createRecommendNode1();

// 生成元素 -- 推荐 2
function createRecommendNode2() {
    var node = document.createElement('div');
    node.id = 'o_recommend2';
    node.className = 'qrcode-alert qrcode-wrap';
    node.style.display = 'none';

    node.innerHTML =
        '<div class="qrcode-box" style="margin: 20% auto 0;">'+
        '<p class="d_title pb3">精彩推荐</p>'+
        '<div class="d_content">'+
        '<a href="javascript:;" class="item_a_c">'+
        '<img class="lp_li_imgWrapimg" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<div class="title_r">'+
        '<div class="lp_li_name txt-align">热血教官</div>'+
        '<div class="Detail">铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！</div>'+
        '</div>'+
        '</a>'+
        '<a href="javascript:;" class="item_a_c">'+
        '<img class="lp_li_imgWrapimg" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<div class="title_r">'+
        '<div class="lp_li_name txt-align">热血教官</div>'+
        '<div class="Detail">铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！</div>'+
        '</div>'+
        '</a>'+
        '<a href="javascript:;" class="item_a_c">'+
        '<img class="lp_li_imgWrapimg" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<div class="title_r">'+
        '<div class="lp_li_name txt-align">热血教官</div>'+
        '<div class="Detail">铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！</div>'+
        '</div>'+
        '</a>'+
        '<a href="javascript:;" class="item_a_c">'+
        '<img class="lp_li_imgWrapimg" src="https://static.youshuge.com/book_img/2sZEILeQ8RJ6hESkH5Pc7yTOn3AOpDcxi4WGH61k.jpeg" alt="">'+
        '<div class="title_r">'+
        '<div class="lp_li_name txt-align">热血教官</div>'+
        '<div class="Detail">铁拳所向，试问谁可争锋？义胆柔情，各色美人争宠！他，就是终极教官，当世大魔王！为美人无限张狂；为兄弟两肋插刀；为亲人誓死守护！尸山血海中杀伐，累累白骨中踏步，蓦然回首，已傲立巅峰，成就传奇霸业！</div>'+
        '</div>'+
        '</a>'+
        '</div>'+
        '<img src="images/dialog-x.png" class="read-code-close">'+
        '</div>';

    document.getElementsByTagName("body")[0].appendChild(node);
}
createRecommendNode2();


// 签到
function setSign() {
    // 最外层元素
    var wrap = document.getElementById('o_sign');
    // 关闭按钮元素
    var clearBtn = wrap.querySelector('.read-code-close');
    // 点击签到元素
    var list = wrap.querySelectorAll('.d_content_item');
    // 定义变量 x 表示第几天的元素可以点击签到
    var x = 0;

    // 绑定点击事件
    function setList(x) {
        // 标题元素
        var title = list[x].querySelector('.d_p1');
        // 图片元素
        var img = list[x].querySelector('.d_bg');

        list[x].onclick = function () {
            // 更改标题
            title.innerText = '今日已签';
            // 更改背景
            title.className = 'd_p1 d_focus';
            // 更改星星为打勾
            img.className = 'd_bg ok_bg';


            // 1.5秒后----显示推荐--关闭签到
            setTimeout(function () {
                document.getElementById('o_sign').style.display = 'none';
                // document.getElementById('o_recommend1').style.display = 'block';
                   document.getElementById('o_recommend2').style.display = 'block';
            }, 1500);
        };
    }

    setList(x);

    clearBtn.onclick = function () {
        wrap.style.display = 'none';
    }
}
setSign();



function recommendNode() {
    // 推荐1的关闭按钮
    document.getElementById('o_recommend1').querySelector('.read-code-close').onclick = function () {
        document.getElementById('o_recommend1').style.display = 'none';
    };

    // 推荐2的关闭按钮
    document.getElementById('o_recommend2').querySelector('.read-code-close').onclick = function () {
        document.getElementById('o_recommend2').style.display = 'none';
    };
}
recommendNode();