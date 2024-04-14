//Pokemon class
export class Pokemon {
  constructor(
    public name: String,
    public id: number,
    public weight: number,
    public height: number,
    public types: Array<String>,
    public spriteURL: String,
    public cry: string
  ) {}
}

//This function takes a API pokemon URL and transforms it in to an object of class pokemon
export const loadPokemons = async (PokemonsAPIURLs: Array<String>) => {
  const Pokemons: Array<Pokemon> = [];
  for (let i = 0; i < PokemonsAPIURLs.length; i++) {
    await fetch(`${PokemonsAPIURLs[i]}`)
      .then((response) => response.json())
      .then((data) => {
        let Poketypes = [];
        for (let i = 0; i < data.types.length; i++)
          Poketypes.push(data.types[i].type.name);

        Pokemons.push(
          new Pokemon(
            data.name,
            data.id,
            data.weight,
            data.height,
            Poketypes,
            data.sprites.front_default,
            data.cries.latest
          )
        );
      });
  }

  return Pokemons;
};

//This function makes a list of the API urls of pokemons that must be called, the parameter is the number of pokemons that will be callled
export const loadPokemonURLS = async (n: number) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${n}&offset=0.`
  );
  const { results } = (await response.json()) as { results: any[] };

  const PokemonsAPIURLS: Array<String> = [];
  for (const { url } of results) {
    PokemonsAPIURLS.push(url);
  }
  return PokemonsAPIURLS;
};

//This function lets us play the pokemon audio
export const playAudio = (pokemon: Pokemon) => {
  const audio = new Audio(pokemon.cry);
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });
};
