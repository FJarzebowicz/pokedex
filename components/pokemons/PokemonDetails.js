import { Fragment } from "react";
import Image from "next/image";
import classes from "./PokemonDetails.module.css";
import "@fontsource/permanent-marker";
import { ProgressBar } from "react-rainbow-components";

export default function PokemonDetails({ name, id, pokemon }) {
  console.log(pokemon.types);
  const pokeIndex = ("000" + id).slice(-3);
  const pokeName = name[0].toUpperCase() + name.slice(1);

  const renderTypes = () =>
    pokemon.types.map((item) => (
      <li key={item.slot} className={classes.singleType}>
        {item.type.name}
      </li>
    ));
  const renderStats = () =>
    pokemon.stats.map((stat, index) => (
      <div key={index}>
        <div className={classes.statsText}>{stat.stat.name}</div>
        {/* <div style={{ width: `${stat.base_stat}%` }}>: {stat.base_stat}</div> */}
        <ProgressBar
          variant="success"
          value={stat.base_stat}
          size="large"
          style={{ width: "30vw", height: "5vh" }}
        />
      </div>
    ));

  console.log(renderTypes());
  return (
    <Fragment>
      <div className={classes.mainContainer}>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
          width={400}
          height={400}
          alt="pokemon photo"
        />

        <div className={classes.contentContainer}>
          <h1 className={classes.name}>
            {pokeName} <span className={classes.pokeIndex}>#{pokeIndex}</span>
          </h1>

          <div className={classes.detailsContainer}>
            <div className={classes.allTypesDetailsContainer}>
              <div className={classes.typesLabel}>Types</div>
              <ul className={classes.typesContainer}> {renderTypes()}</ul>
            </div>
            <div className={classes.statsContainer}>{renderStats()}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
