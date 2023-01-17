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

let loadVenus = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let venus = document.createElement("img");
  venus.src = "../img/Venus.svg";

  planetWrapper.append(venus);

  let planetName = document.createElement("h1");
  planetName.innerText = "Venus";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Venus is the second planet from the Sun and is Earth’s closest planetary neighbor. It’s often called Earth’s twin because it’s similar in size and density. \n \n Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadEarth = () => {
    clearDom();

    let planetWrapper = document.createElement("div");
    planetWrapper.classList.add("planetFactsWrapper");
    wrapper.append(planetWrapper);
  
    let earth = document.createElement("img");
    earth.src = "../img/Earth.svg";
  
    planetWrapper.append(earth);
  
    let planetName = document.createElement("h1");
    planetName.innerText = "Earth";
    planetWrapper.append(planetName);
  
    let planetInfo = document.createElement("p");
    planetInfo.innerText =
      "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. \n \n While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.";
  
    planetWrapper.append(planetInfo);
  
    let backBtn = document.createElement("a");
    backBtn.innerText = "< Back";
    backBtn.classList.add("backBtn");
    planetWrapper.append(backBtn);
  
    backBtn.addEventListener("click", () => {
      location.reload();
    });
};

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
