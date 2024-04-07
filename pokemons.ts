export class Pokemon {
  constructor(
    public name: String,
    public id: number,
    public weight: number,
    public types: Array<String>,
    public spriteURL: String
  ) {}
}

//This function takes a API pokemon URL and transforms it in to an object of class pokemon
export const loadPokemons = async (PokemonsAPIURLs: String) => {
  const Pokemons: Array<Pokemon> = [];
  await fetch(`${PokemonsAPIURLs}`)
    .then((response) => response.json())
    .then((data) => {

      let Poketypes = [];
      for (let i = 0; i < data.types.length; i++)
        Poketypes.push(data.types[i].type.name);

      Pokemons.push(new Pokemon(data.name, data.id, data.weight, Poketypes, data.sprites.front_default));
    });
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
