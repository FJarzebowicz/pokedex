import Image from "next/image";
import Card from "../ui/Card";
import classes from "./PokemonItem.module.css";
import "@fontsource/permanent-marker";
import Link from "next/link";

export default function PokemonItem({ pokemon, index }) {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  //   const router = useRouter();

  //   function showDetailsHandler() {
  //     router.push("/" + props.name);
  //   }

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <li className={classes.item}>
        <Card>
          <div className={classes.titleContainer}>
            <Image
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
              width={150}
              height={150}
              alt="pokemon photo"
            />
            <p>#{pokeIndex}</p>
            <h3 className={classes.title}>{pokemon.name}</h3>
          </div>
        </Card>
      </li>
    </Link>
  );
}

// export async function loadInfo(props) {
//   const res = await fetch(props.url);
//   const data = await res.json();
//   return data;
// }

// export async function getStaticProps() {
//   const data = await loadInfo();
//   const pokemonsData = data.results;
//   console.log(pokemonsData);

//   return {
//     props: {
//       pokemonsData: pokemonsData.map((pokemon) => ({
//         baseExperience: pokemon.baseExperience,
//         height: pokemon.height,
//         weight: pokemon.weight,
//         species: pokemon.species,
//         photo: pokemon.sprites.front_shiny,
//       })),
//     },
//   };
// }
