/* import { writeFile } from "fs/promises";
import { render } from "./render.js";
import { loadUsers } from "./users.js";

const users = await loadUsers(100);
const html = render(users);
await writeFile('users.html', html); */

import { writeFile } from "fs/promises";
import { loadPokemonURLS } from "./pokemons.js";

const PokemonURLS = await loadPokemonURLS(100000);

console.log(PokemonURLS);
//const html = render(PokemonURLS);
//await writeFile('index.html', html);