import React, { useContext } from 'react';
import * as SC from './styles';
import Field from '../Field';
import { AppState } from '../../state/useAppState';
import fetchViaCep from '../../utils/fetchViaCep';
import fetchGeocode from '../../utils/fetchGeocode';
import { PulseLoader } from 'react-spinners';
import { css } from 'styled-components';

const Search = () => {

  const {
    cep, setCep,
    results, setResults,
    searching, setSearching
  } = useContext( AppState );

  const isDisabled = () => searching || !!results;

  const _onSubmit = ( event ) => {

    event.preventDefault();

    if ( !isDisabled() ) {

      if ( !!cep && cep.length === 9 ) {

        setSearching( true );

        fetchViaCep( cep ).then( Address => {
          
          if ( !Address.erro ) {

            const ParsedAddress = '' +
              `${ Address.logradouro }, ${ Address.localidade }, ` +
              `${ Address.bairro.split(' ')[ 0 ] }, ${ Address.uf }, ` +
              `${ Address.cep }` +
            '';

            fetchGeocode( ParsedAddress ).then(({ lat, lng }) => {
              
              setSearching( false );
              setResults({ ...Address, lat, lng });

            }).catch( err => {

              setSearching( false );
              console.error( err );
    
              alert('Não foi possível efetuar a busca no Geocode.');
            });

          } else {

            setSearching( false );
            console.error( Address );

            alert('Não foi possível efetuar a busca no ViaCep.');
          }

        }).catch( err => {

          setSearching( false );
          console.error( err );

          alert('Não foi possível efetuar a busca no ViaCep.');
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