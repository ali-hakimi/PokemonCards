import React from 'react';
import { createUseStyles } from 'react-jss';
import { Pokemon } from '../../hooks/useGetPokemons';

export const PokemonCardContent: React.FC<Pokemon> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.cardImageContainer}>
        <img className={classes.cardImage} key={props.id} alt={props.name} src={props.image} />
        <div className={classes.mask}></div>
      </div>
      <div className={classes.cardName}>{props.name}</div>
      <div className={classes.cardTypes}>
        <span className={classes.bold}>Types: </span>{props.types.join(' . ')}
      </div>
      <div className={classes.cardClassification}>
        <span className={classes.bold}>Classification: </span>{props.classification}
      </div>
    </div>
  );
};

const useStyles = createUseStyles({
  root: {
    maxWidth: '100%',
    textAlign: 'center',
    boxSizing: 'border-box',
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    '&:hover $mask, &:hover $cardName, &:hover $cardTypes, &:hover $cardClassification': {
      opacity: 1,
    },
  },
  cardImageContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: '-webkit-fill-available',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensure the image covers the entire container
    minHeight: '224px', // Ensure the image has at least 224px height
    minWidth: '268px', // Ensure the image has at least 268px width
    transition: 'transform 0.3s ease-in-out', // Smooth transition for the zoom effect
    '&:hover': {
      transform: 'scale(1.05)', // Zoom in the image
    },
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 50px, rgba(0, 0, 0, 0) 224px)', // Gradient from dark to transparent
    opacity: 0,
    transition: 'opacity 0.9s ease-in-out', // Smooth transition
    pointerEvents: 'none', // Ensure the mask does not interfere with user interactions
  },
  textBase: {
    color: '#fff',
    fontFamily: 'Segoe UI',
    textAlign: 'left',
    overflow: 'hidden',
    position: 'absolute',
    opacity: 0,
    transition: 'opacity 0.6s ease-in-out', // Smooth transition
    padding: '0 16px',
  },
  cardName: {
    extend: 'textBase',
    fontSize: '24px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    top: '132px',
  },
  cardTypes: {
    extend: 'textBase',
    fontSize: '14px',
    fontWeight: '400',
    top: '168px',
  },
  cardClassification: {
    extend: 'textBase',
    fontSize: '14px',
    fontWeight: '400',
    top: '190px',
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  bold: {
    fontWeight: 'bold',
  },
}, { name: 'PokemonCardContent' });