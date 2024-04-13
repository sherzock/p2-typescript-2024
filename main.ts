import { writeFile } from "fs/promises";
import { Pokemon, loadPokemonURLS } from "./pokemons.js";
import { loadPokemons } from "./pokemons.js";
import { render } from "./render.js";
import { writePokemonPage } from "./render.js";

const PokemonURLS = await loadPokemonURLS(100);

let Pokemons = await loadPokemons(PokemonURLS);
console.log(Pokemons);
const html = render(Pokemons);
await writeFile('index.html', html);

for(const Pokemon of Pokemons)
{
   const html = writePokemonPage(Pokemon);
   await writeFile(`PokemonPages/${Pokemon.name}.html`, html);
}