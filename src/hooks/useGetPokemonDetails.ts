import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom';

export type Pokemon = {
  id: string;
  name: string;
  number: string;
  classification: string;
  types: string[];
  resistant: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};

const GET_POKEMON_DETAILS = gql`
  query pokemon($id: String, $name: String){
    pokemon(id: $id, name: $name){
      id
      number
      name
      weight{
        minimum
        maximum
      }
      height{
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_POKEMON_DETAILS, {
    variables: { id },
  });

  return {
    data, loading, error,
  };
};