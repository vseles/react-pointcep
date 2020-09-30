import React, { useContext } from 'react';
import * as SC from './styles';
import Field from '../Field';
import { AppState } from '../../state/useAppState';
import fetchViaCep from '../../utils/fetchViaCep';

const Search = () => {

  const {
    cep, setCep,
    results, setResults,
    searching, setSearching
  } = useContext( AppState );

  const _onSubmit = ( event ) => {

    event.preventDefault();

    if ( !searching && !results ) {

      if ( !!cep && cep.length === 9 ) {

        setSearching( true );

        fetchViaCep( cep ).then( ViaCepData => {

          setSearching( false );
          console.log('>>> ViaCepData: ', ViaCepData );

        }).catch( err => {

          setSearching( false );
          console.error( err );
        });
      }
    }
  };

  const _onCepChange = ( event ) => {

    const value = event.target.value;
    setCep( value );
  };

  return (
    <SC.Search>
      <SC.Title>Digite um CEP</SC.Title>
      <SC.Text>Digite abaixo para consultar um Código de Endereçamento Postal (CEP) do Brasil</SC.Text>
      <SC.Form onSubmit={ _onSubmit }>
        <Field value={ cep } label="Cep" name="cep" type="text" mask="99999-999" onChange={ _onCepChange } required />
        <SC.Submit type="submit">Buscar</SC.Submit>
      </SC.Form>
    </SC.Search>
  );
};

export default Search;