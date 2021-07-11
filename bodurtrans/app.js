const turkish = document.querySelector("#turkish");
const bulgarian = document.querySelector("#bulgarian");
const english = document.querySelector("#english");

const turkishListener = () => {
  localStorage.setItem("country", "turkish");
};

const bulgarianListener = () => {
  localStorage.setItem("country", "bulgarian");
};

const englishListener = () => {
  localStorage.setItem("country", "english");
};

turkish.addEventListener("click", turkishListener);
bulgarian.addEventListener("click", bulgarianListener);
english.addEventListener("click", englishListener);

window.onload = () => {
  let currentCountry = localStorage.getItem("country");
  if (currentCountry == "turkish") {
    window.location.href = "anasayfa.html";
  } else if (currentCountry == "bulgarian") {
    window.location.href = "bg/bulgarian.html";
  } else if (currentCountry == "english") {
    window.location.href = "en/homepage.html";
  } 
};
