const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");
const heroVid = document.querySelector(".hero-vid");

const movieList = ["videos/hero-1.mp4", "videos/hero-2.mp4", "videos/hero-3.mp4", "videos/hero-4.mp4"];

let index = 0;
if (nextButton && video) {
  nextButton.addEventListener("click", function() {
    index = (index + 1) % movieList.length;
    video.src = movieList[index];
    video.load();
    video.play().catch(() => {});
  });
}

if (heroVid && nextButton) {
  heroVid.addEventListener("mousemove", function(e) {
    if (window.innerWidth > 650) {
      const rect = heroVid.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      nextButton.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0) scale(1)`;
      nextButton.style.opacity = "1";
    }
  });

  heroVid.addEventListener("mouseleave", function() {
    if (window.innerWidth > 650) {
      nextButton.style.transform = "translate3d(50vw, 50vh, 0) scale(0)";
      nextButton.style.opacity = "0";
    }
  });
}


