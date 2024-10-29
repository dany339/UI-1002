$(function () {
    const tl = gsap.timeline();

    // header
    tl.from(".logo", { y: -100, autoAlpha: 0 });
    tl.from("nav a", { y: -100, autoAlpha: 0, stagger: 0.25 }, "-=0.4");
    tl.from(".menu", { y: -100, autoAlpha: 0 }, "-=0.4");

    // footer
    tl.from(".foot-box", { width: 0, autoAlpha: 0 }, "-=0.5");
    tl.from(".sns-link li", { x: -50, autoAlpha: 0, stagger: 0.2 });
    tl.from(".copyright", { x: -50, autoAlpha: 0 }, "-=0.4");

    // bruce lee
    tl.from(
        ".bruce-lee-bg",
        {
            autoAlpha: 0,
            scale: 0.9,
            duration: 3,
            ease: "none",
        },
        1 // 전체 타임라인의 1초 지점에서 시작
    );

    tl.from(".bruce-lee", {
        autoAlpha: 0,
        scale: 1.2,
        ease: "power4.inOut",
    });

    // title
    tl.from(".title h2 strong", {
        x: -50,
        autoAlpha: 0,
        duration: 1,
        onComplete: () => {
            Splitting();
        },
    });

    tl.from(".title h2 span", { x: -50, autoAlpha: 0, duration: 1 }, "-=0.8");

    tl.from(".small-bruce-lee", {
        xPercent: 200 /* 200% */,
        duration: 0.7,
        ease: "elastic.out(1,0.3)",
        onComplete: () => {
            $(".small-bruce-lee").addClass("action");
            moving();
        },
    });

    // 여기 skip 할 때 도달할 지점
    tl.addLabel("end");

    tl.from(".bth-skip", { x: -100, autoAlpha: 0 }, 0);

    // skip 클릭했을 때
    $(".btn-skip").on("click", () => {
        tl.seek("end");
        Splitting();
        $(".small-bruce-lee").addClass("action");
        moving();
    });

    // 괴조음
    const scream = $(".scream").get(0);
    $(".small-bruce-lee").on("click", () => scream.play());

    // 이소룡 움직이기
    const $window = $(window);
    let x = 0;
    let y = 0;
    let mx = 0;
    let my = 0;
    const speed = 0.09;

    // 마우스가 움직이면 좌표값을 구한다.
    $window.on("mousemove", (e) => {
        // x = e.pageX - $window.innerWidth() / 2; /* 화면의 중심을 기준으로 만들기 위한 코드 */
        // y = e.pageY - $window.innerHeight() / 2;

        /* 화면 중심을 0,0으로 했으니까, 왼쪽으로 쭉 가도(-960).. 고로 더 큰 -100을 선택. 걍 마지노선 정해준거라 생각해~ */
        x = Math.max(-100, Math.min(500, e.pageX - $window.innerWidth() / 2));
        y = Math.max(-10, Math.min(100, e.pageY - $window.innerHeight() / 2));
    });

    // 대상을 반복적으로 움직이게 만드는 함수
    function moving() {
        mx += (x - mx) * speed;
        my += (y - my) * speed;

        $(".bruce-lee").css({
            transform: `translateX(${mx}px)` /* 백틱(`) 안에서는 불러올 때 ${}를 사용한다 */,
        });

        $(".bruce-lee-bg").css({
            transform: `translate(${mx * 0.4}px, ${my}px)`,
        });

        $(".title").css({
            transform: `translate(${-mx * 0.4}px, -50%)` /* css에서 transformY(-50%)를 줬기 때문 */,
        });

        requestAnimationFrame(moving);
    }
});
