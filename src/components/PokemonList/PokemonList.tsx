import React from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonCard } from '../../components';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();

  return (
    <div className={classes.root}>
      {loading && <div>Loading...</div>}
      <div className={classes.cardContainer}>
        {pokemons.map((pkmn, index) => (
          <PokemonCard key={index} {...pkmn} />
        ))}
      </div>
    </div>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px',
      justifyContent: 'center',
      padding: '16px',
    },
  },
  { name: 'PokemonList' }
);
