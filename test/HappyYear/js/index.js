/**
 * Created by NameX on 2018/7/2.
 */
!function () {
    var music_img = document.getElementById('music_img');
    var audio = document.getElementById('audio');

    var page1 = document.getElementById('page1');
    var page2 = document.getElementById('page2');
    var page3 = document.getElementById('page3');


    //初始化开始播放
    audio.play();
    music_img.className = 'play';

    //当音乐停止，自动停止光盘
    audio.addEventListener('ended',function (event) {
        // music_img.className = '';
        music_img.style.animationPlayState = 'paused';
        music_img.style.webkitAnimationPlayState = 'paused'
    },false);

    //控制音乐播放停止
    music_img.addEventListener('touchstart',function (event) {
        if (audio.paused) {
            audio.play();
            music_img.style.animationPlayState = 'running';
            music_img.style.webkitAnimationPlayState = 'running'
        } else {
            audio.pause();
            music_img.style.animationPlayState = 'paused';
            music_img.style.webkitAnimationPlayState = 'paused'
        }
    },false);

    page1.addEventListener('touchstart',function () {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'block';
        page3.style.top = '100%';

        setTimeout(function () {
            page2.className = 'page fadeOut';
            page3.className = 'page fadeIn';
        },5500)

    },false)
}();