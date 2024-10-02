function setCopyright() {
  const currentYear = new Date().getFullYear();
  document.querySelector(
    ".copyright"
  ).innerText = `Copyright ${currentYear}, John Philip King`;
}
window.addEventListener("load",setCopyright);