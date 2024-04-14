import { writeFile } from "fs";
import {Pokemon} from "./pokemons.js";

const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" />
  <title>${title}</title>
</head>`;

const renderPokemons = (Pokemons: Array<Pokemon>) => {
  let html = "";

  for(const Pokemon of Pokemons) {
    html +=`
    <a class="pokemon" href="PokemonPages/${Pokemon.name}.html">
        <img src="${Pokemon.spriteURL}" />
        <div class="data">
          <div class="name">${Pokemon.name}</div>
          <div class="id">Id: Nª${Pokemon.id}</div>
          ${renderTypes(Pokemon)}
        </div>
    </a>`;
  }
return html;
}

export const render = (pokemons: Array<Pokemon>) => {
  return `
<html>
  ${head("Pokemon List")}
  <body>
    <header>
      <div class="logo">
        <img src="imgs/logo.svg"/>
      </div>
    </header>
    <div class= "item">
      ${renderPokemons(pokemons)}
    </div>
    <footer>
    </footer>
  </body>
</html>`;
};

const renderTypes = (pokemon: Pokemon) => {
  let html = `<div class="types"> `;
  for(let i=0; i < pokemon.types.length; i++)
  {
    console.log(pokemon.types[i]);
    html += `
    <div class="typeMargin ${pokemon.types[i]}">${pokemon.types[i]}</div>`;
  }
  html += "</div>";
  return html;
};


export const writePokemonPage = (pokemon: Pokemon) => {
    let html = `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="../style.css" />
        <title>${pokemon.name}</title>
      </head>
      <body>
        <div class= "item">
          ${renderPokemonInfo(pokemon)}
        </div>
        <a href="../index.html" div class= "pokemon">
        Back
        </a>
        <footer>
        </footer>
      </body>
    </html>
    `;
    return html;
};

const renderPokemonInfo = (pokemon: Pokemon) => {
  let html = "";

    html +=`
    <a class="pokemon" href="PokemonPages/${pokemon.name}.html">
        <img src="${pokemon.spriteURL}" />
        <div class="data">
          <div class="name">${pokemon.name}</div>
          <div class="id">Id: Nª${pokemon.id}</div>
          ${renderTypes(pokemon)}
        </div>
    </a>`;

  return html;
}