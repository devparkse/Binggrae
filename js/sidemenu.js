{
  // 언어 목록 기능
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
    langList.style.display = "block";
  });
  //   langBt.addEventListener("click", function () {
  //     langList.style.display = "none";
  //   });
}
