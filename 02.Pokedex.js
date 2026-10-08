const axios = require("axios");
const readline = require("node:readline");

// Create a readline "interface" connected to the keyboard (process.stdin)
// and the screen (process.stdout). This object (rl) is what we use to ask
// questions and receive answers in the console.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// input(question): asks the user a question in the terminal and waits for
// their answer. It wraps rl.question in a Promise so we can use "await" and
// write the code in a clean, top-to-bottom style instead of nested callbacks.
// It returns the text the user typed.
function input(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

const API_BASE = "https://pokeapi.co/api/v2";

const clearConsole = () => {
  console.clear();
};

const getPokemon = async (id) => {
  const url = API_BASE.endsWith("/") ? API_BASE : API_BASE + "/";
  const response = await axios.get(`${url}pokemon/${id}`);
  return response.data;
};

const getPokemonList = async (offset = 0, limit = 10) => {
  const url = API_BASE.endsWith("/") ? API_BASE : API_BASE + "/";
  const response = await axios.get(
    `${url}pokemon?offset=${offset}&limit=${limit}`,
  );
  return response.data.results;
};

const printPokemonList = async () => {
  clearConsole();
  console.log("Cargando lista de pokemones...");
  const pokemonList = await getPokemonList();
  clearConsole();
  console.log("Lista de pokemones:");
  for (const pokemon of pokemonList) {
    console.log(`* ${pokemon.name.toUpperCase()}`);
  }
  await input("Presione Enter para continuar...");
};

const printMenu = (isInvalidOption, option) => {
  if (isInvalidOption) {
    console.log(`La opción '${option}' ingresada no es válida`);
  }
  console.log("================================================");
  console.log("1. Ver lista de pokemones");
  console.log("2. Ver información de un pokemon");
  console.log("3. Salir");
  console.log("================================================");
};

const main = async () => {
  clearConsole();
  // "option" stores the last choice; "isInvalidOption" remembers whether the
  // previous choice was wrong so the menu can show the warning.
  let option = "";
  let isInvalidOption = false;
  while (true) {
    printMenu(isInvalidOption, option);
    option = await input("Ingrese la opción: ");
    // Option 1: register a new user.
    if (option === "1") {
      await printPokemonList();
      clearConsole();
      isInvalidOption = false;
      continue; // go back to the top of the loop (show the menu again)
    }
    // Option 2: show the full attendance list.
    if (option === "2") {
      clearConsole();
      isInvalidOption = false;
      continue;
    }

    if (option === "3") {
      process.exit(0);
      break;
    }
    // Anything else: mark the choice as invalid so the menu warns the user.
    if (option !== "1" && option !== "2" && option !== "3") {
      isInvalidOption = true;
      clearConsole();
      continue;
    }
  }
};

main();
