// 預載畫面移除 + 淡入
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  setTimeout(() => {
    loader.style.display = "none";
    const body = document.getElementById("mainBody");
    body.classList.remove("hidden");
    body.classList.add("fade-in");
  }, 2600);
});

// tab 切換
function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tabId).classList.add('active');
  event.target.classList.add('active');
}
// 圖片點擊放大
function openModal(src) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "flex";
  modalImg.src = src;
}

document.addEventListener("contextmenu", function (e) {
  e.preventDefault(); // 禁用右鍵選單
});

