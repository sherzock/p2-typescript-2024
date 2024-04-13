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
    html +=`<div class="pokemon">
    <img src="${Pokemon.spriteURL}" />
    <div class="data">
      <div class="name">${Pokemon.name}</div>
      <div class="id">${Pokemon.id}</div>
    </div>
  </div>`;
  }
return html;
}

export const render = (pokemons: Array<Pokemon>) => {
  return `
<html>
  ${head("Pokemon List")}
  <body>
    <div class= "item">
      ${renderPokemons(pokemons)}
    </div>
  </body>
</html>`;
};