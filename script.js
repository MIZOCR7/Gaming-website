const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");
const heroVid = document.querySelector(".hero-vid");
const watchTrailerBtn = document.querySelector(".hero-info button");
const productsBtn = document.querySelector(".head-left button");
const comingSoonBtn = document.querySelector(".card button");
const contactBtn = document.querySelector(".contact-section button");
const footerSection = document.querySelector(".footer");
const servicesSection = document.getElementById("services");

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
      const heroInfo = document.querySelector(".hero-info");
      if (heroInfo) {
        const infoRect = heroInfo.getBoundingClientRect();
        const isOverInfo = e.clientX >= infoRect.left && e.clientX <= infoRect.right &&
                           e.clientY >= infoRect.top && e.clientY <= infoRect.bottom;
        if (isOverInfo) {
          nextButton.style.opacity = "0";
          nextButton.style.pointerEvents = "none";
          return;
        }
      }
      nextButton.style.pointerEvents = "auto";
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

const TRAILER_URL = "https://youtu.be/x1_-btXPWpc";

if (watchTrailerBtn) {
  watchTrailerBtn.addEventListener("click", function() {
    window.open(TRAILER_URL, "_blank");
  });
}

if (productsBtn) {
  productsBtn.addEventListener("click", function() {
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (comingSoonBtn) {
  comingSoonBtn.addEventListener("click", function() {
    alert("Coming Soon!");
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", function() {
    window.location.href = "mailto:hello@zentry.co";
  });
}


