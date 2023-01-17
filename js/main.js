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

let loadMars = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let mars = document.createElement("img");
  mars.src = "../img/Mars.svg";

  planetWrapper.append(mars);

  let planetName = document.createElement("h1");
  planetName.innerText = "Mars";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "​ Mars is the fourth planet from the Sun. A dusty, cold, desert world with a very thin atmosphere. Mars is also a dynamic planet with seasons, polar ice caps, canyons, extinct volcanoes, and evidence that it was even more active in the past. \n \n Mars is one of the most explored bodies in our solar system, and it's the only planet where we've sent rovers to roam the alien landscape.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadJupiter = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let jupiter = document.createElement("img");
  jupiter.src = "../img/Jupiter.svg";

  planetWrapper.append(jupiter);

  let planetName = document.createElement("h1");
  planetName.innerText = "Jupiter";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. \n \n Jupiter's familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. \n \nJupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadSaturn = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let saturn = document.createElement("img");
  saturn.src = "../img/Saturn.svg";

  planetWrapper.append(saturn);

  let planetName = document.createElement("h1");
  planetName.innerText = "Saturn";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. \n \n It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn's. \n \n Like Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadUranus = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let uranus = document.createElement("img");
  uranus.src = "../img/Uranus.svg";

  planetWrapper.append(uranus);

  let planetName = document.createElement("h1");
  planetName.innerText = "Uranus";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope. \n \n Uranus is an ice giant. Most of its mass is a hot, dense fluid of 'icy' materials – water, methane and ammonia – above a small rocky core.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

let loadNeptune = () => {
  clearDom();

  let planetWrapper = document.createElement("div");
  planetWrapper.classList.add("planetFactsWrapper");
  wrapper.append(planetWrapper);

  let neptune = document.createElement("img");
  neptune.src = "../img/Neptune.svg";

  planetWrapper.append(neptune);

  let planetName = document.createElement("h1");
  planetName.innerText = "Neptune";
  planetWrapper.append(planetName);

  let planetInfo = document.createElement("p");
  planetInfo.innerText =
    "Neptune, the eighth and most distant major planet orbiting our Sun, is dark, cold and whipped by supersonic winds. \n \n More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery.";

  planetWrapper.append(planetInfo);

  let backBtn = document.createElement("a");
  backBtn.innerText = "< Back";
  backBtn.classList.add("backBtn");
  planetWrapper.append(backBtn);

  backBtn.addEventListener("click", () => {
    location.reload();
  });
};

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
