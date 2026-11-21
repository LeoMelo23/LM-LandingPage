const header = document.querySelector("header");

function updateHeaderHeight(){
    document.documentElement.style.setProperty(
        "--header-height",
        `${header.offsetHeight}px`
    );
}

updateHeaderHeight();
window.addEventListener("resize", updateHeaderHeight);

const revealEls = document.querySelectorAll('.reveal');

 const io = new IntersectionObserver((entries) => {
   entries.forEach(e => {
     if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target); // anima só uma vez
    }
   });
 }, { threshold: 0.15 }); // dispara quando 15% do elemento está visível

 revealEls.forEach(el => io.observe(el));