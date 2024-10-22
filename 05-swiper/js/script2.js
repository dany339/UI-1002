const topSlider = new Swiper(".top-slider", {
    // Optional parameters
    direction: "horizontal", // vertical(세로) horizontal(가로)
    loop: true /* false */,
    autoplay: true /* autoplay: 자동으로 넘김 */,
    speed: 1000, // 기본값 300 = 0.3초
    effect: "slide" /* slide, fade, cube, flip(카드뒤집기), coverflow(좌,우가 중심으로 모아진)  */,

    // 캐러셀 만들기
    slidesPerView: 3, // <- 보여질 슬라이더 갯수, 소수점도 가능
    spaceBetween: 20, // 간격 20px

    // If we need pagination
    pagination: {
        el: ".top-slider-wrap .pagination",
        clickable: true, // 클릭 가능
    },

    // Navigation arrows
    navigation: {
        nextEl: ".top-slider-wrap .btn-next",
        prevEl: ".top-slider-wrap .btn-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
