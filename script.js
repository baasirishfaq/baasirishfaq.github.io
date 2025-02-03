// const aboutHeading = document.querySelector("section.about h2");

// function changeToAboutMe() {
//   aboutHeading.textContent = "About";
//   aboutHeading.classList.add("switch-back-animation");
// }

// function switchBackToAbout() {
//   aboutHeading.textContent = "Me";
//   aboutHeading.classList.add("switch-back-animation");
// }

// setInterval(() => {
//   if (aboutHeading.textContent === "Me") {
//     changeToAboutMe();
//   } else {
//     switchBackToAbout();
//   }
// }, 3000);

const headline = document.querySelector("header.hero h1");

function changeToBaasirsWeb() {
  headline.innerHTML = '<span class="first-part">Baasir\'s</span> <span class="second-part">web</span>';
  headline.classList.remove("switch-back-animation"); // Remove any previous animation class
  headline.classList.add("switch-to-animation"); // Add a relevant animation class
}

function switchBackToWelcome() {
  headline.innerHTML = '<span class="first-part">Welcome</span> <span class="second-part">To</span>';
  headline.classList.remove("switch-to-animation"); // Remove any previous animation class
  headline.classList.add("switch-back-animation"); // Add a relevant animation class
}

setInterval(() => {
  if (headline.querySelector(".first-part").textContent === "Welcome") {
    changeToBaasirsWeb();
  } else {
    switchBackToWelcome();
  }
}, 5000);




const achievements = [
  "Passed High School with distinction",
  "Accepted to University of Waterloo (Geomatics)",
  "Accepted to University of Guelph Computer Science Honors",
  "Awarded the President's Scholarship",
  'Awarded the <span class="highlight">Gold Badge</span> in C++ by <a href="https://www.hackerrank.com/baasirishfaq" title="Go to Baasir\'s HackerRank" target="_blank"><span style="color: rgb(252, 249, 249);">HackerRank</span></a>',
  "Rated as a 5-Star Coder by HackerRank",
];

const achievementsSection = document.querySelector(".achievements");
let currentIndex = 0;

function displayNextAchievement() {
  // Clear the section content
  achievementsSection.innerHTML = `
    <h3>Some of my Achievements:</h3>
    <li>${achievements[currentIndex]}</li>
  `;

  // Update the index to show the next achievement
  currentIndex = (currentIndex + 1) % achievements.length; // Loop back to the first achievement
}

// Start cycling achievements every 3 seconds
setInterval(displayNextAchievement, 3000);

// Show the first achievement on load
displayNextAchievement();

