import React, { useContext, useEffect } from 'react';
import * as SC from './styles';
import Field from '../Field';
import { AppState } from '../../state/useAppState';

const Search = () => {

  const {
    cep, setCep,
    loading, setLoading
  } = useContext( AppState );

  const _onSubmit = ( event ) => {

    event.preventDefault();
  };

  const _onCepChange = ( event ) => {

    setCep( event.target.value );
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