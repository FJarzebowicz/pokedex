import PokemonItem from "./PokemonItem";
import { v4 as uuidv4 } from "uuid";
import classes from "./PokemonList.module.css";

export default function PokemonList({ pokemons, offset }) {
  return (
    <ul className={classes.list}>
      {pokemons.map((monster, index) => (
        <PokemonItem
          key={index}
          //   id={pokemon.id}
          pokemon={monster}
          index={index + offset}
          //   height={pokemon.height}
          //   weight={pokemon.weight}
          //   photo={pokemon.photo}
        />
      ))}
    </ul>
  );
}
