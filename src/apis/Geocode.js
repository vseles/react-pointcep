import Geocode from 'react-geocode';

const GeocodeAPI = Address => new Promise (( resolve, reject ) => {

  // Request params
  Geocode.setApiKey( process.env.NEXT_PUBLIC_GEOCODE_KEY );
  Geocode.setLanguage('pt-BR');
  Geocode.setRegion('BR');

  // Request API
  Geocode.fromAddress( Address ).then( response => {
    return resolve( response );
  }, err => {
    return reject( err );
  });
});

export default GeocodeAPI;