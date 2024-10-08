$(function () {
    // 대상을 변수에 저장
    const $dim = $(".dim");
    const $videoWrap = $(".video-wrap");
    const $video = $videoWrap.find(".video iframe");
    const $caption = $(".caption");
    const $btnClose = $(".btn-close");

    const $videoItem = $(".video-list li");

    // 비디오 리스트를 선택했을 때
    $videoItem.on("click", function () {
        // console.log($videoItem, $(this));

        // 선택한 li의 data-link 값을 받아서 videoLink 변수에 담기
        let videoLink = $(this).attr("data-link");
        // const videoLink = $(this).data("link");

        // 자동재생 추가
        // A += B --> A = A + B
        // videoLink = videoLink + "?autoplay=1";
        videoLink += "?autoplay=1";

        // iframe의 src 값으로 videoLink를 전달
        $video.attr("src", videoLink);

        // 팝업창 띄우기
        $dim.fadeIn();
        $videoWrap.addClass("active");

        // 텍스트 받아오기 videoTitle 변수에 담기
        const videoTitle = $(this).text();
        $caption.text(videoTitle);

        console.log(videoLink);
    });

    // 닫기 버튼을 클릭했을 때
    $btnClose.on("click", function () {
        $dim.fadeOut();
        $videoWrap.removeClass("active");

        // 동영상 주소 삭제
        $video.attr("src", "");
    });

    // setTimeout(동작, 시간)
    // setTimeout(function () {
    //     $dim.fadeIn();
    //     $videoWrap.addClass("active");
    // }, 3000); /* 3초 = 3000 */
});
