import { Fragment } from "react";
import PokemonDetails from "../../components/pokemons/PokemonDetails";
import Head from "next/head";

export default function pokemonDetails(props) {
  console.log(props.pokemon.name);
  return (
    <Fragment>
      <Head>
        <title>{props.pokemon.name}</title>
        {/* <meta name="description" content="xxx" /> */}
      </Head>
      <PokemonDetails
        // image={props.pokemonData.photo}
        name={props.pokemon.name}
        id={props.pokemon.id}
        pokemon={props.pokemon}
        // weight={props.pokemonData.weight}
        // height={props.pokemonData.height}
      />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${context.query.name}`
  );
  console.log(`here is c.q.n ${context.query.name} `);
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}

// export async function loadPokemons() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=300");
//   const data = await res.json();
//   const pokemons = await data.results;
//   //   console.log(` from loadingpokemons ${pokemons}`);
//   return pokemons;
// }

// async function getId(pokemons) {
//   // const pokemonContext = usePokemonContext();
//   // const pokemons = pokemonContext.pokemons;
//   const fullPokemons = [];

//   const data = await Promise.all(
//     pokemons.map(async (item) => {
//       const url = item.url;
//       const res = await fetch(url);
//       const json = await res.json();
//       const singlePokemon = {
//         name: json.name,
//         id: json.id,
//         url: json.url,
//       };
//       fullPokemons.push(singlePokemon);
//     })
//   );
//   //   console.log(`From getId ${fullPokemons}`);
//   return fullPokemons;
// }

// export async function getStaticPaths() {
//   const response = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/`
//   );
//   const pokemon = await response.json().results;

//   return {
//     fallback: "blocking",
//     paths: pokemon.map((pokemon) => ({
//       params: { pokemonId: pokemon.id.toString() },
//     })),
//   };
// }

// export async function getStaticProps(context) {
//   const pokemonId = await context.params.pokemonName;
//   console.log(` POKEMON ID ${pokemonId}`);
//   const pokemons = await loadPokemons();

//   const fullPokemons = [];

//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
//   console.log(`here is response in get static props ${res}`);

//   const data = await res.json();
//   console.log(`here is data ${data}`);
//   const pokemonData = await data.results;

//   return {
//     props: {
//       pokemonData,
//     },
//   };
// }
