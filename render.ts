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
          <div class="name">${capitalizeFirstLetter(Pokemon.name)}</div>
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
        <div class="itemInfo">
          ${renderPokemonInfo(pokemon)}
          <a href="../index.html" div class= "button">
          Back
          </a>
        </div>
      </body>
    </html>
    `;
    return html;
};

const renderPokemonInfo = (pokemon: Pokemon) => {
  let html = "";

    html +=`
    <div class="pokemonInfo" href="PokemonPages/${pokemon.name}.html">
        <div class="name">${capitalizeFirstLetter(pokemon.name)}</div>
        <img src="${pokemon.spriteURL}" />
        <div class="dataInfo">
          <div class="id">Id: Nª${pokemon.id}</div>
          ${renderTypes(pokemon)}
          <div class="statistics">
            <table>
              <tr>
                <th>Wheight</th>
                <th>Height</th>
              </tr>
              <tr>
                <td>${pokemon.weight} kg</td>
                <td>${pokemon.height} cm</td>
              </tr>
            </table>
          </div>
          <input type="button" class="cry" value="Cry" onclick="play()">
          <audio id="audio" src="${pokemon.cry}"></audio>
          <script>
            function play() {
              var audio = document.getElementById("audio");
              audio.play();
            }
          </script>
        </div>
    </div>`;

  return html;
}


const capitalizeFirstLetter = (string: String) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}