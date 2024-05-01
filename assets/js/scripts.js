$(document).ready(function () {
    $('#homepage_hero_slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
        speed:900,
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
})