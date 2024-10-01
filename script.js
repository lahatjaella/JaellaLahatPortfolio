// This is javascript code that adds the class "scroll-top" to the body whenever the body is at the top of the page and removes it otherwise.

document.addEventListener("DOMContentLoaded", function() {
  // Run onScroll initially to set the correct class based on the initial scroll position
  onScroll();

  // Attach the onScroll function to the scroll event
  window.onscroll = onScroll;
});

function onScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.body.classList.add("scroll-top");
  } else {
    document.body.classList.remove("scroll-top");
  }
}
