$(function() {
    $('.slider__inner').slick({
        arrows: false,
        dots: true,
    });

    $('.works__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-arrow--prev"><img src="assets/images/icons/arrow-left.svg" alt="icon: arrow-left"></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next"><img src="assets/images/icons/arrow-right.svg" alt="icon: arrow-right"></button>'
    });
});
