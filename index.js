const heroes = [
  {
    name: "Spider-Man",
    power: 85,
    universe: "Marvel",
    isActive: true,
    isAlien: false,
  },
  {
    name: "Batman",
    power: 80,
    universe: "DC",
    isActive: false,
    isAlien: false,
  },
  {
    name: "Wonder Woman",
    power: 90,
    universe: "DC",
    isActive: true,
    isAlien: true,
  },
  {
    name: "Iron Man",
    power: 88,
    universe: "Marvel",
    isActive: true,
    isAlien: false,
  },
  {
    name: "Captain Marvel",
    power: 95,
    universe: "Marvel",
    isActive: false,
    isAlien: true,
  },
  {
    name: "Flash",
    power: 78,
    universe: "DC",
    isActive: true,
    isAlien: false,
  },
  {
    name: "Thor",
    power: 92,
    universe: "Marvel",
    isActive: true,
    isAlien: true,
  },
  {
    name: "Green Lantern",
    power: 83,
    universe: "DC",
    isActive: true,
    isAlien: true,
  },
  {
    name: "Black Panther",
    power: 87,
    universe: "Marvel",
    isActive: false,
    isAlien: false,
  },
  {
    name: "Martian Manhunter",
    power: 91,
    universe: "DC",
    isActive: true,
    isAlien: true,
  },
];

function displayHeroesResult(heroes, challengeNum, description, codeExample) {
  const output = document.getElementById("output");

  const challengeDiv = document.createElement("div");
  challengeDiv.className = "challenge";

  const title = document.createElement("h2");
  title.textContent = `Challenge ${challengeNum}`;
  challengeDiv.appendChild(title);

  const desc = document.createElement("p");
  desc.textContent = description;
  challengeDiv.appendChild(desc);

  const code = document.createElement("code");
  code.textContent = codeExample;
  challengeDiv.appendChild(code);

  const list = document.createElement("ul");
  list.className = "hero-list";

  heroes.forEach((hero) => {
    const item = document.createElement("li");
    item.textContent = `${hero.name} (Power: ${hero.power}, Universe: ${hero.universe})`;
    list.appendChild(item);
  });

  challengeDiv.appendChild(list);

  const count = document.createElement("p");
  count.innerHTML = `<span class="count">${heroes.length}</span> heroes found`;
  challengeDiv.appendChild(count);

  output.appendChild(challengeDiv);
}

const activeHeroes = heroes.filter((hero) => hero.isActive);
displayHeroesResult(
  activeHeroes,
  1,
  "Get all active heroes (isActive === true).",
  "const activeHeroes = heroes.filter(hero => hero.isActive);"
);

const marvelHeroes = heroes.filter((hero) => hero.universe === "Marvel");
displayHeroesResult(
  marvelHeroes,
  2,
  "Get all heroes from the Marvel universe.",
  'const marvelHeroes = heroes.filter(hero => hero.universe === "Marvel");'
);

const alienHeroes = heroes.filter((hero) => hero.isAlien);
displayHeroesResult(
  alienHeroes,
  3,
  "Get all alien heroes (isAlien === true).",
  "const alienHeroes = heroes.filter(hero => hero.isAlien);"
);

const powerfulHeroes = heroes.filter((hero) => hero.power >= 90);
displayHeroesResult(
  powerfulHeroes,
  4,
  "Get all heroes with power greater than or equal to 90.",
  "const powerfulHeroes = heroes.filter(hero => hero.power >= 90);"
);

const activeHumanHeroes = heroes.filter(
  (hero) => hero.isActive && !hero.isAlien
);
displayHeroesResult(
  activeHumanHeroes,
  5,
  "Get all human and active heroes.",
  "const activeHumanHeroes = heroes.filter(hero => hero.isActive && !hero.isAlien);"
);

const activeDCPowerfulHeroes = heroes.filter(
  (hero) => hero.isActive && hero.universe === "DC" && hero.power >= 85
);
displayHeroesResult(
  activeDCPowerfulHeroes,
  6,
  "Get active heroes from the DC universe with power ≥ 85.",
  'const activeDCPowerfulHeroes = heroes.filter(hero => \n  hero.isActive && hero.universe === "DC" && hero.power >= 85\n);'
);

const inactiveHumanHeroes = heroes.filter(
  (hero) => !hero.isActive && !hero.isAlien
);
displayHeroesResult(
  inactiveHumanHeroes,
  7,
  "Get all inactive AND non-alien heroes.",
  "const inactiveHumanHeroes = heroes.filter(hero => !hero.isActive && !hero.isAlien);"
);

const manHeroes = heroes.filter((hero) =>
  hero.name.toLowerCase().includes("man")
);
displayHeroesResult(
  manHeroes,
  8,
  'Get heroes whose name contains "man" (case insensitive).',
  'const manHeroes = heroes.filter(hero => \n  hero.name.toLowerCase().includes("man")\n);'
);

const oddPowerHeroes = heroes.filter((hero) => hero.power % 2 !== 0);
displayHeroesResult(
  oddPowerHeroes,
  9,
  "Get heroes whose power is an odd number.",
  "const oddPowerHeroes = heroes.filter(hero => hero.power % 2 !== 0);"
);

const longNameHeroes = heroes.filter((hero) => hero.name.length > 10);
displayHeroesResult(
  longNameHeroes,
  10,
  "Get heroes whose name is more than 10 characters long.",
  "const longNameHeroes = heroes.filter(hero => hero.name.length > 10);"
);
