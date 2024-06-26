import { writeFile } from "fs";
import { Pokemon } from "./pokemons.js";
import { capitalizeFirstLetter } from "./helper.js";
import { padNumber } from "./helper.js";

//This function renders the Head of the html page
const head = (title: string) => `
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" />
  <title>${title}</title>
</head>`;

//This functions Renders the Pokemon info for the index.html page
const renderPokemons = (Pokemons: Array<Pokemon>) => {
  let html = "";

  for (const Pokemon of Pokemons) {
    html += `
    <a class="pokemon ${renderTypesClass(Pokemon)}" href="PokemonPages/${
      Pokemon.name
    }.html">
        <img src="${Pokemon.spriteURL}" />
        <div class="data">
          <div class="name">${capitalizeFirstLetter(Pokemon.name)}</div>
          <div class="id">Nº ${padNumber(Pokemon.id, 4)}</div>
          ${renderTypes(Pokemon)}
        </div>
    </a>`;
  }
  return html;
};


//This function renders the index.html page
export const render = (pokemons: Array<Pokemon>) => {
  return `
<html>
  ${head("Pokemon List")}
  <body>
    <header>
      <div class="logo">
        <img src="imgs/logo.svg" draggable="false"/>
      </div>
    </header>
    <div class="filter">
      <label for="selection">Filter:</label>

      <select name="Types" id="selection" onchange="filterTypes()">
        <option value="all">All</option>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="shadow">Shadow</option>
        <option value="unknown">Unknown</option>
    </select>
    <script>
      let filterTypes = () =>{
        let element = document.getElementById("selection");
        let type = element.options[element.selectedIndex].text;
        let itemToShow = document.getElementsByClassName(type);
        let Pokemons = document.getElementsByClassName('Pokemon');
        if(type === 'All')
        {
          for(let i = 0; i < Pokemons.length; i++)
          {
            Pokemons[i].style.display = '';
          }
        }
        else
        {
          for(let i = 0; i < Pokemons.length; i++)
          {
            Pokemons[i].style.display = 'none';
          }
          for(let i = 0; i < itemToShow.length; i++)
          {
              itemToShow[i].style.display = '';
          }
        }
    }
    </script>
    </div>
    <div class= "item">
      ${renderPokemons(pokemons)}
    </div>
    <footer>
    </footer>
  </body>
</html>`;
};


//THis function renders the types info of a pokemon
const renderTypes = (pokemon: Pokemon) => {
  let html = `<div class="types"> `;
  for (let i = 0; i < pokemon.types.length; i++) {
    html += `
    <div class="typeMargin ${pokemon.types[i]}">${pokemon.types[i]}</div>`;
  }
  html += "</div>";
  return html;
};

//This function renders the types for the name of the class
const renderTypesClass = (pokemon: Pokemon) => {
  let html = "";
  for (let i = 0; i < pokemon.types.length; i++) {
    html += ` ${pokemon.types[i]}`;
  }
  return html;
};


//this function renders the each HTML pokemon page
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

//this function renders the information about each pokemon for each pokemon html page
const renderPokemonInfo = (pokemon: Pokemon) => {
  let html = "";

  html += `
    <div class="pokemonInfo" href="PokemonPages/${pokemon.name}.html">
        <div class="name">${capitalizeFirstLetter(pokemon.name)}</div>
        <img src="${pokemon.spriteURL}" />
        <div class="dataInfo">
          <div class="id"> Nº ${padNumber(pokemon.id, 4)}</div>
          ${renderTypes(pokemon)}
          <div class="statistics">
            <table>
              <tr>
                <th>Weight</th>
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
};
