import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';
import { PokemonCardFooter } from './PokemonCardFooter';
import { PokemonCardHeader } from './PokemonCardHeader';
import { PokemonCardContent } from './PokemonCardContent';

export const PokemonCard = (props: Pokemon) => {
    const classes = useStyles();
    const [hideDialog, setHideDialog] = useState(true);

    const toggleHideDialog = () => setHideDialog(!hideDialog);

    return (
        <div className={classes.root} onClick={toggleHideDialog}>
            <PokemonCardHeader {...props} />
            <PokemonCardContent {...props} />
            <PokemonCardFooter {...props} />
        </div>
    );
};


const useStyles = createUseStyles(
    {
        root: {
            width: '300px',
            height: '304px',
            display: 'grid',
            gridTemplateRows: '48px 224px 32px',
            alignContent: 'center',
            textAlign: 'center',
            padding: '0 16px',
            boxSizing: 'border-box',
            background: 'linear-gradient(to bottom, #ff696929, #ff00004d)', // Gradient from bright pink to bright magenta
            overflow: 'hidden',
            borderRadius: '8px',
        },
        textBase: {
            color: '#000000',
            fontFamily: 'Segoe UI',
            textAlign: 'left',
            overflow: 'hidden',
            transition: 'opacity 0.6s ease-in-out', // Smooth transition
            padding: '0 16px',
        },
        bold: {
            fontWeight: 'bold',
            color: '#000000',
        },
    },
    { name: 'PokemonCard' }
);