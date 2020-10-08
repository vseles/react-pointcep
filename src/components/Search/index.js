import { useContext } from 'react';
import * as SC from './styles';
import Field from '../Field';
import { AppState } from '../../state/useAppState';
import fetchViaCep from '../../utils/fetchViaCep';
import fetchGeocode from '../../utils/fetchGeocode';
import { PulseLoader } from 'react-spinners';
import swal from 'sweetalert';
import FilterSet from './FilterSet';
import { FilterType } from '../../constants/FilterType';

const Search = () => {

  const {
    filter,
    cep, setCep,
    address, setAddress,
    results, setResults,
    searching, setSearching
  } = useContext( AppState );

  const hasInput = inputVal => {
    return !!inputVal && ( String( inputVal ).trim() !== '' );
  };

  const isDisabled = ( ) => {
    return searching || !!results;
  };

  const _onSubmit = ( event ) => {

    event.preventDefault();

    if ( !isDisabled() ) {

      if ( FilterType.CEP === filter ) {

        if ( hasInput( cep ) && cep.length === 9 ) {

          CepRequest( cep );
        
        } else {
  
          swal('CEP Inválido', 'O formato de CEP inserido é inválido.', 'error');
        }

      } else if ( FilterType.ADDRESS === filter ) {

        if ( hasInput( address ) ) {

          AddressRequest( address );

        } else {
  
          swal('Endereço Inválido', 'Verifique o endereço inserido.', 'error');
        }
      }
    }
  };

  const CepRequest = async ( CEP ) => {

    try {

      setSearching( true );
    
      const Address = await fetchViaCep( CEP );
    
      if (! Address.erro ) {
    
        const formatAddress = '' +
          `${ Address.logradouro }, ${ Address.localidade }, ` +
          `${ Address.bairro.split(' ')[ 0 ] }, ${ Address.uf }, ` +
          `${ Address.cep }` +
        '';
    
        const Geocode = await fetchGeocode( formatAddress );
        const { lat, lng } = Geocode[0].geometry.location;
    
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
  
  const AddressRequest = async ( Address ) => {

    try {

      setSearching( true );

      const Geocode = await fetchGeocode( Address );

      const country = Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('country') );

      if ( country[0].short_name !== 'BR' ) {

        setSearching( false );
        swal('Consulta Inválida', 'Procure apenas por endereços nacionais.', 'error');
        return ;
      }

      const postalCode = Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('postal_code') );
      const streetName = Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('route') );
      const localName = Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('sublocality_level_1') );
      const cityName =  Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('administrative_area_level_2') );
      const stateName = Geocode[0]['address_components'].filter(( addrsInfo ) => ~addrsInfo.types.indexOf('administrative_area_level_1') );      
      const { lat, lng } = Geocode[0].geometry.location;

      const dataSet = {
        logradouro:  streetName[0] && streetName[0].long_name || '',
        bairro: localName[0] && localName[0].long_name || '',
        localidade: cityName[0] && cityName[0].long_name || '',
        uf: stateName[0] && stateName[0].short_name || '',
        cep: postalCode[0] && postalCode[0].short_name || ''
      };

      setResults({ ...dataSet, lat, lng });
      setSearching( false );

    } catch ( e ) {

      setSearching( false );
      console.error( e );

      swal('Não foi possível efetuar a consulta', 'Verifique o endereço inserido ou sua conexão.', 'error');
    }
  };

  return (
    <SC.Search>
      { FilterType.CEP === filter && (
        <React.Fragment>
          <SC.Title>Digite um CEP</SC.Title>
          <SC.Text>Digite abaixo um Código de Endereçamento Postal (CEP) para consultar um endereço</SC.Text>
        </React.Fragment>
      ) }
      { FilterType.ADDRESS === filter && (
        <React.Fragment>
          <SC.Title>Digite um Endereço</SC.Title>
          <SC.Text>Digite abaixo um endereço para consultar o seu Código de Endereçamento Postal (CEP)</SC.Text>
        </React.Fragment>
      ) }
      <SC.Form onSubmit={ _onSubmit }>
        { FilterType.CEP === filter && (
          <Field value={ cep } label="Cep" name="cep" mask="99999-999" onChange={ evt => setCep( evt.target.value ) } disabled={ isDisabled() } className={ isDisabled() ? 'disabled' : '' } required />
        ) }
        { FilterType.ADDRESS === filter && (
          <Field value={ address } label="Endereço" name="endereco" onChange={ evt => setAddress( evt.target.value ) } disabled={ isDisabled() } className={ isDisabled() ? 'disabled' : '' } required />
        ) }
        <FilterSet disabled={ isDisabled() } />
        <SC.Submit type="submit" disabled={ isDisabled() }>
          { !searching ? <span>Buscar</span> : <PulseLoader color={'#fff'} size={ 12 } css={'margin: 0 auto;'} /> }
        </SC.Submit>
      </SC.Form>
    </SC.Search>
  );
};

export default Search;