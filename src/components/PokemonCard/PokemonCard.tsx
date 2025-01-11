import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { PokemonCardContent } from './PokemonCardContent';
import { PokemonCardFooter } from './PokemonCardFooter';
import { PokemonCardHeader } from './PokemonCardHeader';
import { Dialog, DialogType, DialogFooter, PrimaryButton, DefaultButton } from '@fluentui/react';
import { Pokemon } from '../../hooks/useGetPokemons';

export const PokemonCard = (props: Pokemon) => {
    const classes = useStyles();
    const [hideDialog, setHideDialog] = useState(true);

    const toggleHideDialog = () => setHideDialog(!hideDialog);

    return (
        <div className={classes.root} onClick={toggleHideDialog}>
            <PokemonCardHeader {...props} />
            <PokemonCardContent {...props} />
            <PokemonCardFooter {...props} />
            <Dialog
                hidden={hideDialog}
                onDismiss={toggleHideDialog}
                dialogContentProps={{
                    type: DialogType.normal,
                    title: props.name,
                    subText: 'Details for ' + props.name,
                    styles: {
                        title: classes.dialogTitle,
                        subText: classes.dialogSubText,
                        content: classes.dialogContent,
                    },
                }}
                modalProps={{
                    isBlocking: false,
                }}
            >
                <p className={classes.textBase}>
                    <span className={classes.bold}>maxHP: </span>{props.maxHP}
                </p>
                <p className={classes.textBase}>
                    <span className={classes.bold}>maxCP: </span>{props.maxCP}
                </p>
                <p className={classes.textBase}>
                    <span className={classes.bold}>Types: </span>{props.types.join(' . ')}
                </p>
                <p className={classes.textBase}>
                    <span className={classes.bold}>fleeRate: </span>{props.fleeRate}
                </p>
                <DialogFooter className={classes.dialogFooter}>
                    <PrimaryButton onClick={toggleHideDialog} text="OK" />
                </DialogFooter>
            </Dialog>
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
        dialogContent: {
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            background: 'linear-gradient(to bottom, #ff696929, #ff00004d)', // Gradient from bright pink to bright magenta
        },
        dialogTitle: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '10px',
        },
        dialogSubText: {
            fontSize: '16px',
            marginBottom: '20px',
        },
        textBase2: {
            fontSize: '14px',
            marginBottom: '10px',
        },
        dialogFooter: {
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: '10px',
        },
    },
    { name: 'PokemonCard' }
);