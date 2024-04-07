export class Pokemon {
  constructor(
    public name: String,
    public order: number,
    public weight: number
  ) {}
}

export const loadPokemons = async (PokemonsAPIURLs: String) => {
  const Pokemons: Array<Pokemon> = [];
  await fetch(`${PokemonsAPIURLs}`)
    .then((response) => response.json())
    .then((datos) => {
      console.log(typeof names);
      Pokemons.push(new Pokemon(datos.name, datos.order, datos.weight));
    });

  console.log(Pokemons);
  return Pokemons;
};

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
