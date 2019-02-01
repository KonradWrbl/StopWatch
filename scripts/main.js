let $ = window.jQuery;
let time = 0;
let j = 0;
let i = 0;
let ms = $('#ms');
let sec = $('#seconds')

$(".playBtn").on('click', function(){
    time = setInterval(function() {
        i++;
        ms.text(i.toString());
        if (i==100) {
            j++;
            sec.text(j.toString());
            i = 0;
        }
    }, 10);
    $(this).html('<img src="images/pause-symbol.svg" alt="pauseBtn"></img>');
    $(this).removeClass('playBtn');
    $(this).addClass('stopBtn');
});

$(".stopBtn").on('click', function(){
    clearInterval(time);
    $(".playBtn").html('<img src="images/music-player-play.png" alt="pauseBtn"></img>');
    $(".playBtn").removeClass('stopBtn');
    $(".playBtn").addClass('playBtn');
});

$('#resetBtn').on('click', function () {
    ms.html('<b>00</b>');
    sec.html('<b>00</b>');
    clearInterval(time);
    $(".pauseBtn").html('<img src="images/music-player-play.png" alt="playBtn"></img>');
})