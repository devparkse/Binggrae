{
  {
    // 스크롤시 헤더 배경색 화이트
    const header = document.querySelector(".header");
    let scTop = 0;
    window.addEventListener("scroll", function () {
      scTop = document.documentElement.scrollTop;
      if (scTop > 0) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    });
  }
  // 언어 목록 기능
  {
    const langBt = document.getElementById("lang-bt");
    const langList = document.getElementById("lang-list");

    // const toggleListArr = [langList];
    // const toggleBtArr = [langBt];

    // a 태그 클릭해도 이벤트 전달 막기
    // toggleListArr.forEach(function (item) {
    //   item.addEventListener("click", function (event) {
    //     event.stopPropagation();
    //   });
    // });

    langBt.addEventListener("click", function () {
      if (langList.style.display === "none") {
        langList.style.display = "block";
      } else {
        langList.style.display = "none";
      }
    });
  }
}
