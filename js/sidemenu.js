{
  // 언어 목록 기능
  const langBt = document.getElementById("lang-bt");
  const langList = document.getElementById("lang-list");

  const toggleListArr = [langList];
  const toggleBtArr = [langBt];
  
  function listToggle(bt,list){
    bt.style.display = "block";
    
  }

  langBt.addEventListener("click", function () {
    langList.style.display = "block";
  });
}
