const indicator = document.querySelector(".progress");

let scrollHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", handleScroll);

function handleScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}
