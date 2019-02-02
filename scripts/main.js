let $ = window.jQuery;
let time = 0,
    j = 0,
    i = 0,
    k = 0,
    ms = $('#ms'),
    sec = $('#seconds'),
    min = $('#minutes'),
    ppBtn = $('.ppBtn'),
    playBtn = '<button id="playBtn" class="btn playBtn"><img src="images/music-player-play.png" alt="playBtn"></button>',
    pauseBtn = '<button id="playBtn" class="btn pauseBtn"><img src="images/pause-symbol.svg" alt="pauseBtn"></button>';


$('#playBtn').click(function () {
    if ($(this).hasClass('playBtn')) {
        //ppBtn.replaceWith(pauseBtn);
        $(this).find('img').attr('src', 'images/pause-symbol.svg');
        time = setInterval(function () {
            i++;
            ms.text(i.toString());
            if (i == 99) {
                j++;
                sec.text(j.toString()+',');
                i = 0;
            }
            if (j==56) {
                k++;
                min.text(k.toString()+':');
                i=0;
                j=0;
            }
        }, 10);

        $(this).toggleClass("playBtn");
        $(this).toggleClass('pauseBtn');
    } else {
        clearInterval(time);
        $(this).find("img").attr("src", "images/music-player-play.png");
        $(this).toggleClass("playBtn");
        $(this).toggleClass('pauseBtn');
    }
});

$('#resetBtn').on('click', function () {

    clearInterval(time);
    $('#playBtn').find("img").attr("src", "images/music-player-play.png");
    $('#playBtn').toggleClass("playBtn");
    $('#playBtn').toggleClass('pauseBtn');
    ms.html('<b>00</b>');
    sec.html('<b>00,</b>');
    min.html('<b>00:</b>')
    i=0;
    j=0;
    k=0;
})