$(function () {
    const MES = new Swiper('.main_event_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        centeredSlides: true,

        pagination: {
            el: '#main_event .page',
            clickable: true,
        },
        navigation: {
            nextEl: '#main_event .next',
            prevEl: '#main_event .prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        },
    })
})

$(function () {
    $('.to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        })
    });
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop(); console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });
})


$(function () {
    $('.mbtn').on('click', function () {
        $(this).toggleClass('is-active')
        $('.gnb').toggleClass('on');
        $('#header h1').toggleClass('on')
    })
});


$(function () {

    $('.gnb>ul>li>a').on('click', function (e) {
        if ($('.gnb').hasClass('on') && $(this).next().is('ul')) {
            e.preventDefault();
            $('.gnb>ul>li ul').stop().slideUp();
            $(this).next().stop().slideToggle();
        }
    });

    $(window).on('resize', function () {
        let ww = $(window).width();
        if (ww > 768) {
            $('.gnb').removeClass('on');
            $('.gnb>ul>li ul').removeAttr('style');
        }
    })
})