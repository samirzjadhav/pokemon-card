const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
  // Generate a random number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;
  // Combine the pokeapi url with pokemon id
  const finalUrl = url + id;
  // Fetch generated URL
  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    });
};

//Generate Card

let generateCard = (data) => {
  // Get necessary data and assign it to variables
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  console.log(pokeName);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpecialAttack = data.stats[3].base_stat;
  const statSpecialDefense = data.stats[4].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const ability0 = data.abilities[0].ability.name;
  const ability1 = data.abilities[1].ability.name;
  const forms = data.forms[0].name;
  const type0 = data.types[0].name;

  // Set themeColor based on pokemon type
  const themeColor = typeColor[data.types[0].type.name];
  console.log(themeColor);
  card.innerHTML = `
    <p class="hp">
      <span>HP</span>
      ${hp}
    </p>
    <img src=${imgSrc} />
    <h2 class="poke-name">${pokeName}</h2>
    <div class="types"></div>
    <div class="stats-container flex flex-col gap-[12px]">
      <h3 class="text-lg font-semibold uppercase">Stats</h3>
      <div class="stats">
        <div>
          <h3>${statAttack}</h3>
          <p>Attack</p>
        </div>
        <div>
          <h3>${statDefense}</h3>
          <p>Defense</p>
        </div>
        <div>
          <h3>${statSpecialAttack}</h3>
          <p>SP Attack</p>
        </div>
        <div>
          <h3>${statSpecialDefense}</h3>
          <p>SP Defense</p>
        </div>
        <div>
          <h3>${statSpeed}</h3>
          <p>Speed</p>
        </div>
      </div>
      <h3 class="text-lg font-semibold uppercase">Abilities</h3>
      <div class="flex gap-[12px]">
        <h3>${ability0}</h3>
        <h3>${ability1}</h3>
      </div>
    </div>
  `;
  appendTypes(data.types);
  styleCard(themeColor);
};
let appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement("SPAN");
    span.textContent = item.type.name;
    document.querySelector(".types").appendChild(span);
  });
};
let styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.backgroundColor = color;
  });
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
