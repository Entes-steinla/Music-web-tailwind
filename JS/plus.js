const plusSvg = document.getElementById("plus-svg");
const plusWindows = document.getElementById("plus-windows");
const plusDescriptions = document.getElementById("plus-description");

plusSvg.addEventListener("click", (e) => {
  e.stopPropagation();
  plusWindows.classList.remove("hidden");
  plusDescriptions.classList.add("hidden");
});

// Khi click ra ngoài, ẩn plusWindows
document.addEventListener("click", (e) => {
  if (!plusWindows.contains(e.target) && !plusSvg.contains(e.target)) {
    plusWindows.classList.add("hidden");
  }
});
