$(function () {
    if (!isMobile.any) {

        $('.my-background-video').bgVideo({
            fullScreen: true, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
            fadeIn: 300, // Milliseconds to fade video in/out (0 for no fade)
            pauseAfter: 0, // Seconds to play before pausing (0 for forever)
            fadeOnPause: false, // For all (including manual) pauses
            fadeOnEnd: false, // When we've reached the pauseAfter time
            showPausePlay: false // Show pause/play button
        });

    }
    $('.scroll').click(function(e){
        e.preventDefault();
        $('body, html').animate({scrollTop: $('#form').offset().top - 100}, 1000);
    });



    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.fix-header').addClass('fix');
        }
        else {
            $('.fix-header').removeClass('fix');
        }
    });

    $('.faq').tooltipster({
        theme: 'tooltipster-light'
    });

    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        trigger: 'click'
    });


    $('.goto').click(function(e){
        e.preventDefault();
        var step = $(this).data('step');
        $('.step-box').removeClass('open');
        $('.'+step).addClass('open');
        $('.steps-boxes-box .tabs li').removeClass('active');
        $('.steps-boxes-box .tabs li[data-step='+step+']').addClass('active');
        $('select').trigger('refresh');
    });

    $('.select-currency input').change(function(e){
        $('.select-currency .description').removeClass('open');
        $('.select-currency .description:eq('+$(this).data('text')+')').addClass('open');
    });


    $("#slider-range1").slider({
        range: "min",
        value: 10000,
        step: 5000,
        min: 0,
        max: 1000000,
        slide: function (event, ui) {
            $("#summ1").text(accounting.formatMoney(ui.value, "", 0, " ", "."));
            calcDebet();
        },
        change: calcDebet
    });

    $("#summ1").text(accounting.formatMoney($("#slider-range1").slider("value"), "", 0, " ", "."));

    $("#slider-range2").slider({
        range: "min",
        value: 20000,
        min: 0,
        step: 5000,
        max: 150000,
        slide: function (event, ui) {
            $("#summ2").text(accounting.formatMoney(ui.value, "", 0, " ", "."));
            calcDebet();
        },
        change: calcDebet
    });

    $("#summ2").text(accounting.formatMoney($("#slider-range2").slider("value"), "", 0, " ", "."));

    $('select').styler();

    $('input[name="phone"]').mask('+7 (999) 999-99-99');

    calcDebet();

    if (isMobile.any) {
        $('.header').addClass('mobile');
    }


});

function changeCircle(el, percent) {
    var circles = {
            large: {selector: '.round1', max: 780, min: 540, margin: [-390, 0]},
            middle: {selector: '.round2', max: 660, min: 460, margin: [-330, -330]},
            small: {selector: '.round3', max: 520, min: 360, margin: [-260, -260]}
        },
        size = parseInt(circles[el].max - (circles[el].max - circles[el].min) * percent),
        margin = (circles[el].max - size) / 2,
        dma = circles[el].margin;
    $(circles[el].selector).css({
        width: size + 'px',
        height: size + 'px',
        margin: (margin + dma[0]) + 'px 0 0 ' + (margin + dma[1]) + 'px'
    });
}

function changeCircles(percent) {
    $.each(['large', 'middle', 'small'], function (i, e) {
        changeCircle(e, percent);
    });
}

function calcDebet() {
    var balance = $("#slider-range1").slider('value'),
        buys = $("#slider-range2").slider('value'),
        cashback = 8.5,
        percent = balance > 10000 ? balance < 700000 ? 7.5 : 4.4 : 0,
        proc_balance = Math.round(parseInt((balance * percent) / 100)),
        proc_cashback = Math.round(parseInt((buys * cashback) / 100) * 12),
        total = proc_balance + proc_cashback;


    changeCircles(1 - total / 230000);
    $('#total').text(accounting.formatMoney(total, "", 0, " ", "."));


}


