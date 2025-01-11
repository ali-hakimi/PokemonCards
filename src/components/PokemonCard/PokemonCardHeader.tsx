import React from 'react';
import { createUseStyles } from 'react-jss';
import pokemonLogo from '../../assets/pokemon.svg';
import moreLogo from '../../assets/more.svg';
import { Pokemon } from '../../hooks/useGetPokemons';


export const PokemonCardHeader = (props: Pokemon) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img className={classes.logo} src={pokemonLogo} alt="Pokemon name" />
            <div className={classes.title}>{props.name}</div>
            <div></div>
            <button className={classes.moreActions}>{
                <img alt="" className={classes.moreActionsIcon} src={moreLogo}></img>}</button>
        </div>
    );
};


const useStyles = createUseStyles(
    {
        root: {
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: 'auto 1fr auto auto',
        },
        logo: {
            width: '16px',
            height: '16px',
            display: 'inline-block',
            objectFit: 'contain',
            marginRight: '8px',
        },
        title: {
            display: 'inline-block',
            margin: '0 8px',
            color: '#fff',
            fontSize: '14px',
            fontFamily: 'Segoe UI',
            fontWeight: '600',
            textAlign: 'left',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
        },
        moreActions: {
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '1px 6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',

        },
        moreActionsIcon: {
            width: '16px',
            height: '16px',
            objectFit: 'contain',
        }
    },
    { name: 'PokemonCardHeader' }
);