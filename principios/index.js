const renderSection = document.getElementById("app");
const buttonPk = document.getElementById("load-pokemons");
const ayuda = document.getElementById("ayuda");

const inputId = document.getElementById("input-id");
const formulario = document.getElementById("formularioBusqueda")

const cargarPokemones = async () => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon");
  const response = await request.json();

  renderSection.innerHTML = `
    <h1>Pokemones</h1>
    <ul>
      ${response.results.map((pokemon) => `<li>${pokemon.name}</li>`).join("")}
    </ul>
  `;
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Hola mundo");
  console.log(inputId);
});

// buttonPk.addEventListener("mouseover", () => {
//   ayuda.innerHTML = "Este botón sirve para cargar los pokemones";
// })
// buttonPk.addEventListener("mouseout", () => {
//   ayuda.innerHTML = "";
// });

// buttonPk.addEventListener("click", () => {
//   cargarPokemones();
// });

// main();
