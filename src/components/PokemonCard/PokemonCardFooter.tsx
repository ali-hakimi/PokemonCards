import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';


export const PokemonCardFooter = (props: Pokemon) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <div className={classes.numberFooter}>{props.number}</div>
        </div>
    );
};


const useStyles = createUseStyles(
    {
        root: {
            width: '100%',
            textAlign: 'center',
            boxSizing: 'border-box',
        },
        numberFooter: {
            fontSize: '18px',
            padding: '7px',
            lineHeight: '18px',
            color: '#fff',
            fontWeight: 'bold',
        },
    },
    { name: 'PokemonCardFooter' }
);