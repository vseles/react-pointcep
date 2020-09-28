import React from 'react';
import * as SC from './styles';

const Search = () => {
  return (
    <SC.Search>
      <SC.Title>Digite um CEP</SC.Title>
      <SC.Text>Digite abaixo para consultar um Código de Endereçamento Postal (CEP) do Brasil</SC.Text>
      <SC.Form>
        <SC.Label>Cep</SC.Label>
        <SC.Submit type="submit">Buscar</SC.Submit>
      </SC.Form>
    </SC.Search>
  );
};

export default Search;