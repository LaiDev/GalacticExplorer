let wrapper = document.querySelector(".wrapper");

let loadMercury = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let mercury = document.createElement("img");
  mercury.src = "../img/Mercury.svg";
  mercury.classList.add("mercuryImg");
  planetWrapper.append(mercury);

  let planetName = document.createElement("h1");
  planetName.innerText = "Mercury";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Mercury is the smallest planet in our solar system and closest to the Sun. It is only slightly larger than Earth's Moon. \n \n Mercury is the fastest planet, zipping around the Sun every 88 Earth days.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadVenus = () => {};

let loadEarth = () => {};

let loadMars = () => {};

let loadJupiter = () => {};

let loadSaturn = () => {};

let loadUranus = () => {};

let loadNeptune = () => {};

//Clears the UI
let clearDom = () => {
  wrapper.innerHTML = "";
};

document.querySelector("#loadMercury").addEventListener("click", loadMercury);
document.querySelector("#loadVenus").addEventListener("click", loadVenus);
document.querySelector("#loadEarth").addEventListener("click", loadEarth);
document.querySelector("#loadMars").addEventListener("click", loadMars);
document.querySelector("#loadJupiter").addEventListener("click", loadJupiter);
document.querySelector("#loadSaturn").addEventListener("click", loadSaturn);
document.querySelector("#loadUranus").addEventListener("click", loadUranus);
document.querySelector("#loadNeptune").addEventListener("click", loadNeptune);
