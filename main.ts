/* import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./users.js";

const users = await loadUsers(100);
const html = render(users);
await writeFile('users.html', html); */

import { writeFile } from "fs/promises";
import { Pokemon, loadPokemonURLS } from "./pokemons.js";
import { loadPokemons } from "./pokemons.js";
import { render } from "./render.js";


const PokemonURLS = await loadPokemonURLS(10);

//let Pokemons = [];

for(let i = 0; i < PokemonURLS.length; i++)
{
   let Pokemons = await loadPokemons(PokemonURLS[i]);
   console.log(Pokemons);
   const html = render(Pokemons);
   await writeFile('index.html', html);
}


//console.log(PokemonURLS);
//console.log(Pokemons);
//const html = render(Pokemons);