import { writeFile } from "fs/promises";
import { Pokemon, loadPokemonURLS } from "./pokemons.js";
import { loadPokemons } from "./pokemons.js";
import { render } from "./render.js";
import { writePokemonPage } from "./render.js";


//load the pokemon urls into an array (Change the value to load more or less pokemons)
const PokemonURLS = await loadPokemonURLS(100);

//Load the Pokemon info into an array
let Pokemons = await loadPokemons(PokemonURLS);

//Render the index.html page with the pokemon info
const html = render(Pokemons);
await writeFile("index.html", html);

//Go through pokemon array and render the Html pages for each of them
for (const Pokemon of Pokemons) {
  const html = writePokemonPage(Pokemon);
  await writeFile(`PokemonPages/${Pokemon.name}.html`, html);
}
