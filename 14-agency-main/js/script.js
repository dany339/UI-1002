$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const video = $(".video-wrap video").get(0);

    // 1. visual 영역 애니메이션
    const visualTL = gsap.timeline({ defaults: { duration: 1, ease: "power4.inOut" } });

    visualTL.from(video, { scale: 3, filter: "blur(30px)", duration: 3 });
    visualTL.from(".logo", { y: -100, autoAlpha: 0 }, "<");
    visualTL.from(".gnb li", { y: -100, autoAlpha: 0, stagger: 0.3 }, "-=0.4");
    visualTL.from(".util", { y: -100, autoAlpha: 0, delay: 1 }, 0);

    visualTL.from(".visual-title h2 strong", { y: 100 });
    visualTL.from(".visual-title p", { y: 100, autoAlpha: 0 }, "-=0.4");
    visualTL.from(".visual-title .btn-cta", { y: 100, autoAlpha: 0 }, "-=0.4");

    // 1-1. 공통의 요소에 같은 애니메이션 정의

    // const secTitle = gsap.utils.toArray(".sec-title");
    // console.log(secTitle);

    // // forEach() --> jQeury : each()
    // secTitle.forEach((item) => {
    //     gsap.timeline({
    //         scrollTrigger: {
    //             trigger: item,
    //             // markers: true,
    //             start: "top 30%",
    //         },
    //     }).from(item, { y: 50, autoAlpha: 0 });
    // });

    // // each 를 쓰려면 jQeury방식으로 const secTitle = $('.sec-title)
    const secTitle = $(".sec-title");
    console.log(secTitle);

    secTitle.each((index, item) => {
        gsap.from(item, {
            y: 50,
            autoAlpha: 0,
            scrollTrigger: {
                trigger: item,
                // markers: true,
                start: "top 50%",
            },
        });
    });

    // 2. about 영역 애니메이션
    const aboutTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            // markers: true,
            id: "about",
            start: "top 50%", // trigger scroller(viewport)
            end: "bottom 30%",

            // play none pause resume reset restart reverse (줄 수 있는 움직임)
            toggleActions: "play none reverse none", // onEnter, onLeave, onEnterBack, onLeaveBack (상황)
            onEnter: () => video.pause(),
        },
    });

    aboutTL.from(".about figure", { clipPath: "inset(0 100% 0 0)" });
    aboutTL.from(".about p", { y: 50, autoAlpha: 0 });

    // 3. team 영역 애니메이션
    const teamTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".team",
            // markers: true,
            start: "top 10%",
            end: "bottom+=2000 0%", // 스크롤을 길게 하여, 전체 재생 시간을 늘리는 효과
            pin: true,
            scrub: 1, // (true) 사용자의 스크롤바를 따라잡기까지 1초
        },
    });

    teamTL.from(".team-list li figure", { y: -100, autoAlpha: 0, stagger: 0.2, rotation: 30 });
    teamTL.from(".team-list li dl", { y: -50, autoAlpha: 0, stagger: 0.2 }, "<");
    teamTL.to(".team", { backgroundColor: "#f59", duration: 10 });
    teamTL.from(".btn-with", { y: 50, autoAlpha: 0 }, "-=0.3");
    teamTL.to(".delay", { x: 1, duration: 10 });

    // 4. work 영역 애니메이션
    const workImg = gsap.utils.toArray(".work-con figure img");
    console.log(workImg);

    workImg.forEach((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top 50%",
                end: "bottom 0",
                markers: true,
            },
        }).from(item, { x: -50, autoAlpha: 0, delay: index * 0.2 });
    });

    // 스크롤바가 상단으로 이동하면 동영상 다시 재생시키기
    $(window).on("scroll", function () {
        const scrollTop = $(this).scrollTop();

        if (scrollTop === 0) video.play(); // 명령이 하나라 중괄호{} 생략
    });
});
