/*export class User {
    constructor(
      public gender: "male" | "female",
      public name: {
        title: "Mr" | "Mrs";
        first: string;
        last: string;
      },
      public location: {
        street: string;
        city: string;
        state: string;
        country: string;
        postcode: number;
      },
      public login: {
        username: string;
        password: string;
      },
      public email: string,
      public picture: {
        large: string;
        medium: string;
        thumbnail: string;
      }
    ) {}
  
    get fullName() {
      return `${this.name.first} ${this.name.last}`;
    }
  }
  
  export const loadUsers = async (n: number) => {
    const response = await fetch(`https://randomuser.me/api?results=${n}`);
    const { results } = (await response.json()) as { results: any[] };
    const users: Array<User> = [];
    for (const { gender, name, location, login, email, picture } of results) {
      users.push(new User(gender, name, location, login, email, picture));
    }
    return users;
  }; */

  export class Pokemon {
    constructor (
        public name: string,
        public ID: number,
    ) {}

    export const loadPokemons = async (n:number) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1${n}&offset=0.`);
        const { results } = (await response.json()) as { results: any[] };
        const pokemons: Array<Pokemon> = [];
        for(const { name, order} of results) {
            pokemons.push(new Pokemon(name, ID));
        }
        return pokemons;
    }
  };