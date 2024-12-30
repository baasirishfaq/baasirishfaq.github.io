const achievementItems = document.querySelectorAll("section.achievements li");

achievementItems.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "white";
    item.style.fontWeight = "bold";
    item.style.fontSize = "20px";
  });

  item.addEventListener("mouseout", () => {
    item.style.color = ""; // Reset to default
    item.style.fontWeight = "";
    item.style.fontSize = "";
  });
});

const heroHeading = document.querySelector("header.hero h1");

function triggerAnimation() {
  heroHeading.style.animation = "none"; // Reset animation
  setTimeout(() => {
    heroHeading.style.animation = "fadeInAndMove 2s ease-in-out"; // Reapply animation
  }, 10); // Small delay to ensure reset works
}


heroHeading.addEventListener("click", triggerAnimation);

const aboutHeading = document.querySelector("section.about h2");

function changeToAboutMe() {
  aboutHeading.textContent = "About";
  aboutHeading.classList.add("switch-back-animation");
}

function switchBackToAbout() {
  aboutHeading.textContent = "Me";
  aboutHeading.classList.add("switch-back-animation");
}

setInterval(() => {
  if (aboutHeading.textContent === "Me") {
    changeToAboutMe();
  } else {
    switchBackToAbout();
  }
}, 3000);
