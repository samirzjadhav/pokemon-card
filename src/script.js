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

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokemon = () => {
  // Generate a Random Number Between 1 to 150
  let id = Math.floor(Math.random() * 150) + 1;
  console.log(id);

  // Combine the pokeapi url with pokemon id
  const fineUrl = url + id;

  // Fetch generated Url
  fetch(fineUrl)
    .then((response) => response.json())
    .then((data) => {
      // generateCard(data);
      console.log(data);
      const type = data.types[0].type.name;
      console.log(type);
    });
};

getPokemon();

// Generate Card

let generateCard = (data) => {
  getPokemon();
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  console.log(pokeName);
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpecialAttact = data.stats[3].base_stat;
  const statSpecialDefense = data.stats[4].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const ability0 = data.abilities[0].ability.name;
  const ability1 = data.abilities[1].ability.name;
  const forms = data.forms[0].name;
  const type0 = data.types[0].name;
  const type1 = data.types[1].type.name;
};
