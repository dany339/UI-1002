const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal", // vertical(세로) horizontal(가로)
    loop: true /* false */,
    autoplay: true /* autoplay: 자동으로 넘김 */,
    speed: 1000, // 기본값 300 = 0.3초
    effect: "slide" /* slide, fade, cube, flip(카드뒤집기), coverflow(좌,우가 중심으로 모아진)  */,

    mousewheel: true,

    // 캐러셀 만들기
    slidesPerView: 1, // <- 보여질 슬라이더 갯수, 소수점도 가능
    spaceBetween: 20, // 간격 20px
    centeredSlides: true, // 첫번째 슬라이드를 가운데로 (true, false)

    // RWD setting: min-width, 모바일부터 PC까지 설정한다.
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1200: {
            slidesPerView: "auto" /* 현재 pc 버전일 때의 슬라이더 갯수를 조정 */,
            spaceBetween: 30,
        },
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});
