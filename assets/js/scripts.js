$(document).ready(function () {
    setTimeout(() => {
        const listings = document.querySelectorAll('.services__grid__listing');
        listings.forEach(listing => {
            listing.style.setProperty('--height', `-${listing.clientHeight}px`);
        });
    }, 500);
    $('.icon__quick__nav--wheelchair').click(function () {
        $(this).toggleClass('icon__quick__nav__active')
    })
    $('.icon__quick__nav--wheelchair .icon__quick__nav__dropdown').click(function (e) {
        // $(this).toggleClass('icon__quick__nav__active')
        e.stopPropagation();
    })
    $('#homepage_hero_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 900,
        dots: true,
        appendDots: $('.hero__banner__navigation__inner'),
        prevArrow: `<button class="slick__arrow slick_prev">
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.70492 1.41L6.29492 0L0.294922 6L6.29492 12L7.70492 10.59L3.12492 6L7.70492 1.41Z" fill="white"/>
</svg>
</button>`,
        nextArrow: `<button class="slick__arrow slick_next">
   <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="white"/>
</svg>
</button>`,
        appendArrows: $('.hero__banner__navigation__outer')
    });
    $('#testimonies__section__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed: 900,
        dots: true,
        appendDots: $('.testimonies__section__slider__navigation__inner'),
        prevArrow: `<button class="slick__arrow slick_prev">
    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.70492 1.41L6.29492 0L0.294922 6L6.29492 12L7.70492 10.59L3.12492 6L7.70492 1.41Z" fill="#002F70"/>
</svg>
</button>`,
        nextArrow: `<button class="slick__arrow slick_next">
   <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.70492 0L0.294922 1.41L4.87492 6L0.294922 10.59L1.70492 12L7.70492 6L1.70492 0Z" fill="#002F70"/>
</svg>
</button>`,
        appendArrows: $('.testimonies__section__slider__navigation__outer')
    });

    $('#resources__tab__links__wrap li').click(function () {
        let clickindex = $(this).index();
        $('#resources__tab__links__wrap li').each(function () {
            $(this).removeClass('link__active')
        })
        $(this).addClass('link__active');
        $('#resources__tab__body__wrap .resources__tab__bodyitem').each(function (index) {
            if (clickindex == index) {
                $(this).addClass('resources__tab__bodyitem__active');
            } else {
                $(this).removeClass('resources__tab__bodyitem__active');

            }
        })
    })


    $('.has__children').click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('sub__menu__active')) {
            $(".sub__menu__has__children").removeClass('sub__menu__has__children__active');

        }
        $(this).toggleClass('sub__menu__active');
    })
    // $(document).click(function () {
    //     var $trigger = document.querySelector(
    //         ".fixed__main__navigation__menu"
    //     );
    //     if (
    //         $trigger !== event.target
    //         // && $trigger.contains(event.target)
    //     ) {

    //         $('.sub__menu__has__children').toggleClass('sub__menu__has__children__active');

    //     }
    // });
    $('#header__menu__toggle__hamburger').click(function () {
        if ($('body').hasClass('main__navigation__open')) {

            $('.has__children').removeClass('sub__menu__active');
            $('.sub__menu__has__children').removeClass('sub__menu__has__children__active');
        }
        $('body').toggleClass('main__navigation__open');
    })
    $('#close__menu__fixed__main__navigation__menu').click(function () {
        $('body').removeClass('main__navigation__open');
        $(".sub__menu__has__children").removeClass('sub__menu__has__children__active');
        $('.has__children').removeClass('sub__menu__active');
    })
    $('.fixed__main__navigation__menu__overlay').click(function () {
        $('body').removeClass('main__navigation__open');
        $(".sub__menu__has__children").removeClass('sub__menu__has__children__active');
        $('.has__children').removeClass('sub__menu__active');

    })

    $('.sub__menu__has__children').click(function (e) {
        e.stopPropagation();
        var isActive = $(this).hasClass('sub__menu__has__children__active');
        $(".sub__menu__has__children").removeClass('sub__menu__has__children__active');
        if (!isActive) {
            $(this).addClass('sub__menu__has__children__active');
        }
    });
    $('.sub__menu').click(function (e) {
        e.stopPropagation();
    })
    $('.sub__menu__has__children__menu').click(function (e) {
        e.stopPropagation();
    })
    $('.sub__menu__has__children__menu li h5').click(function (e) {
        e.stopPropagation();
        $(this).closest('.sub__menu__has__children').removeClass('sub__menu__has__children__active')
    })
    // if ($(window.innerWidth < 1200)) {

    // }
})