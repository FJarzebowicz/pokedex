import { Fragment, useContext, useState } from "react";
import Head from "next/head";
import PokemonList from "../components/pokemons/PokemonList";

export default function Home({ ininitalPokemon }) {
  const [pokemon, setPokemon] = useState(ininitalPokemon);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async (url, next) => {
    const response = await fetch(url);
    const nextPokemon = await response.json();

    setOffset(next ? offset + 20 : offset - 20);

    setPokemon(nextPokemon);
  };

  return (
    <Fragment>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Explore world of pokemons" />
      </Head>
      <PokemonList pokemons={pokemon.results} offset={offset} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5vh",
          marginTop: "1vh",
        }}
      >
        <button
          disabled={!pokemon.previous}
          style={{
            borderRadius: "25px",
            border: "none",
            fontFamily: "Permanent Marker",
            width: "10vw",
            height: "7vh",
            fontSize: "30px",
            marginRight: "2vw",
            boxShadow: "7px 7px 13px -8px rgba(66, 68, 90, 1)",
          }}
          onClick={() => fetchPokemon(pokemon.previous, false)}
        >
          prev
        </button>
        <button
          disabled={!pokemon.next}
          style={{
            borderRadius: "25px",
            border: "none",
            fontFamily: "Permanent Marker",
            width: "10vw",
            height: "7vh",
            fontSize: "30px",
            boxShadow: "7px 7px 13px -8px rgba(66, 68, 90, 1)",
          }}
          onClick={() => fetchPokemon(pokemon.next, true)}
        >
          next
        </button>
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  const ininitalPokemon = await data;

  return {
    props: {
      ininitalPokemon,
    },
  };
}

// export async function loadPokemons() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=300");
//   const data = await res.json();
//   const pokemons2 = await data;
//   const pokemons = await pokemons2.results;
//   return pokemons;
// }

// async function getMoreData(pokemons) {
//   const fullPokemons = [];

//   const data = await Promise.all(
//     pokemons.map(async (item) => {
//       const url = item.url;
//       const res = await fetch(url);
//       const json = await res.json();
//       const singlePokemon = {
//         name: json.name,
//         height: json.height,
//         id: json.id,
//         weight: json.weight,
//         photo: json.sprites.front_shiny,
//       };
//       fullPokemons.push(singlePokemon);
//     })
//   );
//   // pokemonContext.setPokemons(fullPokemons);
//   return fullPokemons;
// }

// export async function getStaticProps() {
//   const pokemons = await loadPokemons();
//   const pokemonsFull = await getMoreData(pokemons);
//   // console.log(pokemonsFull);

//   return {
//     props: {
//       // pokemons: pokemons.map((pokemon) => ({
//       //   name: pokemon.name,
//       //   url: pokemon.url,
//       // })),
//       pokemons: pokemonsFull,
//     },
//     revalidate: 1,
//   };
// }
