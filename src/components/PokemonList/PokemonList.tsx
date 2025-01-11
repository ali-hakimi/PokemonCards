import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { PokemonCard } from '../../components';

export const PokemonList = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const { pokemons, loading } = useGetPokemons();

  const filteredPokemons = pokemons.filter(pkmn =>
    pkmn.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className={classes.root}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Search Pokemon"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className={classes.cardContainer}>
        {filteredPokemons.map((pkmn, index) => (
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
    searchInput: {
      margin: '16px',
      padding: '8px',
      fontSize: '16px',
      width: '300px',
      background: '#ffd6ee',
      color: '#000',
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
