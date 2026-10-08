const renderSection = document.getElementById("app");

const main = async () => {
  const request = await fetch("https://pokeapi.co/api/v2/pokemon");
  const response = await request.json();

  renderSection.innerHTML = `
    <h1>Pokemones</h1>
    <ul>
      ${response.results.map((pokemon) => `<li>${pokemon.name}</li>`).join("")}
    </ul>
  `;
};

main();
