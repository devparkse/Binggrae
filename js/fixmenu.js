{
  // 위로 / 아래로 가기 버튼
  const fixBtBottom = document.querySelector(".fix-button-bottom");
  // console.log(fixBtBottom);

  // 버튼 클릭 시 맨 위로 이동
  fixBtBottom.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 버튼 클릭 시 페이지 하단으로 이동
  fixBtBottom.onclick = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // <- 페이지 총 Height
      behavior: "smooth",
    });
  };

  // fixBtBottom.addEventListener("click", function () {
  //   const scrollElement =
  //     window.document.scrollingElement ||
  //     window.document.body ||
  //     window.document.documentElement;
  //   anime({
  //     targets: scrollElement,
  //     scrollTop: 0,
  //     duration: 1000,
  //     easing: "easeInOutQuad",
  //   });
  // });
}
