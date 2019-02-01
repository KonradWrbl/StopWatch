let $ = window.jQuery;
let time = 0,
    j = 0,
    i = 0,
    ms = $('#ms'),
    sec = $('#seconds'),
    ppBtn = $('.ppBtn'),
    playBtn = '<button id="playBtn" class="btn playBtn"><img src="images/music-player-play.png" alt="playBtn"></button>',
    pauseBtn = '<button id="playBtn" class="btn pauseBtn"><img src="images/pause-symbol.svg" alt="pauseBtn"></button>';

$('#playBtn').click(function() {
    if($(this).hasClass('.playBtn')) {
        ppBtn.replaceWith(pauseBtn);
        time = setInterval(function() {
            i++;
            ms.text(i.toString());
            if (i==100) {
                j++;
                sec.text(j.toString());
                i = 0;
            }
        }, 10);
    } else  {
        clearInterval(time);
        ppBtn.replaceWith(playBtn);
    }
});

$('#resetBtn').on('click', function () {
    ppBtn.replaceWith(playBtn);
    ms.html('<b>00</b>');
    sec.html('<b>00</b>');
    clearInterval(time);
    i=0;
    j=0;
})