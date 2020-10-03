import React, { useContext } from 'react';
import * as SC from './styles';
import { AppState } from '../../state/useAppState';
import { RiMapPin2Fill } from 'react-icons/ri'; 
import { MdClose } from 'react-icons/md';
import GoogleMapReact from 'google-map-react';
import { Colors } from '../../styles/constants';

const Address = ( props ) => {

  const { resetSearch } = useContext( AppState );

  const MapsOptions = {
    defaultZoom: 16,
    streetViewControl: true,
    panControl: true,
    mapTypeControl: true,
    scrollwheel: true,
    overviewMapControl: true,
  };

  const MapsConfig = {
    key: process.env.NEXT_PUBLIC_MAPS_KEY,
    language: 'pt-BR',
    region: 'br',
    libraries: ['places', 'geometry', 'drawing', 'visualization']
  };

  const CenterOptions = {
    lat: props.dataSet.lat,
    lng: props.dataSet.lng
  };

  return (
    <SC.Address>
      <SC.Close onClick={ resetSearch }> <MdClose size={ 32 } /> </SC.Close>
      <h2>{ props.dataSet.logradouro }</h2>
      <p>{ props.dataSet.bairro }</p>
      <p>{ props.dataSet.localidade } - { props.dataSet.uf }</p>
      <p>{ props.dataSet.cep }</p>
      <SC.Maps>
        <GoogleMapReact
          bootstrapURLKeys={ MapsConfig }
          options={ MapsOptions }
          zoom={ MapsOptions.defaultZoom }
          center={ CenterOptions }
          yesIWantToUseGoogleMapApiInternals >
          <SC.Pin { ...CenterOptions }>
            <RiMapPin2Fill color={ Colors.SUB_COLOR } size={ 36 } />
          </SC.Pin>
        </GoogleMapReact>
      </SC.Maps>
      <SC.Reset onClick={ resetSearch }>Fazer outra busca</SC.Reset>
    </SC.Address>
  );
};

export default Address;