import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogFooter, DialogType, PrimaryButton } from '@fluentui/react';
import { createUseStyles } from 'react-jss';
import { PokemonDialogDetailItem } from '../PokemonDialog/PokemonDialogDetailItem';
import { useGetPokemonDetails } from '../../hooks/useGetPokemons';

export const PokemonDialog = () => {
  const classes = useStyles();
  const { data, loading, error } = useGetPokemonDetails();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleClose = () => {
    navigate('/pokemon');
  };

  return (
    <Dialog
      hidden={false}
      onDismiss={handleClose}
      dialogContentProps={{
        type: DialogType.normal,
        title: 'Details for ' + data.pokemon.name,
      }}
    >
      <DialogContent>
        <img className={classes.dialogImage} alt={data.pokemon.name} src={data.pokemon.image} />
        <PokemonDialogDetailItem label="Name" value={data.pokemon.name} />
        <PokemonDialogDetailItem label="Number" value={data.pokemon.number} />
        <PokemonDialogDetailItem label="Classification" value={data.pokemon.classification} />
        <PokemonDialogDetailItem label="Types" value={data.pokemon.types.join(' . ')} />
        <PokemonDialogDetailItem label="Resistant" value={data.pokemon.resistant.join(' . ')} />
        <PokemonDialogDetailItem label="Flee Rate" value={data.pokemon.fleeRate} />
        <PokemonDialogDetailItem label="Max CP" value={data.pokemon.maxCP} />
        <PokemonDialogDetailItem label="Max HP" value={data.pokemon.maxHP} />
      </DialogContent>
      <DialogFooter>
        <PrimaryButton onClick={handleClose} text="Close" />
      </DialogFooter>
    </Dialog>
  );
};

const useStyles = createUseStyles(
  {
    dialogImage: {
      width: 'inherit',
    },
  },
  { name: 'PokemonDialog' }
);

