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
    const langBt2 = document.querySelector(".side-lang");
    const langList2 = document.querySelector(".side-lang-menu");

    const hamBt = document.querySelector(".icon-menu");
    const hamSide = document.querySelector(".sidemenu");

    const hamBtClose = document.querySelector(".side-icon-menu");
    const hamBtCloseMb = document.querySelector(".mo-close");

    const toggleListArr = [langList, langList2, hamBt];
    const toggleBtArr = [langBt, langBt2, hamSide];

    function listToggle(toggleBtArr, toggleListArr) {
      toggleBtArr.addEventListener("click", function (event) {
        event.stopPropagation();
        
        if (toggleListArr.style.display === "none") {
          toggleListArr.style.display = "block";
        } else {
          toggleListArr.style.display = "none";
        }
      });
    }
    listToggle(langBt, langList);
    listToggle(langBt2, langList2);
    listToggle(hamBt, hamSide);

    hamBtClose.addEventListener("click", function () {
      hamSide.style.display = "none";
    });
    hamBtCloseMb.addEventListener("click", function () {
      hamSide.style.display = "none";
    });
  }
}
