import React from 'react';
import { createUseStyles } from 'react-jss';

interface PokemonDialogDetailItemProps {
  label: string;
  value: string;
}

export const PokemonDialogDetailItem: React.FC<PokemonDialogDetailItemProps> = ({ label, value }) => {
    const classes = useStyles();

  return (
    <p className={classes.textBase}>
      <span className={classes.label}>{label}: </span>{value}
    </p>
  );
};

const useStyles = createUseStyles({
  textBase: {
    fontSize: '14px',
    marginBottom: '10px',
    color: '#000',
  },
  label: {
    fontWeight: 'bold',
    color: '#000',
  },
});
