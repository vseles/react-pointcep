import React, { useContext } from 'react';
import * as SC from './styles';
import Field from '../Field';
import { AppState } from '../../state/useAppState';
import fetchViaCep from '../../utils/fetchViaCep';
import fetchGeocode from '../../utils/fetchGeocode';
import { PulseLoader } from 'react-spinners';
import { css } from 'styled-components';
import swal from 'sweetalert';

const Search = () => {

  const {
    cep, setCep,
    results, setResults,
    searching, setSearching
  } = useContext( AppState );

  const isDisabled = ( ) => {
    return searching || !!results;
  };

  const _onSubmit = ( event ) => {

    event.preventDefault();

    if ( !isDisabled() ) {

      if ( !!cep && cep.length === 9 ) {

        handleRequest( cep );
      
      } else {

        swal('CEP Inválido', 'O formato de CEP inserido é inválido.', 'error');
      }
    }
  };

  const _onCepChange = ( event ) => {
    const value = event.target.value;
    setCep( value );
  };

  const handleRequest = async ( CEP ) => {

    try {

      setSearching( true );
    
      const Address = await fetchViaCep( CEP );
    
      if (! Address.erro ) {
    
        const parseAddress = '' +
          `${ Address.logradouro }, ${ Address.localidade }, ` +
          `${ Address.bairro.split(' ')[ 0 ] }, ${ Address.uf }, ` +
          `${ Address.cep }` +
        '';
    
        const { lat, lng } = await fetchGeocode( parseAddress );
    
        setResults({ ...Address, lat, lng });
        setSearching( false );
    
      } else {
    
        setSearching( false );
        console.error( Address );

        swal('Não foi possível efetuar a consulta', 'Verifique o CEP inserido ou sua conexão.', 'error');
      }
    
    } catch ( e ) {
    
      setSearching( false );
      console.error( e );

      swal('Não foi possível efetuar a consulta', 'Verifique o CEP inserido ou sua conexão.', 'error');
    }
  };

  return (
    <SC.Search>
      <SC.Title>Digite um CEP</SC.Title>
      <SC.Text>Digite abaixo para consultar um Código de Endereçamento Postal (CEP) do Brasil</SC.Text>
      <SC.Form onSubmit={ _onSubmit }>
        <Field value={ cep } label="Cep" name="cep" type="text" mask="99999-999" onChange={ _onCepChange } disabled={ isDisabled() } className={ isDisabled() ? 'disabled' : '' } required />
        <SC.Submit type="submit" disabled={ isDisabled() }>
            { !searching ? (
              <span>Buscar</span>
            ) : (
              <PulseLoader color={'#fff'} size={ 12 } css={ css`margin: 0 auto;` } />
            )}
        </SC.Submit>
      </SC.Form>
    </SC.Search>
  );
};

export default Search;